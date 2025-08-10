/* eslint-disable no-undef */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html} from 'lit';
import {repeat} from 'lit/directives/repeat.js';
import {msg, str} from '@lit/localize';
import {appStyles} from '../../app/style.js';
import {employeeListStyles} from './style.js';
import '../popup/popup.js';
import '../pagination/pagination.js';
import {EmployeeUtils} from '../../utils/employeeUtils.js';
import {EVENT_NAMES} from '../../constants/constants.js';

export class EmployeeList extends LitElement {
  static styles = [appStyles, employeeListStyles];

  static properties = {
    employees: {type: Array},
    loading: {type: Boolean},
    error: {type: String},
    currentPage: {type: Number},
    totalPages: {type: Number},
    totalItems: {type: Number},
    itemsPerPage: {type: Number},
    searchQuery: {type: String},
    showDeletePopup: {type: Boolean},
    employeeToDelete: {type: Object},
    selectedEmployees: {type: Object},
    showMultiDeletePopup: {type: Boolean},
    showEditErrorPopup: {type: Boolean},
    selectAllChecked: {type: Boolean},
    isSearching: {type: Boolean},
    currentLocale: {type: Boolean},
  };

  constructor() {
    super();
    this.employees = [];
    this.loading = false;
    this.error = null;
    this.currentPage = 1;
    this.totalPages = 0;
    this.totalItems = 0;
    this.itemsPerPage = 10;
    this._searchQuery = '';
    this.showDeletePopup = false;
    this.employeeToDelete = null;
    this.selectedEmployees = new Set();
    this.showMultiDeletePopup = false;
    this.showEditErrorPopup = false;
    this.selectAllChecked = false;
    this.isSearching = false;
    this.unsubscribe = null;

    this.loadEmployees();
    this.setupStoreSubscription();
  }

  updated(changedProperties) {
    if (changedProperties.has('searchQuery')) {
      this.handleSearchChange();
    }
  }

  set searchQuery(value) {
    const oldValue = this._searchQuery;
    this._searchQuery = value;
    if (oldValue !== value) {
      this.handleSearchChange();
    }
  }

  get searchQuery() {
    return this._searchQuery || '';
  }

  setupStoreSubscription() {
    this.unsubscribe = EmployeeUtils.setupStoreSubscription(this);
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener(
      EVENT_NAMES.LOCALE_CHANGED,
      this._handleLocaleChange
    );
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.unsubscribe) {
      this.unsubscribe();
    }
    document.removeEventListener(
      EVENT_NAMES.LOCALE_CHANGED,
      this._handleLocaleChange
    );
  }

  _handleLocaleChange = () => {
    this.requestUpdate();
  };

  async loadEmployees() {
    try {
      await EmployeeUtils.loadEmployees();
    } catch (error) {
      console.error('Error loading employees:', error);
    }
  }

  async changePage(page) {
    try {
      await EmployeeUtils.changePage(page);
    } catch (error) {
      console.error('Error changing page:', error);
    }
  }

  showDeleteConfirmation(employee) {
    this.employeeToDelete = employee;
    this.showDeletePopup = true;
  }

  async deleteEmployee(id) {
    try {
      await EmployeeUtils.deleteEmployee(id);
      this.showDeletePopup = false;
      this.employeeToDelete = null;
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  }

  handleDeleteConfirm() {
    if (this.employeeToDelete) {
      this.deleteEmployee(this.employeeToDelete.id);
    }
  }

  handleDeleteCancel() {
    this.showDeletePopup = false;
    this.employeeToDelete = null;
  }

  handleSelectAll() {
    if (this.selectAllChecked) {
      this.selectedEmployees = new Set();
      this.selectAllChecked = false;
    } else {
      this.selectedEmployees = new Set(this.employees.map((emp) => emp.id));
      this.selectAllChecked = true;
    }
  }

  handleEmployeeSelect(employeeId) {
    const newSelected = new Set(this.selectedEmployees);
    if (newSelected.has(employeeId)) {
      newSelected.delete(employeeId);
    } else {
      newSelected.add(employeeId);
    }
    this.selectedEmployees = newSelected;
    this.selectAllChecked = newSelected.size === this.employees.length;
  }

  handleMultiDelete() {
    if (this.selectedEmployees.size > 0) {
      this.showMultiDeletePopup = true;
    }
  }

  async handleMultiDeleteConfirm() {
    try {
      const deletePromises = Array.from(this.selectedEmployees).map((id) =>
        EmployeeUtils.deleteEmployee(id)
      );
      await Promise.all(deletePromises);
      this.selectedEmployees = new Set();
      this.selectAllChecked = false;
      this.showMultiDeletePopup = false;
    } catch (error) {
      console.error('Error deleting multiple employees:', error);
    }
  }

  handleMultiDeleteCancel() {
    this.showMultiDeletePopup = false;
  }

  handleMultiEdit() {
    if (this.selectedEmployees.size !== 1) {
      this.showEditErrorPopup = true;
      return;
    }

    const employeeId = Array.from(this.selectedEmployees)[0];
    window.location.href = `/edit/${employeeId}`;
  }

  handleEditErrorClose() {
    this.showEditErrorPopup = false;
  }

  async handleSearchChange() {
    try {
      await EmployeeUtils.searchEmployees(this._searchQuery);
    } catch (error) {
      console.error('Error searching employees:', error);
    }
  }

  render() {
    if (this.loading) {
      return html`
        <div class="loading-container">
          <div class="loading-spinner"></div>
          <p>${msg('Loading employees...')}</p>
        </div>
      `;
    }

    if (this.error) {
      return html`
        <div class="error-container">
          <p class="error-message">${this.error}</p>
          <button-element
            variant="primary"
            size="medium"
            label=${msg('Retry')}
            @click=${this.loadEmployees}
          >
            ${msg('Retry')}
          </button-element>
        </div>
      `;
    }

    if (this.employees.length === 0) {
      return html`
        <div class="empty-state">
          <p>${msg('No employees found.')}</p>
        </div>
      `;
    }

    return html`
      <div class="employee-list-container">
        <div class="bulk-actions">
          ${this.selectedEmployees.size > 0
            ? html`
                <div class="bulk-buttons">
                  <button-element
                    variant="primary"
                    size="small"
                    label=${msg('Edit')}
                    @click=${this.handleMultiEdit}
                  >
                    ${msg('Edit')}
                  </button-element>
                  <button-element
                    variant="danger"
                    size="small"
                    label=${msg('Delete')}
                    @click=${this.handleMultiDelete}
                  >
                    ${msg('Delete')}
                  </button-element>
                </div>
              `
            : ''}
        </div>

        <div class="table-container">
          <table class="employee-table">
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    .checked=${this.selectAllChecked}
                    @change=${this.handleSelectAll}
                  />
                </th>
                <th>${msg('First Name')}</th>
                <th>${msg('Last Name')}</th>
                <th>${msg('Date of Employment')}</th>
                <th>${msg('Date of Birth')}</th>
                <th>${msg('Phone')}</th>
                <th>${msg('Email')}</th>
                <th>${msg('Department')}</th>
                <th>${msg('Position')}</th>
                <th>${msg('Actions')}</th>
              </tr>
            </thead>
            <tbody>
              ${repeat(
                this.employees,
                (employee) => employee.id,
                (employee) => html`
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        .checked=${this.selectedEmployees.has(employee.id)}
                        @change=${() => this.handleEmployeeSelect(employee.id)}
                      />
                    </td>
                    <td>${employee.firstName}</td>
                    <td>${employee.lastName}</td>
                    <td>${employee.employmentDate}</td>
                    <td>${employee.birthDate}</td>
                    <td>${employee.phone}</td>
                    <td>${employee.email}</td>
                    <td>${employee.department}</td>
                    <td>${employee.position}</td>
                    <td class="actions">
                      <a href="/edit/${employee.id}">✏️</a>
                      <span
                        @click=${() => this.showDeleteConfirmation(employee)}
                        >🗑️</span
                      >
                    </td>
                  </tr>
                `
              )}
            </tbody>
          </table>
        </div>

        <pagination-element
          .currentPage=${this.currentPage}
          .totalPages=${this.totalPages}
          @page-change=${(event) => this.changePage(event.detail.page)}
        ></pagination-element>
      </div>

      <popup-element
        .open=${this.showDeletePopup}
        type="warning"
        .popupTitle=${msg('Confirm Delete')}
        .message=${this.employeeToDelete
          ? msg(
              str`Are you sure you want to delete ${this.employeeToDelete.firstName} ${this.employeeToDelete.lastName}?`
            )
          : ''}
        .showConfirmButtons=${true}
        .confirmText=${msg('Delete')}
        .cancelText=${msg('Cancel')}
        @confirm=${this.handleDeleteConfirm}
        @close=${this.handleDeleteCancel}
      ></popup-element>

      <popup-element
        .open=${this.showMultiDeletePopup}
        type="warning"
        .popupTitle=${msg('Confirm Delete')}
        .message=${msg(
          str`Are you sure you want to delete ${this.selectedEmployees.size} employees?`
        )}
        .showConfirmButtons=${true}
        .confirmText=${msg('Delete')}
        .cancelText=${msg('Cancel')}
        @confirm=${this.handleMultiDeleteConfirm}
        @close=${this.handleMultiDeleteCancel}
      ></popup-element>

      <popup-element
        .open=${this.showEditErrorPopup}
        type="error"
        .popupTitle=${msg('Error')}
        .message=${msg('You can only edit one employee.')}
        @close=${this.handleEditErrorClose}
      ></popup-element>
    `;
  }
}

window.customElements.define('employee-list', EmployeeList);

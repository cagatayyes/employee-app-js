/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html} from 'lit';
import {repeat} from 'lit/directives/repeat.js';
import {msg, str} from '@lit/localize';
import {appStyles} from '../../app/style.js';
import {employeeGridStyles} from './style.js';
import '../popup/popup.js';
import '../employee-card/employee-card.js';
import '../pagination/pagination.js';
import {EmployeeUtils} from '../../utils/employeeUtils.js';
import {EVENT_NAMES} from '../../constants/constants.js';

export class EmployeeGrid extends LitElement {
  static styles = [appStyles, employeeGridStyles];

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
    isSearching: {type: Boolean},
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

  handleEditEmployee(event) {
    const employeeId = event.detail.employeeId;
    window.location.href = `/edit/${employeeId}`;
  }

  handleDeleteEmployee(event) {
    const employee = event.detail.employee;
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
      <div class="employee-grid">
        <div class="grid-container" part="grid">
          ${repeat(
            this.employees,
            (employee) => employee.id,
            (employee) => html`
              <employee-card
                .employee=${employee}
                @edit-employee=${this.handleEditEmployee}
                @delete-employee=${this.handleDeleteEmployee}
              ></employee-card>
            `
          )}
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
    `;
  }
}

window.customElements.define('employee-grid', EmployeeGrid);

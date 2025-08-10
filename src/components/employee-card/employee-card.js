/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html} from 'lit';
import {msg} from '@lit/localize';
import {employeeCardStyles} from './style.js';
import {EVENT_NAMES} from '../../constants/constants.js';

export class EmployeeCard extends LitElement {
  static styles = employeeCardStyles;

  static properties = {
    employee: {type: Object},
  };

  constructor() {
    super();
    this.employee = null;
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
    document.removeEventListener(
      EVENT_NAMES.LOCALE_CHANGED,
      this._handleLocaleChange
    );
  }

  _handleLocaleChange = () => {
    this.requestUpdate();
  };

  render() {
    if (!this.employee) {
      return html`<div class="employee-card empty">No employee data</div>`;
    }

    return html`
      <div class="employee-card" part="card">
        <div class="top">
          <div class="left">
            <div class="item">
              <span class="label">${msg('First Name')}</span>
              <span class="value">${this.employee.firstName}</span>
            </div>

            <div class="item">
              <span class="label">${msg('Date of Employment')}</span>
              <span class="value">${this.employee.employmentDate}</span>
            </div>

            <div class="item">
              <span class="label">${msg('Phone')}</span>
              <span class="value">${this.employee.phone}</span>
            </div>

            <div class="item">
              <span class="label">${msg('Department')}</span>
              <span class="value">${this.employee.department}</span>
            </div>
          </div>

          <div class="right">
            <div class="item">
              <span class="label">${msg('Last Name')}</span>
              <span class="value">${this.employee.lastName}</span>
            </div>
            <div class="item">
              <span class="label">${msg('Date of Birth')}</span>
              <span class="value">${this.employee.birthDate}</span>
            </div>
            <div class="item">
              <span class="label">${msg('Email')}</span>
              <span class="value">${this.employee.email}</span>
            </div>

            <div class="item">
              <span class="label">${msg('Position')}</span>
              <span class="value">${this.employee.position}</span>
            </div>
          </div>
        </div>

        <div class="bottom">
          <button-element
            variant="primary"
            size="small"
            label=${msg('Edit')}
            @click=${() => this.editEmployee(this.employee?.id)}
          >
            ${msg('Edit')}
          </button-element>
          <button-element
            variant="danger"
            size="small"
            label=${msg('Delete')}
            @click=${() => this.deleteEmployee(this.employee?.id)}
          >
            ${msg('Delete')}
          </button-element>
        </div>
      </div>
    `;
  }

  editEmployee(id) {
    if (id) {
      this.dispatchEvent(
        new CustomEvent(EVENT_NAMES.EDIT_EMPLOYEE, {
          detail: {employeeId: id, employee: this.employee},
          bubbles: true,
          composed: true,
        })
      );
    }
  }

  deleteEmployee(id) {
    if (id) {
      this.dispatchEvent(
        new CustomEvent(EVENT_NAMES.DELETE_EMPLOYEE, {
          detail: {employeeId: id, employee: this.employee},
          bubbles: true,
          composed: true,
        })
      );
    }
  }
}

window.customElements.define('employee-card', EmployeeCard);

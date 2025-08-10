/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html} from 'lit';
import {msg, str} from '@lit/localize';
import '../input/input.js';
import '../button/button.js';
import '../popup/popup.js';
import {validateEmployeeForm} from '../../schemas/employee-schema.js';
import {employeeFormStyles} from './style.js';
import {
  EMPLOYEE,
  EVENT_NAMES,
  FORM_MODES,
  POPUP_TYPES,
} from '../../constants/constants.js';

export class EmployeeForm extends LitElement {
  static styles = employeeFormStyles;

  static properties = {
    mode: {type: String},
    formData: {type: Object},
    errors: {type: Object},
    isSubmitting: {type: Boolean},
    popupConfig: {type: Object},
    isLoading: {type: Boolean},
    pageTitle: {type: String},
    submitButtonText: {type: String},
    submitButtonLoadingText: {type: String},
  };

  constructor() {
    super();
    this.mode = FORM_MODES.ADD;
    this.formData = EMPLOYEE.DEFAULT_EMPLOYEE;
    this.errors = {};
    this.isSubmitting = false;
    this.popupConfig = {
      open: false,
      type: 'info',
      title: '',
      message: '',
      autoClose: 0,
    };
    this.isLoading = false;
    this.pageTitle = '';
    this.submitButtonText = msg('Save');
    this.submitButtonLoadingText = msg('Saving...');
  }

  departments = EMPLOYEE.DEPARTMENTS;
  positions = EMPLOYEE.POSITIONS;

  connectedCallback() {
    super.connectedCallback();
    this._updateTexts();
  }

  updated(changedProperties) {
    super.updated(changedProperties);

    if (changedProperties.has('mode')) {
      this._updateTexts();
    }
  }

  _updateTexts() {
    if (this.mode === FORM_MODES.ADD) {
      this.pageTitle = msg('Add New Employee');
      this.submitButtonText = msg('Save');
      this.submitButtonLoadingText = msg('Adding...');
    } else if (this.mode === FORM_MODES.EDIT) {
      this.pageTitle = msg('Edit Employee');
      this.submitButtonText = msg('Save');
      this.submitButtonLoadingText = msg('Saving...');
    }
  }

  render() {
    if (this.isLoading) {
      return html`
        <div class="employee-form">
          <div class="loading">${msg('Loading employee information...')}</div>
        </div>
      `;
    }

    return html`
      <div class="employee-form">
        ${this.mode === FORM_MODES.EDIT
          ? html`
              <div class="page-header">
                <p class="page-subtitle">
                  ${msg(
                    str`Editing employee ${this.formData.firstName} ${this.formData.lastName}`
                  )}
                </p>
              </div>
            `
          : ''}

        <div class="form-container">
          <form @submit=${this.handleSubmit}>
            <div class="form-grid">
              <input-element
                label=${msg('First Name')}
                name="firstName"
                .value=${this.formData.firstName}
                .error=${this.errors.firstName || ''}
                @value-changed=${this.handleInputChange}
              ></input-element>

              <input-element
                label=${msg('Date of Birth')}
                name="dateOfBirth"
                type="date"
                .value=${this.formData.dateOfBirth}
                .error=${this.errors.dateOfBirth || ''}
                @value-changed=${this.handleInputChange}
              ></input-element>

              <input-element
                label=${msg('Department')}
                name="department"
                type="select"
                .value=${this.formData.department}
                .options=${this.departments}
                .error=${this.errors.department || ''}
                @value-changed=${this.handleInputChange}
              ></input-element>

              <input-element
                label=${msg('Last Name')}
                name="lastName"
                .value=${this.formData.lastName}
                .error=${this.errors.lastName || ''}
                @value-changed=${this.handleInputChange}
              ></input-element>

              <input-element
                label=${msg('Phone')}
                name="phone"
                .value=${this.formData.phone}
                .error=${this.errors.phone || ''}
                @value-changed=${this.handleInputChange}
              ></input-element>

              <input-element
                label=${msg('Position')}
                name="position"
                type="select"
                .value=${this.formData.position}
                .options=${this.positions}
                .error=${this.errors.position || ''}
                @value-changed=${this.handleInputChange}
              ></input-element>

              <input-element
                label=${msg('Date of Employment')}
                name="dateOfEmployment"
                type="date"
                .value=${this.formData.dateOfEmployment}
                .error=${this.errors.dateOfEmployment || ''}
                @value-changed=${this.handleInputChange}
              ></input-element>

              <input-element
                label=${msg('Email')}
                name="email"
                type="email"
                .value=${this.formData.email}
                .error=${this.errors.email || ''}
                @value-changed=${this.handleInputChange}
              ></input-element>
            </div>

            <div class="form-actions">
              <button-element
                variant="primary"
                size="medium"
                label=${this.isSubmitting
                  ? this.submitButtonLoadingText
                  : this.submitButtonText}
                ?disabled=${this.isSubmitting}
                @click=${this.handleSubmit}
              >
                ${this.isSubmitting
                  ? this.submitButtonLoadingText
                  : this.submitButtonText}
              </button-element>
              <button-element
                variant="secondary"
                size="medium"
                label=${msg('Cancel')}
                @click=${this.handleCancel}
              >
                ${msg('Cancel')}
              </button-element>
            </div>
          </form>
        </div>
      </div>

      <popup-element
        .open=${this.popupConfig.open}
        .type=${this.popupConfig.type}
        .popupTitle=${this.popupConfig.title}
        .message=${this.popupConfig.message}
        .autoClose=${this.popupConfig.autoClose}
        .showConfirmButtons=${this.popupConfig.type === POPUP_TYPES.WARNING}
        .confirmText=${this.popupConfig.type === POPUP_TYPES.WARNING
          ? msg('Exit')
          : msg('Confirm')}
        .cancelText=${this.popupConfig.type === POPUP_TYPES.WARNING
          ? msg('Stay')
          : msg('Cancel')}
        @close=${this.handlePopupClose}
        @confirm=${this.handleCancelConfirm}
      ></popup-element>
    `;
  }

  handleInputChange(event) {
    const {name, value} = event.detail;
    this.formData = {...this.formData, [name]: value};

    if (this.errors[name]) {
      this.errors = {...this.errors, [name]: ''};
    }
  }

  async handleSubmit(event) {
    event.preventDefault();

    this.isSubmitting = true;

    const validationResult = validateEmployeeForm(this.formData);

    if (!validationResult.success) {
      this.errors = {};
      validationResult.error.issues.forEach((error) => {
        const fieldName = error.path[0];
        this.errors[fieldName] = error.message;
      });
      this.showPopup(
        POPUP_TYPES.ERROR,
        msg('Form Error'),
        msg('Form has errors. Please check all fields.')
      );
      this.isSubmitting = false;
      return;
    }

    const submitEvent = new CustomEvent(EVENT_NAMES.FORM_SUBMIT, {
      detail: {
        formData: this.formData,
        mode: this.mode,
      },
    });
    this.dispatchEvent(submitEvent);
  }

  showPopup(type, title, message, autoClose = 3000) {
    this.popupConfig = {
      open: true,
      type,
      title,
      message,
      autoClose,
    };
  }

  handlePopupClose() {
    this.popupConfig = {...this.popupConfig, open: false};
  }

  handleCancel() {
    const message =
      this.mode === FORM_MODES.ADD
        ? msg('Form data not saved. Are you sure you want to exit?')
        : msg('Changes not saved. Are you sure you want to exit?');

    this.showPopup(POPUP_TYPES.WARNING, msg('Cancel'), message, 0);
  }

  handleCancelConfirm() {
    const cancelEvent = new CustomEvent(EVENT_NAMES.FORM_CANCEL, {
      detail: {mode: this.mode},
    });
    this.dispatchEvent(cancelEvent);
  }

  setFormData(data) {
    this.formData = {...data};
  }

  setErrors(errors) {
    this.errors = {...errors};
  }

  setSubmitting(submitting) {
    this.isSubmitting = submitting;
  }

  setLoading(loading) {
    this.isLoading = loading;
  }

  resetForm() {
    this.formData = EMPLOYEE.DEFAULT_EMPLOYEE;
    this.errors = {};
  }
}

window.customElements.define('employee-form', EmployeeForm);

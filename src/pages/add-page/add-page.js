/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html} from 'lit';
import {msg} from '@lit/localize';
import '../../components/employee-form/employee-form.js';
import '../../components/popup/popup.js';
import {addPageStyles} from './style.js';
import {store} from '../../store/store.js';
import {addEmployee} from '../../store/employeeSlice.js';
import {
  FORM_MODES,
  ROUTES,
  EVENT_NAMES,
  POPUP_TYPES,
} from '../../constants/constants.js';

export class EmployeeAddPage extends LitElement {
  static styles = addPageStyles;

  static properties = {
    popupConfig: {type: Object},
  };

  constructor() {
    super();
    this.popupConfig = {
      open: false,
      type: 'info',
      title: '',
      message: '',
      autoClose: 0,
    };
  }

  connectedCallback() {
    super.connectedCallback();
    window.scrollTo(0, 0);

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
    return html`
      <div class="employee-add-page">
        <employee-form
          mode=${FORM_MODES.ADD}
          @form-submit=${this.handleFormSubmit}
          @form-cancel=${this.handleFormCancel}
        ></employee-form>
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

  async handleFormSubmit(event) {
    const {formData} = event.detail;

    try {
      // eslint-disable-next-line no-undef
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const newEmployee = {
        id: Date.now(),
        firstName: formData.firstName,
        lastName: formData.lastName,
        birthDate: formData.dateOfBirth,
        employmentDate: formData.dateOfEmployment,
        phone: formData.phone,
        email: formData.email,
        department: formData.department,
        position: formData.position,
      };

      store.dispatch(addEmployee(newEmployee));

      this.showPopup(
        POPUP_TYPES.SUCCESS,
        msg('Success'),
        msg('New employee added successfully! Redirecting to main page...'),
        2000
      );

      setTimeout(() => {
        window.location.href = ROUTES.HOME;
      }, 2000);
    } catch (error) {
      this.showPopup(
        POPUP_TYPES.ERROR,
        msg('Error'),
        msg('An error occurred while adding employee.')
      );
    }
  }

  handleFormCancel() {
    this.showPopup(
      POPUP_TYPES.WARNING,
      msg('Cancel'),
      msg('Form data not saved. Are you sure you want to exit?'),
      0
    );
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

  handleCancelConfirm() {
    window.location.href = ROUTES.HOME;
  }
}

window.customElements.define('employee-add-page', EmployeeAddPage);

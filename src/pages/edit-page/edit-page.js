/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html} from 'lit';
import {msg} from '@lit/localize';
import '../../components/employee-form/employee-form.js';
import '../../components/popup/popup.js';
import {editPageStyles} from './style.js';
import {store} from '../../store/store.js';
import {
  getEmployeeById,
  updateEmployee,
  clearSelectedEmployee,
} from '../../store/employeeSlice.js';
import {appStyles} from '../../app/style.js';
import {
  FORM_MODES,
  ROUTES,
  EVENT_NAMES,
  POPUP_TYPES,
} from '../../constants/constants.js';
import {DateUtils} from '../../utils/date.js';

export class EmployeeEditPage extends LitElement {
  static styles = [appStyles, editPageStyles];

  static properties = {
    employeeId: {type: String},
    popupConfig: {type: Object},
  };

  constructor() {
    super();
    this.employeeId = '';
    this.popupConfig = {
      open: false,
      type: POPUP_TYPES.INFO,
      title: '',
      message: '',
      autoClose: 0,
    };
  }

  connectedCallback() {
    super.connectedCallback();
    window.scrollTo(0, 0);
    this.loadEmployeeData();

    document.addEventListener(
      EVENT_NAMES.LOCALE_CHANGED,
      this._handleLocaleChange
    );
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    store.dispatch(clearSelectedEmployee());

    document.removeEventListener(
      EVENT_NAMES.LOCALE_CHANGED,
      this._handleLocaleChange
    );
  }

  _handleLocaleChange = () => {
    this.requestUpdate();
  };

  async loadEmployeeData() {
    if (!this.employeeId) return;

    try {
      const result = await store.dispatch(
        getEmployeeById(parseInt(this.employeeId))
      );
      if (getEmployeeById.fulfilled.match(result)) {
        const employee = result.payload;

        const formData = {
          firstName: employee.firstName,
          lastName: employee.lastName,
          dateOfBirth: DateUtils.formatDateForInput(employee.birthDate),
          dateOfEmployment: DateUtils.formatDateForInput(
            employee.employmentDate
          ),
          phone: employee.phone,
          email: employee.email,
          department: employee.department,
          position: employee.position,
        };

        const formElement = this.shadowRoot.querySelector('employee-form');
        if (formElement) {
          formElement.setFormData(formData);
        }
      }
    } catch (error) {
      console.error('Error loading employee data:', error);
      this.showPopup(
        POPUP_TYPES.ERROR,
        msg('Error'),
        msg('An error occurred while loading employee information.')
      );
    }
  }

  render() {
    return html`
      <div class="employee-edit-page">
        <employee-form
          mode=${FORM_MODES.EDIT}
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
      const updatedEmployee = {
        id: parseInt(this.employeeId),
        firstName: formData.firstName,
        lastName: formData.lastName,
        birthDate: this.formatDateForDisplay(formData.dateOfBirth),
        employmentDate: this.formatDateForDisplay(formData.dateOfEmployment),
        phone: formData.phone,
        email: formData.email,
        department: formData.department,
        position: formData.position,
      };

      await store.dispatch(updateEmployee(updatedEmployee));

      this.showPopup(
        POPUP_TYPES.SUCCESS,
        msg('Success'),
        msg('Employee information updated successfully!'),
        3000
      );

      setTimeout(() => {
        window.location.href = ROUTES.HOME;
      }, 3000);
    } catch (error) {
      this.showPopup(
        POPUP_TYPES.ERROR,
        msg('Error'),
        msg('An error occurred while updating employee information.')
      );
    }
  }

  handleFormCancel() {
    this.showPopup(
      POPUP_TYPES.WARNING,
      msg('Cancel'),
      msg('Changes not saved. Are you sure you want to exit?'),
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

window.customElements.define('employee-edit-page', EmployeeEditPage);

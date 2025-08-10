/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {Router} from '@lit-labs/router';
import {msg} from '@lit/localize';
import '../pages/employees-page/employees-page';
import '../pages/edit-page/edit-page';
import '../pages/add-page/add-page';
import '../pages/main-page/main-page';
import '../components/header/header';
import {appStyles} from './style';
import {initializeLocalization} from './localization.js';
import {ROUTES, LOCALES, EVENT_NAMES} from '../constants/constants.js';

/**
 * Main employee application component.
 */
export class EmployeeApp extends LitElement {
  static styles = [
    appStyles,
    css`
      :host {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }

      .app-container {
        flex: 1;
        display: flex;
        flex-direction: column;
      }
    `,
  ];

  static properties = {
    currentLocale: {type: String},
  };

  constructor() {
    super();
    this.currentLocale = localStorage.getItem('app-locale') || LOCALES.EN;
  }

  async connectedCallback() {
    super.connectedCallback();

    await initializeLocalization();

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

  _handleLocaleChange = (event) => {
    this.currentLocale = event.detail.locale;
    this.requestUpdate();
  };

  router = new Router(this, [
    {
      path: ROUTES.HOME,
      render: () => {
        return html`
          <main-page pageTitle=${msg('Employee List')}>
            <employees-page slot="content"></employees-page>
          </main-page>
        `;
      },
    },
    {
      path: ROUTES.EDIT,
      render: (params) => {
        return html`
          <main-page pageTitle=${msg('Edit Employee')}>
            <employee-edit-page
              slot="content"
              employeeId=${params.id}
            ></employee-edit-page>
          </main-page>
        `;
      },
    },
    {
      path: ROUTES.ADD,
      render: () => {
        return html`
          <main-page pageTitle=${msg('Add Employee')}>
            <employee-add-page slot="content"></employee-add-page>
          </main-page>
        `;
      },
    },
  ]);

  render() {
    return html`
      <div class="app-container" part="app-container">
        <header-element></header-element>
        <main>${this.router.outlet()}</main>
      </div>
    `;
  }
}

window.customElements.define('employee-app', EmployeeApp);

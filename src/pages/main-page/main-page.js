/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html} from 'lit';
import '../../components/employee-list/employee-list.js';
import '../../components/employee-card/employee-card.js';
import '../../components/button/button.js';
import {mainPageStyles} from './style.js';
import {msg} from '@lit/localize';
import {EVENT_NAMES} from '../../constants/constants.js';

export class MainPage extends LitElement {
  static styles = mainPageStyles;

  constructor() {
    super();
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
    return html`
      <div class="main-page">
        <header class="main-page-header" part="title">
          <h1 class="main-page-title">${msg('Employee List')}</h1>
        </header>
        <main class="main-page-content" part="content">
          <slot name="content"></slot>
        </main>
      </div>
    `;
  }
}

window.customElements.define('main-page', MainPage);

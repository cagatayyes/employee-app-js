/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html} from 'lit';
import {msg} from '@lit/localize';
import {headerStyles} from './style.js';
import {appStyles} from '../../app/style.js';
import {setLocaleWithStorage} from '../../app/localization.js';
import {LOCALES, EVENT_NAMES} from '../../constants/constants.js';

export class HeaderElement extends LitElement {
  static styles = [appStyles, headerStyles];

  static properties = {
    currentLocale: {type: String},
  };

  constructor() {
    super();
    this.currentLocale = localStorage.getItem('app-locale') || LOCALES.EN;
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

  _handleLocaleChange = (event) => {
    this.currentLocale = event.detail.locale;
    this.requestUpdate();
  };

  async _toggleLanguage() {
    const newLocale =
      this.currentLocale === LOCALES.EN ? LOCALES.TR : LOCALES.EN;
    this.currentLocale = newLocale;

    await setLocaleWithStorage(newLocale);
  }

  render() {
    return html`
      <header>
        <a href="/" class="left">
          <img
            class="logo-image"
            src="../../../assets/images/logo.png"
            alt="LOGO"
          />
          <span class="logo-text">ING</span>
        </a>
        <div class="right">
          <a class="link" href="/"
            ><img
              class="link-image"
              src="../../../assets/icons/user.svg"
            /><span class="link-text">${msg('Employees')}</span></a
          >
          <a class="link" href="/add"
            ><img class="link-image" src="../../../assets/icons/add.svg" />
            <span class="link-text">${msg('Add New')}</span></a
          >
          <button
            class="localization"
            @click=${this._toggleLanguage}
            title=${this.currentLocale === LOCALES.EN
              ? msg('Switch to Turkish')
              : msg('Switch to English')}
          >
            <img
              class="localization-image"
              src="../../../assets/images/${this.currentLocale === LOCALES.EN
                ? LOCALES.TR
                : LOCALES.EN}.png"
              alt=${this.currentLocale === LOCALES.EN ? 'TR' : 'EN'}
            />
          </button>
        </div>
      </header>
    `;
  }
}

window.customElements.define('header-element', HeaderElement);

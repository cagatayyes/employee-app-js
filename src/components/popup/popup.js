/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html} from 'lit';
import {classMap} from 'lit/directives/class-map.js';
import {popupStyles} from './style.js';
import {EVENT_NAMES, POPUP_TYPES} from '../../constants/constants.js';

export class PopupElement extends LitElement {
  static styles = popupStyles;

  static properties = {
    open: {type: Boolean},
    type: {type: String},
    popupTitle: {type: String},
    message: {type: String},
    autoClose: {type: Number},
    showCloseButton: {type: Boolean},
    showConfirmButtons: {type: Boolean},
    confirmText: {type: String},
    cancelText: {type: String},
  };

  constructor() {
    super();
    this.open = false;
    this.type = POPUP_TYPES.INFO;
    this.popupTitle = '';
    this.message = '';
    this.autoClose = 0;
    this.showCloseButton = true;
    this.showConfirmButtons = false;
    this.confirmText = 'Confirm';
    this.cancelText = 'Cancel';
    this.autoCloseTimeout = undefined;
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
    if (this.autoCloseTimeout) {
      clearTimeout(this.autoCloseTimeout);
    }
  }

  _handleLocaleChange = () => {
    this.requestUpdate();
  };

  updated(changedProperties) {
    super.updated(changedProperties);

    if (changedProperties.has('open') && this.open) {
      this.handleOpen();
    }

    if (changedProperties.has('autoClose') && this.autoClose > 0) {
      this.setupAutoClose();
    }
  }

  handleOpen() {
    if (this.autoClose > 0) {
      this.setupAutoClose();
    }
  }

  setupAutoClose() {
    if (this.autoCloseTimeout) {
      clearTimeout(this.autoCloseTimeout);
    }

    if (this.autoClose > 0) {
      this.autoCloseTimeout = window.setTimeout(() => {
        this.close();
      }, this.autoClose);
    }
  }

  close() {
    this.open = false;
    this.dispatchEvent(
      new CustomEvent('close', {bubbles: true, composed: true})
    );
  }

  handleCancel() {
    this.dispatchEvent(
      new CustomEvent('cancel', {bubbles: true, composed: true})
    );
    this.close();
  }

  handleConfirm() {
    this.dispatchEvent(
      new CustomEvent('confirm', {bubbles: true, composed: true})
    );
    this.close();
  }

  getIcon() {
    let iconSrc;
    switch (this.type) {
      case POPUP_TYPES.SUCCESS:
        iconSrc = '/assets/icons/success.svg';
        break;
      case POPUP_TYPES.ERROR:
        iconSrc = '/assets/icons/error.svg';
        break;
      case POPUP_TYPES.WARNING:
        iconSrc = '/assets/icons/warning.svg';
        break;
      case POPUP_TYPES.INFO:
      default:
        iconSrc = '/assets/icons/info.svg';
        break;
    }

    return html`<img src=${iconSrc} alt="Icon" width="24" height="24" />`;
  }

  render() {
    if (!this.open) {
      return html``;
    }

    return html`
      <div class="popup-overlay" @click=${this.handleOverlayClick}>
        <div class="popup-container" @click=${this.handleContainerClick}>
          <div class="popup-header">
            <div
              class=${classMap({
                'popup-icon': true,
                [this.type]: true,
              })}
            >
              ${this.getIcon()}
            </div>
            ${this.showCloseButton
              ? html`
                  <button class="close-button" @click=${this.close}>
                    <img
                      src="/assets/icons/close.svg"
                      alt="Close"
                      width="20"
                      height="20"
                    />
                  </button>
                `
              : ''}
          </div>

          <div class="popup-content">
            ${this.popupTitle
              ? html`<h3 class="popup-title">${this.popupTitle}</h3>`
              : ''}
            ${this.message
              ? html`<p class="popup-message">${this.message}</p>`
              : ''}
            <slot></slot>

            ${this.showConfirmButtons
              ? html`
                  <div class="popup-actions">
                    <button-element
                      variant="secondary"
                      size="small"
                      label=${this.cancelText}
                      @click=${this.handleCancel}
                    >
                      ${this.cancelText}
                    </button-element>
                    <button-element
                      variant="primary"
                      size="small"
                      label=${this.confirmText}
                      @click=${this.handleConfirm}
                    >
                      ${this.confirmText}
                    </button-element>
                  </div>
                `
              : ''}
          </div>
        </div>
      </div>
    `;
  }

  handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  handleContainerClick(event) {
    event.stopPropagation();
  }
}

window.customElements.define('popup-element', PopupElement);

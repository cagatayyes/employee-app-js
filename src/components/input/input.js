/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html} from 'lit';
import {msg} from '@lit/localize';
import {classMap} from 'lit/directives/class-map.js';
import {inputStyles} from './style.js';
import {EVENT_NAMES} from '../../constants/constants.js';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class InputElement extends LitElement {
  static styles = inputStyles;

  static properties = {
    label: {type: String},
    error: {type: String},
    icon: {type: String},
    value: {type: String},
    type: {type: String},
    placeholder: {type: String},
    name: {type: String},
    options: {type: Array},
  };

  constructor() {
    super();
    this.label = '';
    this.error = '';
    this.icon = '';
    this.value = '';
    this.type = 'text';
    this.placeholder = '';
    this.name = '';
    this.options = [];
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

  getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  render() {
    if (this.type === 'select') {
      return html`
        <div class="input-container">
          <span class="label">${msg(this.label)}</span>
          <div class="input-wrapper">
            <select
              .value=${this.value}
              @change=${this.onChange}
              @focus=${this.onFocus}
              @blur=${this.onBlur}
              class=${classMap({
                error: this.error,
              })}
              name=${this.name}
            >
              <option value="">${msg('Select')}</option>
              ${this.options.map(
                (option) =>
                  html`<option value=${option.value}>
                    ${msg(option.label)}
                  </option>`
              )}
            </select>
            ${this.icon ? html`<span class="icon">${this.icon}</span>` : ''}
          </div>
          ${this.error
            ? html`<span class="error-message">${msg(this.error)}</span>`
            : ''}
        </div>
      `;
    }

    return html`
      <div class="input-container">
        <span class="label">${msg(this.label)}</span>
        <div class="input-wrapper">
          <input
            .value=${this.value}
            .type=${this.type}
            .placeholder=${this.placeholder ? msg(this.placeholder) : ''}
            .name=${this.name}
            .max=${this.type === 'date' ? this.getTodayDate() : undefined}
            @change=${this.onChange}
            @input=${this.onInput}
            @focus=${this.onFocus}
            @blur=${this.onBlur}
            class=${classMap({
              error: this.error,
            })}
          />
          ${this.icon ? html`<span class="icon">${this.icon}</span>` : ''}
        </div>
        ${this.error
          ? html`<span class="error-message">${msg(this.error)}</span>`
          : ''}
      </div>
    `;
  }

  onChange(event) {
    const target = event.target;
    this.dispatchEvent(
      new CustomEvent(EVENT_NAMES.VALUE_CHANGED, {
        detail: {
          name: this.name,
          value: target.value,
        },
      })
    );
  }

  onInput(event) {
    const target = event.target;
    this.value = target.value;
  }

  onFocus(event) {
    this.dispatchEvent(new CustomEvent('focus', {detail: event}));
  }

  onBlur(event) {
    this.dispatchEvent(new CustomEvent('blur', {detail: event}));
  }

  /**
   * Formats a greeting
   * @param name The name to say "Hello" to
   */
  sayHello(name) {
    return `Hello, ${name}`;
  }
}

window.customElements.define('input-element', InputElement);

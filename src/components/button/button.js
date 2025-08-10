/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html} from 'lit';
import {classMap} from 'lit/directives/class-map.js';
import {buttonStyles} from './style.js';

export class ButtonElement extends LitElement {
  static styles = buttonStyles;

  static properties = {
    label: {type: String},
    variant: {type: String},
    size: {type: String},
    fullWidth: {type: Boolean},
    disabled: {type: Boolean},
  };

  constructor() {
    super();
    this.label = '';
    this.variant = 'primary';
    this.size = 'medium';
    this.fullWidth = false;
    this.disabled = false;
  }

  render() {
    return html`
      <button
        part="button"
        class=${classMap({
          'button-element': true,
          [this.variant]: true,
          small: this.size === 'small',
          large: this.size === 'large',
          'full-width': this.fullWidth,
        })}
        ?disabled=${this.disabled}
      >
        <slot>${this.label}</slot>
      </button>
    `;
  }
}

window.customElements.define('button-element', ButtonElement);

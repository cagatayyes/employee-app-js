/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html} from 'lit';
import {msg} from '@lit/localize';
import '../../components/employee-list/employee-list.js';
import '../../components/employee-grid/employee-grid.js';
import '../../components/button/button.js';
import '../../components/input/input.js';
import {employeesPageStyles} from './style.js';
import {EVENT_NAMES, VIEW_MODES} from '../../constants/constants.js';

export class EmployeesPage extends LitElement {
  static styles = employeesPageStyles;

  static properties = {
    viewMode: {type: String},
    count: {type: Number},
    searchQuery: {type: String},
  };

  constructor() {
    super();
    this.viewMode = VIEW_MODES.LIST;
    this.count = 0;
    this.searchQuery = '';
  }

  render() {
    return html`
      <div class="employees-content">
        <div class="employees-toolbar" part="toolbar">
          <div class="search-container">
            <input-element
              class="search-input"
              type="text"
              placeholder=${msg('Search employees...')}
              .value=${this.searchQuery}
              @value-changed=${this.handleSearchInput}
            ></input-element>
            ${this.searchQuery
              ? html`
                  <button class="clear-search-btn" @click=${this.clearSearch}>
                    ✕
                  </button>
                `
              : ''}
          </div>
          <div class="view-buttons">
            <button-element
              variant=${this.viewMode === VIEW_MODES.LIST
                ? 'primary'
                : 'secondary'}
              size="small"
              @click=${() => this._setViewMode(VIEW_MODES.LIST)}
            >
              <img src="../../../assets/icons/list.svg" />
            </button-element>
            <button-element
              variant=${this.viewMode === VIEW_MODES.GRID
                ? 'primary'
                : 'secondary'}
              size="small"
              @click=${() => this._setViewMode(VIEW_MODES.GRID)}
            >
              <img src="../../../assets/icons/grid.svg" />
            </button-element>
          </div>
        </div>
        <div class="employees-list-area" part="content">
          ${this.viewMode === VIEW_MODES.LIST
            ? html`<employee-list
                .searchQuery=${this.searchQuery}
              ></employee-list>`
            : html`<employee-grid
                .searchQuery=${this.searchQuery}
              ></employee-grid>`}
        </div>
      </div>
    `;
  }

  _setViewMode(mode) {
    this.viewMode = mode;
    this.dispatchEvent(
      new CustomEvent(EVENT_NAMES.VIEW_CHANGED, {
        detail: {viewMode: mode},
      })
    );
  }

  handleSearchInput(event) {
    this.searchQuery = event.detail.value;
  }

  clearSearch() {
    this.searchQuery = '';
  }
}

window.customElements.define('employees-page', EmployeesPage);

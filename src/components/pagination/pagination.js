/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html} from 'lit';
import {msg} from '@lit/localize';
import {appStyles} from '../../app/style.js';
import {paginationStyles} from './style.js';
import '../button/button.js';

/**
 * Pagination component for displaying page navigation.
 *
 * @fires page-change - Fired when a page is selected
 * @csspart pagination - The pagination container
 */
export class Pagination extends LitElement {
  static styles = [appStyles, paginationStyles];

  static properties = {
    currentPage: {type: Number},
    totalPages: {type: Number},
    maxVisiblePages: {type: Number},
  };

  constructor() {
    super();
    this.currentPage = 1;
    this.totalPages = 0;
    this.maxVisiblePages = 5;
  }

  getPageNumbers() {
    const pages = [];
    let startPage = Math.max(
      1,
      this.currentPage - Math.floor(this.maxVisiblePages / 2)
    );
    let endPage = Math.min(
      this.totalPages,
      startPage + this.maxVisiblePages - 1
    );

    if (endPage - startPage + 1 < this.maxVisiblePages) {
      startPage = Math.max(1, endPage - this.maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  }

  handlePageChange(page) {
    this.dispatchEvent(
      new CustomEvent('page-change', {
        detail: {page},
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    if (this.totalPages <= 1) {
      return html``;
    }

    return html`
      <div class="pagination" part="pagination">
        <button-element
          variant="secondary"
          size="small"
          label=${msg('Previous')}
          ?disabled=${this.currentPage === 1}
          @click=${() => this.handlePageChange(this.currentPage - 1)}
        >
          ${msg('Previous')}
        </button-element>

        ${this.getPageNumbers().map(
          (page) => html`
            <button-element
              variant=${page === this.currentPage ? 'primary' : 'secondary'}
              size="small"
              label=${page.toString()}
              @click=${() => this.handlePageChange(page)}
            >
              ${page}
            </button-element>
          `
        )}

        <button-element
          variant="secondary"
          size="small"
          label=${msg('Next')}
          ?disabled=${this.currentPage === this.totalPages}
          @click=${() => this.handlePageChange(this.currentPage + 1)}
        >
          ${msg('Next')}
        </button-element>
      </div>
    `;
  }
}

window.customElements.define('pagination-element', Pagination);

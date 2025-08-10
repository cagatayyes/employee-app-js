import {css} from 'lit';

export const employeesPageStyles = css`
  :host {
    display: block;
  }

  .employees-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .employees-toolbar {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
    padding: 10px 0;
    border-bottom: 1px solid var(--border-grey, '#e0e0e0');
  }

  .search-container {
    position: relative;
    display: flex;
    align-items: center;
    flex: 1;
    max-width: 200px;
  }

  .search-container input-element {
    height: 40px;
  }

  .clear-search-btn {
    position: absolute;
    height: 100%;
    top: 4px;
    right: 8px;
    background-color: var(--primary-color, '#ff6200');
    border: none;
    color: #999;
    cursor: pointer;
    font-size: 16px;
    padding: 4px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
  }

  .clear-search-btn:hover {
    background-color: #f5f5f5;
    color: #666;
  }

  .view-buttons {
    display: flex;
    gap: 10px;
  }

  .employees-toolbar button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-color, '#ff6200');
    border: none;
    border-radius: 8px;
    color: #fff;
    padding: 8px 16px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.2s;
  }

  .employees-toolbar button img {
    width: 16px;
    height: 16px;
  }

  .employees-toolbar button:hover {
    background-color: #e55a00;
  }

  .employees-toolbar button.active {
    background-color: var(--primary-color, '#ff6200');
  }

  .employees-list-area {
    flex: 1;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .employees-toolbar {
      flex-direction: column;
      gap: 15px;
      align-items: stretch;
    }

    .search-container {
      max-width: none;
    }

    .view-buttons {
      justify-content: center;
    }
  }

  @media (max-width: 480px) {
    .employees-toolbar {
      padding: 8px 0;
    }

    .view-buttons {
      gap: 8px;
    }
  }
`;

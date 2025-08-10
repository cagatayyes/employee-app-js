import {css} from 'lit';

export const employeeListStyles = css`
  :host {
    font-size: 24px;
    color: var(--secondary-color, '#172b53');

    @media only screen and (max-width: 1200px) {
      display: flex;
      width: 100%;
      overflow-y: auto;
    }
  }

  .employee-list-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    background-color: #fff;
    border-radius: 8px;

    @media only screen and (max-width: 1200px) {
      overflow-y: auto;
    }
  }

  .loading {
    text-align: center;
    padding: 20px;
    font-size: 16px;
    color: #666;
  }

  .error {
    text-align: center;
    padding: 20px;
    font-size: 16px;
    color: #d32f2f;
    background-color: #ffebee;
    border-radius: 4px;
    margin: 10px 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    thead {
      th {
        padding-top: 20px;
        padding-right: 20px;
        font-weight: 500;
      }

      th:first-child {
        padding-left: 20px;
        padding-right: 0;
      }

      tr {
        height: 80px;
        font-size: 12px;
        text-align: center;
        color: var(--primary-color, '#ff6200');
      }
    }

    tbody {
      tr {
        height: 80px;
        border-bottom: 1px solid var(--border-grey, '#e0e0e0');
        font-size: 14px;
        text-align: center;
        padding: 0 24px;

        td {
          padding-top: 20px;
          padding-bottom: 20px;
          padding-right: 20px;
          color: #666; /* Diğer sütunlar için gri renk */
          min-width: 60px;
        }

        td:first-child {
          padding-left: 20px;
          padding-right: 0;
        }

        /* First Name ve Last Name sütunları için mevcut rengi koru */
        td:nth-child(2),
        td:nth-child(3) {
          color: var(--secondary-color, '#172b53'); /* Mevcut renk */
        }
      }
      tr:last-child {
        border-bottom: none;
      }
    }

    @media only screen and (max-width: 1200px) {
      thead {
        th {
          padding-top: 12px;
          padding-right: 12px;
          font-weight: 500;
        }

        th:first-child {
          padding-left: 12px;
          padding-right: 0;
        }

        tr {
          height: 60px;
        }
      }

      tbody {
        tr {
          height: 60px;
          padding: 0 12px;

          td {
            padding-top: 12px;
            padding-bottom: 12px;
            padding-right: 12px;
            min-width: 40px;
          }

          td:first-child {
            padding-left: 12px;
            padding-right: 0;
          }

          /* First Name ve Last Name sütunları için mevcut rengi koru */
          td:nth-child(2),
          td:nth-child(3) {
            color: var(--secondary-color, '#172b53'); /* Mevcut renk */
          }
        }
        tr:last-child {
          border-bottom: none;
        }
      }
    }
  }

  .employee-name {
    display: flex;
    flex-direction: column;
    gap: 4px;

    .name {
      font-weight: 500;
      color: #333;
    }

    .email {
      font-size: 12px;
      color: #666;
    }
  }

  .actions a,
  .actions span {
    cursor: pointer;
  }

  .action-buttons {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .bulk-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    background-color: #f8f9fa;
    border-bottom: 1px solid var(--border-grey, '#e0e0e0');
    border-radius: 8px 8px 0 0;
  }

  .bulk-buttons {
    display: flex;
    gap: 8px;
  }

  .loading-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    gap: 16px;
  }

  .loading-spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid var(--primary-color, '#ff6200');
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .error-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    gap: 16px;
  }

  .error-message {
    color: #d32f2f;
    font-size: 16px;
    text-align: center;
  }

  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    gap: 16px;
    color: #666;
    font-size: 16px;
  }

  .table-container {
    overflow-x: auto;
    border-radius: 0 0 8px 8px;
  }

  .employee-table {
    min-width: 800px;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .bulk-actions {
      flex-direction: column;
      gap: 12px;
      align-items: stretch;
    }

    .bulk-buttons {
      justify-content: center;
    }

    .action-buttons {
      flex-direction: column;
      gap: 4px;
    }

    table {
      thead {
        th {
          padding: 12px 8px;
          font-size: 12px;
        }
      }

      tbody {
        td {
          padding: 8px;
          font-size: 12px;
        }
      }
    }
  }
`;

import {css} from 'lit';

export const employeeCardStyles = css`
  :host {
    height: fit-content;
  }

  .employee-card {
    background-color: #fff;
    border-radius: 8px;
    padding: 24px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border: 1px solid;
    border-color: var(--border-grey, '#e0e0e0');
    transition: all 0.2s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .employee-card:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }

  .employee-card.empty {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    font-style: italic;
  }

  .top {
    display: flex;
    gap: 32px;
    flex: 1;
  }

  .left,
  .right {
    flex: 1;
  }

  .item {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
  }

  .label {
    font-size: 12px;
    color: #666;
    margin-bottom: 4px;
    text-transform: uppercase;
    font-weight: 500;
  }

  .value {
    font-size: 16px;
    color: var(--secondary-color, '#172b53');
    font-weight: 500;
    word-break: break-word;
  }

  .bottom {
    display: flex;
    gap: 12px;
    justify-content: flex-end;
    border-top: 1px solid var(--border-grey, '#e0e0e0');
    padding-top: 16px;
    margin-top: auto;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .employee-card {
      padding: 16px;
    }

    .top {
      gap: 16px;
      margin-bottom: 16px;
    }

    .item {
      margin-bottom: 12px;
    }

    .label {
      font-size: 11px;
    }

    .value {
      font-size: 14px;
    }

    .bottom {
      padding-top: 12px;
      gap: 8px;
    }
  }

  @media (max-width: 480px) {
    .top {
      flex-direction: column;
      gap: 12px;
    }

    .left,
    .right {
      flex: none;
    }
  }
`;

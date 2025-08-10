import {css} from 'lit';

export const buttonStyles = css`
  :host {
    display: inline-block;
  }

  button {
    font-size: 14px;
    font-weight: 500;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 8px;
    padding: 10px 20px;
    min-width: 80px;
    height: 40px;
    min-height: 40px;
    background-color: transparent;
    color: inherit;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-family: inherit;
  }

  button:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  button:active {
    transform: translateY(0);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  button.primary {
    background-color: var(--primary-color, '#ff6200');
    color: white;
  }

  button.primary:hover {
    background-color: var(--warning-hover, '#e55a00');
  }

  button.secondary {
    background-color: var(--background-light-grey, '#f3f4f6');
    color: #374151;
  }

  button.secondary:hover {
    background-color: var(--background-grey, '#f8f8f8');
  }

  button.danger {
    background-color: var(--danger, '#d32f2f');
    color: white;
  }

  button.danger:hover {
    background-color: var(--danger-hover, '#b71c1c');
  }

  button.success {
    background-color: var(--success, '#16a34a');
    color: white;
  }

  button.success:hover {
    background-color: var(--success-hover, '#15803d');
  }

  button.small {
    padding: 8px 16px;
    font-size: 12px;
    height: 32px;
    min-width: 60px;
  }

  button.large {
    padding: 12px 24px;
    font-size: 16px;
    height: 48px;
    min-width: 100px;
  }

  button.full-width {
    width: 100%;
  }

  ::slotted(img) {
    width: 14px;
    height: 14px;
    opacity: 0.8;
  }

  button.small ::slotted(img) {
    width: 12px;
    height: 12px;
  }

  button.large ::slotted(img) {
    width: 16px;
    height: 16px;
  }
`;

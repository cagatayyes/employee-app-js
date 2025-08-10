import {css} from 'lit';

export const inputStyles = css`
  :host {
  }

  .input-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .label {
    font-size: 12px;
    color: #767676;
    margin-bottom: 4px;
  }

  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
  }

  input,
  select {
    font-size: 16px;
    border: 1px solid;
    border-color: var(--border-color, '#e0e0e0');
    outline: none;
    cursor: pointer;
    border-radius: 8px;
    width: 100%;
    height: 100%;
    min-height: 40px;
    background-color: white;
    color: #333;
    padding: 0 12px;
    transition: border-color 0.2s ease;
    max-height: 100%;
  }

  input:focus,
  select:focus {
    border-color: var(--primary-color, '#ff6200');
  }

  input.error,
  select.error {
    border-color: #ff4444;
  }

  .error-message {
    color: #ff4444;
    font-size: 12px;
    margin-top: 4px;
  }

  .icon {
    position: absolute;
    right: 12px;
    color: var(--primary-color, '#ff6200');
    pointer-events: none;
  }

  select {
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 8px center;
    background-size: 16px;
    padding-right: 32px;
  }
`;

import {css} from 'lit';

export const popupStyles = css`
  :host {
    display: block;
  }

  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    animation: fadeIn 0.3s ease-out;
  }

  .popup-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    max-width: 400px;
    width: 90%;
    max-height: 80vh;
    overflow: hidden;
    animation: slideIn 0.3s ease-out;
  }

  .popup-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px 0 24px;
  }

  .popup-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .popup-icon.success {
    background-color: #dcfce7;
    color: #16a34a;
  }

  .popup-icon.error {
    background-color: #fee2e2;
    color: #dc2626;
  }

  .popup-icon.warning {
    background-color: #fef3c7;
    color: #d97706;
  }

  .popup-icon.info {
    background-color: #dbeafe;
    color: #2563eb;
  }

  .close-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    border-radius: 6px;
    color: #6b7280;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .close-button:hover {
    background-color: #f3f4f6;
    color: #374151;
  }

  .close-button:active {
    transform: scale(0.95);
  }

  .close-button img {
    filter: brightness(0) saturate(100%);
  }

  .popup-content {
    padding: 16px 24px 24px 24px;
  }

  .popup-title {
    margin: 0 0 8px 0;
    font-size: 18px;
    font-weight: 600;
    color: #111827;
    line-height: 1.4;
  }

  .popup-message {
    margin: 0;
    font-size: 14px;
    color: #6b7280;
    line-height: 1.5;
  }

  .popup-actions {
    display: flex;
    gap: 12px;
    margin-top: 20px;
    justify-content: flex-end;
  }

  /* Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-20px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  /* Responsive */
  @media (max-width: 480px) {
    .popup-container {
      width: 95%;
      margin: 20px;
    }

    .popup-header {
      padding: 16px 20px 0 20px;
    }

    .popup-content {
      padding: 12px 20px 20px 20px;
    }

    .popup-icon {
      width: 40px;
      height: 40px;
    }

    .popup-title {
      font-size: 16px;
    }

    .popup-message {
      font-size: 13px;
    }
  }
`;

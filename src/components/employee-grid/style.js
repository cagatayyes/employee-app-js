import {css} from 'lit';

export const employeeGridStyles = css`
  :host {
    display: block;
  }

  .employee-grid {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    gap: 20px;
    padding: 20px 0;
  }

  .error {
    background-color: #ffebee;
    color: #c62828;
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #ffcdd2;
    margin-bottom: 20px;
  }

  .loading {
    text-align: center;
    padding: 40px;
    color: #666;
    font-size: 16px;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .grid-container {
      grid-template-columns: 1fr;
      gap: 16px;
      padding: 16px 0;
    }
  }

  @media (max-width: 480px) {
    .grid-container {
      gap: 12px;
      padding: 12px 0;
    }
  }
`;

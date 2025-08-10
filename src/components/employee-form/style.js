import {css} from 'lit';

export const employeeFormStyles = css`
  .employee-form {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }

  .page-header {
    margin-bottom: 30px;
    text-align: center;
  }

  .page-subtitle {
    font-size: 1.2rem;
    color: #666;
    margin: 0;
  }

  .form-container {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 30px;
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 30px;
  }

  .form-actions {
    display: flex;
    gap: 15px;
    justify-content: center;
  }

  .loading {
    text-align: center;
    padding: 50px;
    font-size: 1.1rem;
    color: #666;
  }

  @media (max-width: 768px) {
    .form-grid {
      grid-template-columns: 1fr;
    }

    .form-actions {
      flex-direction: column;
      align-items: center;
    }

    .employee-form {
      padding: 10px;
    }

    .form-container {
      padding: 20px;
    }
  }
`;

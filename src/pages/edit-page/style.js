import {css} from 'lit';

export const editPageStyles = css`
  :host {
  }

  .employee-edit-page {
    display: flex;
    flex-direction: column;
    background-color: #f8f8f8;
    min-height: 100vh;
    padding: 20px 0;
  }

  @media (max-width: 768px) {
    .employee-edit-page {
      padding: 10px 0;
    }
  }
`;

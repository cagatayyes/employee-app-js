import {css} from 'lit';

export const addPageStyles = css`
  :host {
  }

  .employee-add-page {
    display: flex;
    flex-direction: column;
    background-color: #f8f8f8;
    min-height: 100vh;
    padding: 20px 0;
  }

  @media (max-width: 768px) {
    .employee-add-page {
      padding: 10px 0;
    }
  }
`;

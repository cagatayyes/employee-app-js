import {css} from 'lit';

export const mainPageStyles = css`
  :host {
    display: block;
  }

  .main-page {
    display: flex;
    flex-direction: column;
    background-color: #f8f8f8;
    padding: 40px;

    @media only screen and (max-width: 1200px) {
      padding: 16px;
    }
  }

  h1 {
    font-size: 28px;
    font-weight: 600;
    color: var(--primary-color, '#ff6200');
    margin: 0;

    @media only screen and (max-width: 1200px) {
      font-size: 20px;
    }
  }
`;

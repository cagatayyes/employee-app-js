import {css} from 'lit';

export const headerStyles = css`
  header {
    display: flex;
    align-items: center;
    height: 40px;
    background-color: #ffffff;
    color: var(--secondary-color, #000);
    padding: 16px;
  }

  .logo-image {
    width: 24px;
    height: 24px;
  }

  .logo-text {
    font-size: 16px;
    margin-left: 8px;
    color: var(--secondary-color);
  }

  .left {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .right {
    display: flex;
    margin-left: auto;
  }

  .link {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 16px;
    font-size: 12px;
  }

  .link-text {
    color: var(--tertiary-color);
  }

  .link-image {
    width: 16px;
    height: 16px;
    color: var(--tertiary-color);
  }

  .localization {
    width: 16px;
    height: 16px;
    margin-left: 16px;
  }

  .localization-image {
    width: 16px;
    height: 16px;
  }
`;

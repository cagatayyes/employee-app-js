import {css} from 'lit';

export const paginationStyles = css`
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin-top: 2rem;
    padding: 1rem;
    border-top: 1px solid;
    border-color: var(--border-grey, '#e0e0e0');
  }

  .pagination button-element {
    min-width: 2.5rem;
  }

  .pagination button-element[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .pagination {
      flex-wrap: wrap;
      gap: 0.25rem;
      padding: 0.75rem;
    }

    .pagination button-element {
      min-width: 2rem;
    }
  }

  @media (max-width: 480px) {
    .pagination {
      padding: 0.5rem;
    }
  }
`;

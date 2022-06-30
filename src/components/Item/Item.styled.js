import styled from 'styled-components';

export const StyledItem = styled.div`
  position: relative;
  border: 1px solid var(--color-border);
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  user-select: none;
  background-color: var(--color-primary);
  color: var(--color-text);
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: var(--color-primary-dark);
  }
`;
import styled from 'styled-components';

export const Selector = styled.div`
  margin: 1rem auto;
  width: 10rem;
  padding: 0.7rem 1.4rem;
  border: 1px solid black;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: var(--color-border);
    color: var(--color-text);
  }
`;

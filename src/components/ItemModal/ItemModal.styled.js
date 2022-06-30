import styled from 'styled-components';

export const ItemModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1000;
`;

export const ItemModalStyled = styled.div`
  max-height: 70rem;
  max-width: 70rem;
  padding: 3rem;
  margin: 0 1rem;
  background-color: var(--color-border);
  opacity: 100%;
  animation: modal 0.4s ease;
`;

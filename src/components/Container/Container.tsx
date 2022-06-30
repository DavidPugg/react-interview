import { PropsWithChildren } from 'react';
import { StyledContainer } from './Container.styled';

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;

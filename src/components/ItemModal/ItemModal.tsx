import React, { useRef } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import { ItemModalBackground, ItemModalStyled } from './ItemModal.styled';

interface Props {
  text: string;
  onClickOutside: () => void;
}

const ItemModal: React.FC<Props> = ({ text, onClickOutside }) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useClickOutside(itemRef, onClickOutside);

  return (
    <ItemModalBackground>
      <ItemModalStyled ref={itemRef}>{text}</ItemModalStyled>
    </ItemModalBackground>
  );
};

export default ItemModal;

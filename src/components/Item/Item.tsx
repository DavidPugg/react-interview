import { useState } from 'react';
import { ItemType } from '../../types';
import ItemModal from '../ItemModal/ItemModal';
import { StyledItem } from './Item.styled';

interface Props {
  item: ItemType;
}

const Item: React.FC<Props> = ({ item }) => {
  const [dropdown, setDropdown] = useState<boolean>(false);

  return (
    <StyledItem
      onClick={() => {
        setDropdown(!dropdown);
      }}
    >
      {item.title}
      {dropdown && (
        <ItemModal onClickOutside={() => setDropdown(false)} text={item.body} />
      )}
    </StyledItem>
  );
};
export default Item;

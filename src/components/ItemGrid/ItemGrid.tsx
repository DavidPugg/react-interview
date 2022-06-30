import { ItemType } from '../../types';
import Item from '../Item/Item';
import { Grid } from './item.styled';

interface Props {
  items: ItemType[];
}

const ItemGrid: React.FC<Props> = ({ items }) => {
  return (
    <Grid>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Grid>
  );
};

export default ItemGrid;

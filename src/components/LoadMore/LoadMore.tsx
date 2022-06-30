import { Selector } from './LoadMore.styled';

interface Props {
  onPageChange: () => void;
}

const LoadMore: React.FC<Props> = ({ onPageChange }) => {
  return <Selector onClick={onPageChange}>Load More</Selector>;
};
export default LoadMore;

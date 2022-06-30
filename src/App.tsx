import { useEffect, useState } from 'react';
import { Title } from './App.styled';
import Container from './components/Container/Container';
import ItemGrid from './components/ItemGrid/ItemGrid';
import LoadMore from './components/LoadMore/LoadMore';
import useItems from './hooks/useItems';

const ITEMS_PER_PAGE = 10;

const App = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { items, fetchItems, isLastItem } = useItems(ITEMS_PER_PAGE);

  useEffect(() => {
    fetchItems(currentPage);
  }, [currentPage]);

  return (
    <Container>
      <Title>Technical Assignment</Title>
      <ItemGrid items={items} />
      {!isLastItem && (
        <LoadMore onPageChange={() => setCurrentPage(currentPage + 1)} />
      )}
    </Container>
  );
};

export default App;

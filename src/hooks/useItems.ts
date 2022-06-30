import { useState } from 'react';
import { ItemType } from '../types';

const useItems = (itemsPerPage: number) => {
  const [items, setItems] = useState<ItemType[]>([] as ItemType[]);
  const [isLastItem, setLastItem] = useState<boolean>(false);

  const getStartAndLimit = (page: number) => {
    if (page <= 0) {
      page = 1;
    }
    const start = page * 10 - 10;
    const limit = itemsPerPage;
    return [start, limit];
  };

  const fetchItems = async (page: number) => {
    const [start, limit] = getStartAndLimit(page);
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`
    );
    const data = await res.json();
    if (data.length < itemsPerPage) {
      setLastItem(true);
    }
    setItems([...items, ...data]);
  };

  return { items, fetchItems, isLastItem };
};

export default useItems;

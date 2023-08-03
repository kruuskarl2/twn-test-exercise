import { createContext } from 'react';

const ListContext = createContext({
    listOptions: {},
    setListOptions: (sortingIndex) => {},
});

export default ListContext;

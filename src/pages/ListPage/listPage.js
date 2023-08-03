import { useEffect, useState } from 'react';

import List from 'components/List';
import Pagination from 'components/Pagination';
import ListContext from 'context/listContext';
import Loading from 'components/Loading';

import styles from './listPage.module.css';

function ListPage() {
    const [personArray, setPersonArray] = useState([]);
    const [listOptions, setListOptions] = useState({ currentPage: 0 });

    useEffect(() => {
        fetch('https://midaiganes.irw.ee/api/list?limit=500')
            .then((response) => response.json())
            .then((data) => setPersonArray(data.list));
    }, []);

    const isLoading = !personArray.length;

    const pageContent = isLoading ? (
        <Loading />
    ) : (
        <>
            <List personArray={personArray} />
            <Pagination personAmount={personArray.length} />
        </>
    );

    return (
        <div className={styles.root}>
            <ListContext.Provider value={{ listOptions, setListOptions }}>
                <h1 className={styles.header}>Nimekiri</h1>
                {pageContent}
            </ListContext.Provider>
        </div>
    );
}

export default ListPage;

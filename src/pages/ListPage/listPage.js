import { useEffect, useState } from 'react';

import styles from './listPage.module.css';
import List from 'components/List';

function ListPage() {
    const [personArray, setPersonArray] = useState([]);

    useEffect(() => {
        fetch('https://midaiganes.irw.ee/api/list?limit=500')
            .then((response) => response.json())
            .then((data) => setPersonArray(data.list))
            .catch(() => {
                // TODO: Error handling
            });
    }, []);

    return (
        <div className={styles.root}>
            <h1 className={styles.header}>Nimekiri</h1>
            <List personArray={personArray} />
        </div>
    );
}

export default ListPage;

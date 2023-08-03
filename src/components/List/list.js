import { useMemo, useState } from 'react';

import ListContext from 'context/listContext';
import ListItem from './listItem';
import ListHeader from './listHeader';

import styles from './list.module.css';

function List(props) {
    const { personArray } = props;

    const [listOptions, setListOptions] = useState({});

    const parsedPersonArray = useMemo(() => {
        let newPersonArray = structuredClone(personArray);

        const { sortingIndex, sortType } = listOptions;

        const compareByProperty = (a, b) => {
            const aValue = a[sortingIndex];
            const bValue = b[sortingIndex];

            if (typeof aValue === 'string' && typeof bValue === 'string') {
                return aValue.localeCompare(bValue);
            }

            return aValue - bValue;
        };

        if (sortingIndex !== undefined) {
            if (sortType === 'DESC') {
                newPersonArray.sort(compareByProperty);
            } else if (sortType === 'ASC') {
                newPersonArray.sort(compareByProperty).reverse();
            }
        }

        return newPersonArray;
    }, [listOptions, personArray]);

    const listRows = parsedPersonArray.map((person, index) => {
        return (
            <tr className={styles.tableRow} key={index}>
                <ListItem person={person} />
            </tr>
        );
    });

    return (
        <div className={styles.root}>
            <ListContext.Provider value={{ listOptions, setListOptions }}>
                <table className={styles.table}>
                    <tbody>
                        <ListHeader />
                        {listRows}
                    </tbody>
                </table>
            </ListContext.Provider>
        </div>
    );
}

export default List;

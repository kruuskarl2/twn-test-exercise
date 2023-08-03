import { useMemo, useContext } from 'react';

import ListContext from 'context/listContext';
import ListItem from './listItem';
import ListHeader from './listHeader';

import styles from './list.module.css';

const PAGE_SIZE = 10;

function List(props) {
    const { personArray } = props;

    const { listOptions } = useContext(ListContext);

    const parsedPersonArray = useMemo(() => {
        let newPersonArray = structuredClone(personArray);

        const { sortingIndex, sortType, currentPage } = listOptions;

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

        const startIndex = currentPage * PAGE_SIZE;
        return newPersonArray.slice(startIndex, startIndex + PAGE_SIZE);
    }, [listOptions, personArray]);

    const listRows = parsedPersonArray.map((person, index) => {
        return <ListItem person={person} key={index} />;
    });

    return (
        <div className={styles.root}>
            <table className={styles.table}>
                <tbody>
                    <ListHeader />
                    {listRows}
                </tbody>
            </table>
        </div>
    );
}

export default List;

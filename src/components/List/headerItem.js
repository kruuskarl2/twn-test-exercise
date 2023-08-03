import { useCallback, useContext, useState, useEffect } from 'react';

import ListContext from 'context/listContext';
import styles from './headerItem.module.css';

function HeaderItem(props) {
    const { propertyName, sortingIndex } = props;

    const [sortType, setSortType] = useState('default');

    const { setListOptions, listOptions } = useContext(ListContext);

    const isSortable = sortingIndex !== undefined;

    const onSort = useCallback(() => {
        let newSortType;
        switch (sortType) {
            case 'ASC':
                newSortType = 'default';
                break;
            case 'DESC':
                newSortType = 'ASC';
                break;
            default:
                newSortType = 'DESC';
        }

        setSortType(newSortType);
        setListOptions((listOptions) => {
            return {
                ...listOptions,
                sortingIndex,
                sortType: newSortType,
                selectedPersonId: null,
            };
        });
    }, [setListOptions, sortType, sortingIndex]);

    useEffect(() => {
        if (sortingIndex !== listOptions.sortingIndex) {
            setSortType('default');
        }
    }, [listOptions, sortingIndex]);

    let sortIcon = null;
    switch (sortType) {
        case 'ASC':
            sortIcon = <i className={'fa fa-sort-up fa-lg'} />;
            break;
        case 'DESC':
            sortIcon = <i className={'fa fa-sort-down fa-lg'} />;
            break;
        default:
            sortIcon = <i className={'fa fa-sort fa-lg'} />;
    }

    return (
        <th className={styles.root}>
            <button
                disabled={!isSortable}
                className={styles.sortButton}
                onClick={onSort}
            >
                {propertyName}
                {isSortable ? sortIcon : null}
            </button>
        </th>
    );
}

export default HeaderItem;

import { useContext } from 'react';

import ListContext from 'context/listContext';

import styles from './pagination.module.css';

function Pagination(props) {
    const { personAmount } = props;

    const { listOptions, setListOptions } = useContext(ListContext);
    const { currentPage } = listOptions;

    const selectPage = (pageNumber) => {
        setListOptions({ ...listOptions, currentPage: pageNumber });
    };

    const selectNextPage = () => {
        setListOptions({ ...listOptions, currentPage: currentPage + 1 });
    };

    const selectPrevPage = () => {
        setListOptions({ ...listOptions, currentPage: currentPage - 1 });
    };

    const pageAmount = Math.ceil(personAmount / 10);

    let pageNumbers = [];
    for (let i = 0; i < pageAmount; i++) {
        const isCurrent = currentPage === i;

        pageNumbers.push(
            <button
                className={isCurrent ? styles.currentPageNumber : styles.button}
                onClick={() => selectPage(i)}
                key={i}
            >
                {i + 1}
            </button>
        );
    }

    return (
        <div className={styles.root}>
            <button
                className={styles.button}
                onClick={selectPrevPage}
                disabled={currentPage <= 0}
            >
                <i className="fa fa-chevron-left fa-md" />
            </button>
            {pageNumbers}
            <button
                className={styles.button}
                onClick={selectNextPage}
                disabled={currentPage >= pageAmount - 1}
            >
                <i className="fa fa-chevron-right fa-md" />
            </button>
        </div>
    );
}

export default Pagination;

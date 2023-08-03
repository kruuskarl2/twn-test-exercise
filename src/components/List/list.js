import ListItem from './listItem';

import styles from './list.module.css';

function List(props) {
    const { personArray } = props;

    const listRows = personArray.map((person) => {
        return (
            <tr className={styles.tableRow}>
                <ListItem person={person} />
            </tr>
        );
    });

    return (
        <div className={styles.root}>
            <table className={styles.table}>{listRows}</table>
        </div>
    );
}

export default List;

import styles from './tags.module.css';

function Tags(props) {
    const { tags } = props;

    const tagsJSX = tags.map((tag) => {
        return <div className={styles.tag}>{tag}</div>;
    });

    return <div className={styles.root}>{tagsJSX}</div>;
}

export default Tags;

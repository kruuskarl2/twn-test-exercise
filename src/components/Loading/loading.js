import loader from 'assets/loader.svg';

import styles from './loading.module.css';

function Loading() {
    return (
        <div className={styles.root}>
            <img className={styles.loader} src={loader} alt="loader" />
        </div>
    );
}

export default Loading;

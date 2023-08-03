import styles from './loading.module.css';
import loader from 'assets/loader.svg';

function Loading() {
    return (
        <div className={styles.root}>
            <img className={styles.loader} src={loader} alt="loader" />
        </div>
    );
}

export default Loading;

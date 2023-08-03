import styles from './stylizedImage.module.css';

function StylizedImage(props) {
    const { image } = props;

    return (
        <div className={styles.root}>
            <div
                className={styles.image}
                style={{ backgroundImage: `url(${image.large})` }}
            />
            <div className={styles.overflow}>
                <div className={styles.title}>{image.title}</div>
                <div
                    className={styles.imageBackground}
                    style={{ backgroundImage: `url(${image.large})` }}
                />
            </div>
        </div>
    );
}

export default StylizedImage;

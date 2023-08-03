import { Link } from 'react-router-dom';

import styles from './listItemInfo.module.css';

function ListItemInfo(props) {
    const { person } = props;

    const { image, intro } = person;

    return (
        <div className={styles.root}>
            <div
                style={{ backgroundImage: `url(${image.small})` }}
                className={styles.image}
            />
            <div>
                <div
                    className={styles.intro}
                    dangerouslySetInnerHTML={{ __html: intro }}
                />
                <Link to={`/article?id=${person.id}`}>
                    <button className={styles.readMore}>Loe rohkem</button>
                </Link>
            </div>
        </div>
    );
}

export default ListItemInfo;

import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Loading from 'components/Loading';
import StylizedImage from 'components/StylizedImage';
import Tags from 'components/Tags';

import styles from './articlePage.module.css';

function ArticlePage() {
    const [article, setArticle] = useState();

    const { search } = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(search);
        const personId = params.get('id');

        fetch(`https://midaiganes.irw.ee/api/list/${personId}`)
            .then((response) => response.json())
            .then((data) => setArticle(data));
    }, [setArticle, search]);

    if (!article) return <Loading />;

    const { title, intro, image, body, tags } = article;

    return (
        <div className={styles.root}>
            <h1 className={styles.title}>{title}</h1>
            <div
                className={styles.intro}
                dangerouslySetInnerHTML={{ __html: intro }}
            ></div>
            <StylizedImage image={image} />
            <div
                className={styles.body}
                dangerouslySetInnerHTML={{ __html: body }}
            ></div>
            <Tags tags={tags} />
        </div>
    );
}

export default ArticlePage;

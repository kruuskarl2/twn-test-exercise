import { Routes, Route } from 'react-router-dom';

import ListPage from 'pages/ListPage';
import ArticlePage from 'pages/ArticlePage';

import styles from './app.module.css';

function App() {
    return (
        <div className={styles.root}>
            <div className={styles.page}>
                <Routes>
                    <Route path="/" element={<ListPage />} />
                    <Route path="/article" element={<ArticlePage />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;

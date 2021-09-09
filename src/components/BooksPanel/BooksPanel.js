import styles from './BooksPanel.module.css';
import SearchBook from '../searchBook/SearchBook';

function BooksPanel() {
    return (
        <div className={styles.booksPanel}>
            <div className={styles.searchBookHolder}>
                <SearchBook/>
            </div>
            <button type="button" className="btnSecondary">Add Book</button>
        </div>
    );
}

export default BooksPanel;
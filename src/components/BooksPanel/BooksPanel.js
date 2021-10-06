import styles from './BooksPanel.module.css';
import SearchBook from '../searchBook/SearchBook';

function BooksPanel(props) {
    return (
        <div className={styles.booksPanel}>
            <div className={styles.searchBookHolder}>
                <SearchBook onChangeHandler={props.onChangeHandler}/>
            </div>
            <button type="button" className="btnSecondary" onClick={props.addBookModalShowHandler}>Add Book</button>
        </div>
    );
}

export default BooksPanel;
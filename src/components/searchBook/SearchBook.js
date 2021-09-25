import React from 'react';
import styles from './SearchBook.module.css';

function SearchBook(props) {
    const { onChangeHandler, searchValue } = props;
   

    return (
        <div className={styles.searchBook}>
                <form>
                    <div className={`inputField ${styles.searchBookField}`} >
                        <label htmlFor="book-keyword">Enter Keyword</label>
                        <input
                            type="text"
                            id="book-keyword"
                            placeholder="Search ..."
                            value={searchValue}
                            onChange={onChangeHandler}
                        />
                    </div>
                </form>
            </div>
    );
}

export default SearchBook;
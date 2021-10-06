import React from 'react';
import styles from './SearchBook.module.css';
import { BookContext } from '../../context/BookContext';

function SearchBook(props) {
   
    return (

        <BookContext.Consumer>{

            (context) => {
                const {searchInputChangeHandler, searchValue} = context;

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
                                    onChange={searchInputChangeHandler}
                                />
                            </div>
                        </form>
                    </div>
                );
            }

        }</BookContext.Consumer>
    );
}

export default SearchBook;
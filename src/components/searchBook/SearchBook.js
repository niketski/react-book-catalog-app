import React from 'react';
import styles from './SearchBook.module.css';

class SearchBook extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
        this.inputChange = this.inputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    inputChange(event) {
        this.setState(() => {
            return {
                inputValue: event.target.value
            }
        });
    }

    handleFormSubmit(event) {
        event.preventDefault();

        console.log('Submitted');
    }

    render() {
        return (
            <div className={styles.searchBook}>
                <form onSubmit={this.handleFormSubmit}>
                    <div className={`inputField ${styles.searchBookField}`} >
                        <label htmlFor="book-keyword">Enter Keyword</label>
                        <input
                            type="text"
                            id="book-keyword"
                            placeholder="Enter Keyword"
                            value={this.state.inputValue}
                            onChange={this.inputChange}
                        />
                    </div>
                    <button type="submit" className="btnPrimary">Search</button>
                </form>
            </div>
        );
    }
}

export default SearchBook;
import React, { createContext, Component } from 'react';
import { books } from '../initial-books-data.json';
import { v4 as uuidV4 } from 'uuid';
import BooksStorage from '../utils/BooksStorage';

export const BookContext = createContext();

const storage = new BooksStorage();

class BookContextProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentBook: null,
            searchValue: '',
            books: [],
        };
        this.addBookHandler           = this.addBookHandler.bind(this);
        this.deleteBookHandler        = this.deleteBookHandler.bind(this);
        this.updateBook               = this.updateBook.bind(this);
        this.searchInputChangeHandler = this.searchInputChangeHandler.bind(this);
    }

    addBookHandler(book) {

        let updatedBooks = [...this.state.books];
        let newBook = {
            ...book,
            id: uuidV4()
        };

        updatedBooks.push(newBook);

        this.setState({
            books: updatedBooks
        });

        // save book to the local storage
        storage.set('books', JSON.stringify(updatedBooks));

    }

    deleteBookHandler(id) {
    
        const updatedBooks = [...this.state.books].filter(book => book.id != id);
        
        this.setState({
            books:  updatedBooks
        });

        // save book to the local storage
        storage.set('books', JSON.stringify(updatedBooks));
        
        console.log('delete');
    }
    
    updateBook(id, updatedBook) {
        const currentBooks = [...this.state.books];
        const updatedBooks = currentBooks.map(book => {
          
          if(id == book.id) return updatedBook;
    
          return book;
    
        });
    
        this.setState({
          books: updatedBooks
        });
    
        // save book to the local storage
        storage.set('books', JSON.stringify(updatedBooks));
        
        console.log('edit');
    }

    searchInputChangeHandler(event) {
    
        this.setState(prevState => {
          return {
            searchValue: event.target.value
          }
        });
    
    }

    // lifecycle methods
    componentDidMount() {
       
        // load books from the local storage if exists
        const booksStorage = JSON.parse(storage.get('books'));
        console.log(booksStorage.length);
        
        if(booksStorage.length) {
            // console.log(storage.get('books').length);
            const savedBooks = storage.get('books');

            this.setState({
                books: JSON.parse(savedBooks)
            });

            return;

        } 

        console.log(storage.get('books'));
        console.log('asdzxcqweqw');
        // set initial books
        this.setState({
            books: books
        });

        // save initial books data to the local storage
        storage.set('books', JSON.stringify(books));

    }

    render() {
        const {addBookHandler, deleteBookHandler, updateBook, searchInputChangeHandler} = this;

        return (
            <BookContext.Provider value={{...this.state, addBookHandler, deleteBookHandler, updateBook, searchInputChangeHandler}}>

                {this.props.children}

            </BookContext.Provider>
        );
    }

}

export default BookContextProvider;
import React, { createContext, Component } from 'react';
import { books } from '../initial-books-data.json';
import { v4 as uuidV4 } from 'uuid';
import BooksStorage from '../utils/BooksStorage';
import FirebaseDb from '../utils/firebase';



const storage = new BooksStorage();
const firebaseDb = new FirebaseDb;

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
        this.setCurrentBookHandler    = this.setCurrentBookHandler.bind(this);
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

    setCurrentBookHandler(book) {

        this.setState({
            currentBook: book
        });

    }

    // lifecycle methods
    componentDidMount() {

        // get books from the firebase db
        firebaseDb.get('books', (snapshot) => {

            if(snapshot.val() != null) {

                const data = snapshot.val();
                const booksArray = []; 
          
                for (const key in data) {
          
                  const id = key;
                  const {title, isbn, author, publisher, year_published, category} = data[key];
          
                  booksArray.push({
                    id: id,  
                    title: title,
                    isbn: isbn,
                    author: author, 
                    publisher: publisher, 
                    year_published: year_published,
                    category: category
                  });
          
                }
          
                this.setState({
                    books: booksArray
                });

            } else {

                this.setState({
                    books: []
                });

            }

            
      
        });

    }

    render() {
        const {addBookHandler, deleteBookHandler, updateBook, searchInputChangeHandler, setCurrentBookHandler} = this;

        return (
            <BookContext.Provider value={{...this.state, addBookHandler, deleteBookHandler, updateBook, searchInputChangeHandler, setCurrentBookHandler}}>

                {this.props.children}

            </BookContext.Provider>
        );
    }

}

export const BookContext = createContext();
export default BookContextProvider;

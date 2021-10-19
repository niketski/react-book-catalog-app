import styles from './BooksTable.module.css';
import { BookContext } from '../../context/BookContext';
import { ModalContext } from '../../context/ModalContext';
import EditBookModal from '../editBookModal/EditBookModal';
import BooksTableHeader from './BooksTableHeader';
import Modal from '../ui/Modal';

function BooksTable(props) {

    return (
        <ModalContext.Consumer>{
            (modalContext) => {
        
                return (
                    <BookContext.Consumer>{
                        (bookContext) => {
                            let { books, deleteBookHandler, searchValue, setCurrentBookHandler } = bookContext;
                            let { showModal } = modalContext;

                            let tableContent;

                            function editBtnHandler(book) {

                                showModal(<EditBookModal book={book}/>); 
                                
                                setCurrentBookHandler(book);
                            }

                            // filter books
                            books = books.filter(book => {

                                if(searchValue == '') return book;

                                for(let data in book) {

                                    if(book[data].toString().trim().toLowerCase().includes(searchValue.trim().toLowerCase())) {
                                        return book;
                                    }

                                }

                            });

                            if(!books.length) {

                                tableContent = <tr className={styles.booksTableMessage}><td colSpan="7">Books not available ...</td></tr>

                            } else {

                                tableContent = books.map(book => {
                                    const {id, title, isbn, author, publisher, year_published, category} = book;

                                    return (
                                        <tr data-book-id={id} key={id}>
                                            <td>{title}</td>
                                            <td>{isbn}</td>
                                            <td>{author}</td>
                                            <td>{publisher}</td>
                                            <td>{year_published}</td>
                                            <td>{category}</td>
                                            <td className={styles.booksTableControl}>
                                                <button type="button" className="btnSecondary booksEdit" onClick={editBtnHandler.bind(this, book)}>Edit</button>
                                                <button type="button" className="btnDanger booksDelete" onClick={deleteBookHandler.bind(this, id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                });

                            }

                            return (
                                <div className={styles.booksTable}>
                                    <table>
                                    <BooksTableHeader/>
                                    <tbody>
                                        {tableContent}
                                    </tbody>
                                </table>
                                </div>
                            );
                        }
                }</BookContext.Consumer>
                    );
            }
        }</ModalContext.Consumer>
    );

}

export default BooksTable;
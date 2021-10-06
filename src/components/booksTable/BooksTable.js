import styles from './BooksTable.module.css';
import { BookContext } from '../../context/BookContext';

function BooksTable(props) {

    return (
        
        <BookContext.Consumer>{
            (context) => {
                let { books, deleteBookHandler, searchValue } = context;

                let tableContent;

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
                                    <button type="button" className="btnSecondary booksEdit" onClick={() => { props.editBookModalShowHandler(book) }}>Edit</button>
                                    <button type="button" className="btnDanger booksDelete" onClick={() => { deleteBookHandler(id) }}>Delete</button>
                                </td>
                            </tr>
                        )
                    });

                }

                return (
                    <div className={styles.booksTable}>
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">ISBN</th>
                                <th scope="col">Author</th>
                                <th scope="col">Publisher</th>
                                <th scope="col">Year Published</th>
                                <th scope="col">Category</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
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

export default BooksTable;
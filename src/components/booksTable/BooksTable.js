import styles from './BooksTable.module.css';

function BooksTable(props) {
   
    let tableContent;

    if(!props.books.length) {

        tableContent = <tr className={styles.booksTableMessage}><td colSpan="7">Books not available ...</td></tr>

    } else {

        tableContent = props.books.map(book => {
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
                        <button type="button" className="btnDanger booksDelete" onClick={() => { props.deleteBook(id) }}>Delete</button>
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

export default BooksTable;
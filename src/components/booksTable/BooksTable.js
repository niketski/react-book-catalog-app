import styles from './BooksTable.module.css';

function BooksTable(props) {
   
    console.log(props.books);

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
                    {
                        props.books.map(book => {
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
                                        <button type="button" className="btnSecondary booksEdit">Edit</button>
                                        <button type="button" className="btnDanger booksDelete">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>

    );

}

export default BooksTable;
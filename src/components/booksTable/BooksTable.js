import styles from './BooksTable.module.css';
import books from '../../initial-books-data.json'

function BooksTable(props) {

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
                    <tr>
                        <td>Harry Potter</td>
                        <td>12345</td>
                        <td>nicolet</td>
                        <td>nicolet</td>
                        <td>2021</td>
                        <td>horror</td>
                        <td className={styles.booksTableControl}>
                            <button type="button" className="btnSecondary booksEdit">Edit</button>
                            <button type="button" className="btnDanger booksDelete">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Harry Potter</td>
                        <td>12345</td>
                        <td>nicolet</td>
                        <td>nicolet</td>
                        <td>2021</td>
                        <td>horror</td>
                        <td className={styles.booksTableControl}>
                            <button type="button" className="btnSecondary booksEdit">Edit</button>
                            <button type="button" className="btnDanger booksDelete">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Harry Potter</td>
                        <td>12345</td>
                        <td>nicolet</td>
                        <td>nicolet</td>
                        <td>2021</td>
                        <td>horror</td>
                        <td className={styles.booksTableControl}>
                            <button type="button" className="btnSecondary booksEdit">Edit</button>
                            <button type="button" className="btnDanger booksDelete">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Harry Potter</td>
                        <td>12345</td>
                        <td>nicolet</td>
                        <td>nicolet</td>
                        <td>2021</td>
                        <td>horror</td>
                        <td className={styles.booksTableControl}>
                            <button type="button" className="btnSecondary booksEdit">Edit</button>
                            <button type="button" className="btnDanger booksDelete">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    );

}

export default BooksTable;
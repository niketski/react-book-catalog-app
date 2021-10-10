import styles from './BooksPanel.module.css';
import SearchBook from '../searchBook/SearchBook';
import AddBookModal from '../addBookModal/AddBookModal';
import { ModalContext } from '../../context/ModalContext';

function BooksPanel(props) {
    return (
        <ModalContext.Consumer>{ 
            (modalContext) => {
                const { content, showModal} = modalContext;

                return (
                    <div className={styles.booksPanel}>
                        <div className={styles.searchBookHolder}>
                            <SearchBook onChangeHandler={props.onChangeHandler}/>
                        </div>
                        <button type="button" className="btnSecondary" onClick={() => { showModal(<AddBookModal/>) }}>Add Book</button>
                    </div>
                );
            }
         }</ModalContext.Consumer>
    );
}

export default BooksPanel;
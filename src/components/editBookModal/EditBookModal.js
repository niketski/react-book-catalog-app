import Modal from '../ui/Modal';
import styles from './EditBookModal.module.css';
import useInput from '../../hooks/use-input';
import { BookContext } from '../../context/BookContext';

function EditBookModal(props) {

    let formIsValid = false;
    let {id, title, isbn, author, publisher, year_published, category} = props.book;
    
    let { 
        value: titleValue,
        isValid: titleIsvalid,
        hasError: titleHasError,
        inputChangehandler: titleChangeHandler,
        inputBlurHandler: titleBlurHandler,
        inputResetHandler: titleResetHandler,
        errorMessage: titleErrorMessage
    } = useInput(title);

    let { 
        value: isbnValue,
        isValid: isbnIsvalid,
        hasError: isbnHasError,
        inputChangehandler: isbnChangeHandler,
        inputBlurHandler: isbnBlurHandler,
        inputResetHandler: isbnResetHandler,
        errorMessage: isbnErrorMessage
    } = useInput(isbn, 'isbn');

    let { 
        value: authorValue,
        isValid: authorIsvalid,
        hasError: authorHasError,
        inputChangehandler: authorChangeHandler,
        inputBlurHandler: authorBlurHandler,
        inputResetHandler: authorResetHandler,
        errorMessage: authorErrorMessage
    } = useInput(author);

    let { 
        value: publisherValue,
        isValid: publisherIsvalid,
        hasError: publisherHasError,
        inputChangehandler: publisherChangeHandler,
        inputBlurHandler: publisherBlurHandler,
        inputResetHandler: publisherResetHandler,
        errorMessage: publisherErrorMessage
    } = useInput(publisher);

    let { 
        value: yearPublishedValue,
        isValid: yearPublishedIsvalid,
        hasError: yearPublishedHasError,
        inputChangehandler: yearPublishedChangeHandler,
        inputBlurHandler: yearPublishedBlurHandler,
        inputResetHandler: yearPublishedResetHandler,
        errorMessage: yearPublishedErrorMessage
    } = useInput(year_published, 'year');

    let { 
        value: categoryValue,
        isValid: categoryIsvalid,
        hasError: categoryHasError,
        inputChangehandler: categoryChangeHandler,
        inputBlurHandler: categoryBlurHandler,
        inputResetHandler: categoryResetHandler,
        errorMessage: categoryErrorMessage
    } = useInput(category);


    // checks if all the fields are valid
    if(titleIsvalid && isbnIsvalid && authorIsvalid && publisherIsvalid && yearPublishedIsvalid && categoryIsvalid) {
        formIsValid = true;
    }

    return (

        <BookContext.Consumer>{
            (context) => {

                const { updateBook, } = context;

                function formSubmitHandler(event) {

                    event.preventDefault();

                    if(!formIsValid) return;

                    updateBook(id, {
                        id: id,
                        title: titleValue,
                        isbn: isbnValue,
                        author: authorValue,
                        publisher: publisherValue,
                        year_published: yearPublishedValue,
                        category: categoryValue
                    });

                    //reset fields
                    titleResetHandler();
                    isbnResetHandler();
                    authorResetHandler();
                    publisherResetHandler();
                    yearPublishedResetHandler();
                    categoryResetHandler();
                    
                }

                return (
                    <Modal title="Edit Book" onClose={props.onClose}>
                        <div className={styles.editBookForm}>
                            <form onSubmit={formSubmitHandler}>

                                <div className={`inputField ${titleHasError ? 'invalid' : ''} ${styles.inputField}`}>
                                    <label htmlFor="book-title">ISBN</label>
                                    <input 
                                        type="text" 
                                        id="book-title" 
                                        placeholder="Title" 
                                        onChange={titleChangeHandler} 
                                        onBlur={titleBlurHandler} 
                                        value={titleValue}/>
                                    <div className="vaildationMessage">{titleErrorMessage}</div>
                                </div>

                                <div className={`inputField ${isbnHasError ? 'invalid' : ''} ${styles.inputField}`}>
                                    <label htmlFor="book-isbn">ISBN</label>
                                    <input 
                                        type="text" 
                                        id="book-isbn" 
                                        placeholder="ISBN"
                                        onChange={isbnChangeHandler} 
                                        onBlur={isbnBlurHandler} 
                                        value={isbnValue}/>
                                    <div className="vaildationMessage">{isbnErrorMessage}</div>
                                </div>

                                <div className={`inputField ${authorHasError ? 'invalid' : ''} ${styles.inputField}`}>
                                    <label htmlFor="book-author">Author</label>
                                    <input 
                                        type="text" 
                                        id="book-author" 
                                        placeholder="Author" 
                                        onChange={authorChangeHandler}
                                        onBlur={authorBlurHandler}
                                        value={authorValue}/>
                                    <div className="vaildationMessage">{authorErrorMessage}</div>
                                </div>

                                <div className={`inputField ${publisherHasError ? 'invalid' : ''} ${styles.inputField}`}>
                                    <label htmlFor="book-publisher">Publisher</label>
                                    <input 
                                        type="text" 
                                        id="book-publisher" 
                                        onChange={publisherChangeHandler}
                                        onBlur={publisherBlurHandler}
                                        placeholder="Publisher"
                                        value={publisherValue}/>
                                    <div className="vaildationMessage">{publisherErrorMessage}</div>
                                </div>

                                <div className={`inputField ${yearPublishedHasError ? 'invalid' : ''} ${styles.inputField}`}>
                                    <label htmlFor="book-year-published">Year Published</label>
                                    <input 
                                        type="text" 
                                        id="book-year-published" 
                                        onChange={yearPublishedChangeHandler}
                                        onBlur={yearPublishedBlurHandler}
                                        placeholder="Year Published"
                                        value={yearPublishedValue}/>
                                    <div className="vaildationMessage">{yearPublishedErrorMessage}</div>
                                </div>

                                <div className={`inputField ${categoryHasError ? 'invalid' : ''} ${styles.inputField}`}>
                                    <label htmlFor="book-category">Category</label>
                                    <input 
                                        type="text" 
                                        id="book-category" 
                                        onChange={categoryChangeHandler}
                                        onBlur={categoryBlurHandler}
                                        placeholder="Category"
                                        value={categoryValue}/>
                                    <div className="vaildationMessage">{categoryErrorMessage}</div>
                                </div>

                                <button type="submit" className={`btnPrimary ${styles.btnPrimary}`} disabled={formIsValid ? false : true}>Save</button>
                            </form>
                        </div>
                    </Modal>
                );
   
            }
        }</BookContext.Consumer>
    );
}

export default EditBookModal;
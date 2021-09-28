
class BooksStorage {

    set(key, value) {

        const localStorage = window.localStorage;

        localStorage.setItem(key, value);

    }

    get(key) {

        const localStorage = window.localStorage;

        if(!localStorage.getItem(key)) return false;

        return localStorage.getItem(key);
    }
        
}

export default BooksStorage;
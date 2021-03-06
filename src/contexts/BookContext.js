import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/bookReducer'

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const storageData = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : []
    const [books, dispatch] = useReducer(bookReducer, storageData)
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])

    return (
        <BookContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;


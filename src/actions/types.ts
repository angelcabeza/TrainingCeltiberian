export const CREATE_BOOK = "CREATE_BOOK";
export const ADD_BOOK = "ADD_BOOK";
export const UPDATE_BOOK = "UPDATE_BOOK";
export const DELETE_BOOK = "DELETE BOOk";
export const DELETE_ALL_BOOKS = "DELETE_ALL_BOOKS";

export type Book = {
    id: number
    title: string
    author: string
    description:string
}

// Actions
export type createBookAction = {
    type: 'CREATE_BOOK'
    payload: Book
}

export type updateBookAction = {
    type: 'UPDATE_BOOK'
    payload: Book
}

export type addBookAction = {
    type: 'ADD_BOOK'
    payload: Books
}

export type deleteBookAction = {
    type: 'DELETE_BOOK'
    payload: number
}

export type deleteAllBooksAction = {
    type: 'DELETE_ALL_BOOKS'
    payload?: never
}

export type Action =
    | createBookAction
    | updateBookAction
    | addBookAction
    | deleteBookAction
    | deleteAllBooksAction
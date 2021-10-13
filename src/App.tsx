import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import AddBook from './components/add-book.component';
import Book from './components/book.component';
import BooksList from './components/books-list.component';

function App() {
  return (
    <Router>
      <nav>
        <Link to={'/books'}>
          bezKoder
        </Link>
        <div>
          <li>
            <Link to={'/books'}>
              Books
            </Link>
          </li>
          <li>
            <Link to={'/add'}>
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div>
        <Switch>
          <Route exact path='/add' component={AddBook}/>
          <Route path='books/:id' component={Book} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

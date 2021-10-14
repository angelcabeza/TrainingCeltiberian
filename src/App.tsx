import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import TeamView from './components/team-view.component';
import NewTeam from './components/new-team.component';
import TeamPreview from './components/team-preview.component';

function App() {
  return (
    <Router>
      <nav>
        <Link to={'/'}>
          TeamsApp
        </Link>
        <div>
          <li>
            <Link to={'/teams'}>
              Teams
            </Link>
          </li>
          <li>
            <Link to={'/add'}>
              Add-Team
            </Link>
          </li>
        </div>
      </nav>

      <div>
        <Switch>
          <Route exact path='/add' component={NewTeam}/>
          <Route path='books/:id' component={TeamView} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

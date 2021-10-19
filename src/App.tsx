import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { getAllTeams, updateTeam, deleteTeam, createTeam} from './actions/teamActions'
import { State } from './reducers/rootReducer'

import TeamView from './components/team-view.component';
import AddTeamContainer from './containers/new-team.container';
import TeamPreviewContainer from './containers/team-preview.container';
import { newTeam } from "./actions/types";

function App() {
  
  const dispatch = useDispatch();
  const teams = useSelector((state: State) => state.teams.teamsVector);
  console.log("El array de equipos es: ",teams)

  useEffect(() => {
    dispatch(getAllTeams());
  },[teams])


  const onAddTeam = async (team :newTeam) => {
    dispatch(createTeam(team));
  }

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

        
        <Switch>
          <Route exact path='/'>
            <TeamPreviewContainer teams={teams} />
          </Route>
          <Route exact path='/add'> 
            <AddTeamContainer onAddTeam={onAddTeam} />
          </Route>
          <Route path='books/:id' component={TeamView} />
        </Switch>
    </Router>
  );
}

export default App;

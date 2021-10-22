import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { getAllTeams, deleteTeam, createTeam} from './actions/teamActions'
import { State } from './reducers/rootReducer'

import AddTeamContainer from './containers/new-team.container';
import TeamPreviewContainer from './containers/team-preview.container';
import Header from './components/header/header'
import { newTeam } from "./actions/types";

function App() {
  
  const dispatch = useDispatch();

  const teams = useSelector((state: State) => state.teams.teamsVector);

  useEffect(() => {
    dispatch(getAllTeams());
  },[])


  const onAddTeam = async (team :newTeam) => {
    dispatch(createTeam(team));
    dispatch(getAllTeams());
  }

  return (
    <Router>
      <Header/>
        
        <Switch>
          <Route exact path='/'>
            <TeamPreviewContainer teams={teams} />
          </Route>
          <Route exact path='/add'> 
            <AddTeamContainer onAddTeam={onAddTeam} />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;

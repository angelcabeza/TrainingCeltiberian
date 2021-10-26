import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { getAllTeams, deleteTeam, createTeam, getTeamByName} from './actions/teamActions'
import { State } from './reducers/rootReducer'

import AddTeamContainer from './containers/new-team.container';
import TeamPreviewContainer from './containers/team-preview.container';
import SearchBarContainer from "./containers/search-bar.container";
import Header from './components/header/header'
import { newTeam } from "./actions/types";

function App() {
  
  const dispatch = useDispatch();

  const state = useSelector((state: State) => state.teams);

  useEffect(() => {
    dispatch(getAllTeams());
  },[])


  const onAddTeam = async (team :newTeam) => {
    dispatch(createTeam(team));
  }

  const onDeleteTeam = async (id: number) => {
    dispatch(deleteTeam(id));
  }

  const onSearchTeam = async (name: string) => {
    dispatch(getTeamByName(name));
  }

  return (
    <Router>
      <Header/>  
        <Switch>
          <Route exact path='/'>
            <TeamPreviewContainer teams={state.teamsVector} onDelete={onDeleteTeam} />
          </Route>
          <Route exact path='/add'> 
            <AddTeamContainer onAddTeam={onAddTeam} />
          </Route>
        </Switch>
        <SearchBarContainer onSearchTeam={onSearchTeam}/>
    </Router>
  );
}

export default App;

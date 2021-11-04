import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useEffect } from "react";
import {useDispatch} from 'react-redux'
import { getAllTeams} from './actions/teamActions'
import AddTeamContainer from './containers/new-team.container';
import TeamPreviewContainer from './containers/team-preview.container';
import Header from './components/header/header'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTeams());
  },[])

  return (
    <Router>
      <Header/>  
        <Switch>
          <Route exact path='/'>
            <TeamPreviewContainer/>
          </Route>
          <Route exact path='/add'> 
            <AddTeamContainer/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;

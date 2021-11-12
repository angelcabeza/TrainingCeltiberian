import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { getAllTeams} from './actions/teamActions'
import AddTeamContainer from './containers/new-team.container';
import TeamPreviewContainer from './containers/team-preview.container';
import Header from './components/header/header'
import {State} from './reducers/rootReducer'
import {useHistory} from 'react-router-dom'

function App() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllTeams());
  },[])

  return (
    <Router>
      <Header/>  
        <Switch>
          <Route exact path='/teams/'>
            <TeamPreviewContainer/>
          </Route>
          <Route exact path='/teams/add'> 
            <AddTeamContainer/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;

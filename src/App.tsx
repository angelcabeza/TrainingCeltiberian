import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { getAllTeams} from './actions/teamActions'
import AddTeamContainer from './containers/new-team.container';
import TeamPreviewContainer from './containers/team-preview.container';
import LoginContainer from "./containers/login.container";
import Header from './components/header/header'
import {State} from './reducers/rootReducer'
import {useHistory} from 'react-router-dom'
import RegisterContainer from "./containers/register.container";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state:State) => state.auth.isAuth);

  useEffect(() => {
      console.log(isAuth);
      dispatch(getAllTeams());
  },[isAuth])

  return (
    <Router>
      <Header/>
        <Switch>
          <Route exact path='/'>
            {isAuth ? (
              <>
                <TeamPreviewContainer/>
              </>
            ) : (
              <LoginContainer/>
            )}
          </Route>
          <Route exact path='/teams/add'> 
            <AddTeamContainer/>
          </Route>
          <Route exact path='/register'>
            <RegisterContainer/>
          </Route>
        </Switch>   
    </Router>
  );
}

export default App;

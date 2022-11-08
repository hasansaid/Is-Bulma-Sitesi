import SimpleBar from 'simplebar-react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './Home';
import Applied from './Applied';
import Saved from './Saved';
import Companies from './Companies';
import Login from './Login';
import Signup from './Signup';
import {useState} from 'react';

export default function App () {
  const [userActive, setUserActive] = useState (false);

  const changeUserActive = () => setUserActive (!userActive);

  return (
    <SimpleBar className="max-h-screen">
      <Router>
        <Switch>
          <Route
            path="/companies"
            render={props => (
              <Companies
                userActive={userActive}
                changeUserActive={changeUserActive}
                {...props}
              />
            )}
          />
          <Route
            path="/saved"
            render={props => (
              <Saved
                userActive={userActive}
                changeUserActive={changeUserActive}
                {...props}
              />
            )}
          />
          <Route
            path="/applied"
            render={props => (
              <Applied
                userActive={userActive}
                changeUserActive={changeUserActive}
                {...props}
              />
            )}
          />
          <Route
            path="/"
            exact
            render={props => (
              <Home
                userActive={userActive}
                changeUserActive={changeUserActive}
                {...props}
              />
            )}
          />
          <Route
            path="/login"
            render={props => (
              <Login
                userActive={userActive}
                changeUserActive={changeUserActive}
                {...props}
              />
            )}
          />
          <Route
            path="/signup"
            render={props => <Signup userActive={userActive} {...props} />}
          />
        </Switch>
      </Router>
    </SimpleBar>
  );
}

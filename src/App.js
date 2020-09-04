import React from 'react';
import UserList from './components/UserList';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import User from './components/User';

function App() {
  return (
    
    <Router>
          <Switch>
            <Route path="/" exact component={UserList} />
            <Route path="/activity-details" exact component={User} />
          </Switch>
    </Router>
  
  );
}

export default App;

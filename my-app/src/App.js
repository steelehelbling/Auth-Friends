import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";



import Login from "./components/Login";
import Friendsmake from "./components/Friendsmake";
import PrivateRoute from "./components/ProtectedRoute";
import AddFriend from './components/addfriend'
function App() {
  return (
    <Router>
      <div className="App">
      
            
            <Link to="/login"><div className='title'>Login</div></Link>
        
         
          
            <Link to="/protected"><div className='title'>Protected Page</div></Link>
        
            
            <Link to='/add-friend'><div className='title'>Add Friend</div></Link>

        <Switch>
          <PrivateRoute exact path="/protected" component={Friendsmake} />
          <PrivateRoute exact path='/add-friend' component={AddFriend} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

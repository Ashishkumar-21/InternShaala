// import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import React from "react";
import Login from "./Login";
// import profile from "./profile";

var isLoggedIn = false;
var userIsRegistered = 1;

const currentTime = new Date;

function App() {
  return (
    <>
      <div className="container">
        {currentTime.getHours()>12 && <h1>Why are you still working</h1>}
        {isLoggedIn ?<h1>Hello</h1>:<Login isRegistered={userIsRegistered} />}
      </div>
      {/* <Router>
        <Switch>
          <Route exact path="/profile" component={profile} />
        </Switch>
      </Router> */}
    </>
  );
}



export default App;

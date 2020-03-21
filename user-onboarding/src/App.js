// importing dependincies 
import React, { useState } from 'react';
import './App.css';
import { Route } from "react-router-dom";


//importing components
import NavComponent from "./components/nav-component";
import TeamPage from "./components/team-page";
import FormPage from "./components/form-page";


function App() {
// set up the state handler for all of the user records 

  const [ userRecords, setUserRecords ] = useState([
    {
      name: "AvanteGov",
      email: "Avante@gov.org",
      password: "secret-sauce",
      tos: true
    }
  ])

// set up the change handler for adding a new user record to the 
// entire set of records 

  const addUserHandler = (newUser) => {
    console.log("adding user", newUser);
    setUserRecords([...userRecords, newUser]);
  }


  return (
    <div className="App">
      <NavComponent />
      
      <Route path="/form-page" component={() => {
        return (
          <FormPage addUser={addUserHandler} />
        )
      }} />

      <Route path="/team-page" component={() => {
        return (
          <TeamPage users={userRecords} />
        )
      }} />
    </div>
  );
}

export default App;

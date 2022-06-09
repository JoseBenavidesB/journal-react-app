import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch
  } from "react-router-dom";
import firebase from "firebase/app";
import { JournalScreen } from "../components/journal/JournalScreen"
import { AuthRouter } from "./AuthRouter"
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged( user => {
      //console.log(user)
      if ( user?.uid ) {
        dispatch( login( user.uid, user.displayName ));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }

      setChecking(false);

    });

  }, [ dispatch, setChecking, setIsLoggedIn ])
  
  if ( checking ) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    )
  }

  return (
    <div >
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                    path="/auth" 
                    component={ AuthRouter }
                    isLoggedIn={ isLoggedIn}
                    />
                
                    <PrivateRoute 
                      exact path="/" 
                      component={ JournalScreen }
                      isLoggedIn= { isLoggedIn}
                      />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    </div>
  )
}

//261
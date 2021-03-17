import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { AuthenticationContext } from '../AuthenticationContext/AuthenticationContext';

const PrivateRoute = ({ children, ...rest }) => {
    const {loggedUser, setLoggedUser} = useContext(AuthenticationContext)
    return (
      <Route
        {...rest}
        render={({ location }) =>
        loggedUser ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;
import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { AuthProvider } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedUser] = useContext(AuthProvider)
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
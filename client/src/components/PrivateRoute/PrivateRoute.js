import React from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
// import { PrivateRouteProps } from "src/root/routing/interfaces/PrivateRouteProps";
import { Redirect, Route, useHistory, useLocation } from 'react-router-dom';
import { checkAuth } from '../../redux/auth/auth.action.js';
// type PrivateRouteProps = {};

export const PrivateRoute = ({
  component: Component,
  ...rest
}) => {
  const history = useHistory();
  const dispatch = useDispatch()
  const AUTH_REDUX = useSelector((state) => state.authService);
  const { loading, error, isAuth } = AUTH_REDUX;

  const token = localStorage.getItem('token');
  if (token) {
    dispatch(checkAuth());
    history.push('/app');
  }

  //console.log()
  console.log('====PrivateRoute====:')
  console.log('HISTORY:', history)
  console.log('AUTH_REDUX:', AUTH_REDUX)
  console.log('token:', token)

  return (
    <Route
      {...rest}
      render={(props) => {
        // const isLoggedIn = true;

        return isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect to={'/signin'} />
        );
      }}
    />
  );
};

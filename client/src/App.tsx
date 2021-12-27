import GlobalStyle from './styles/global';
import dark from './styles/theme/dark';
import light from './styles/theme/light';

import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { Loader } from './components/Loader/Loader';

import { HomePage } from './pages/home/HomePage';
import { AuthPage } from './pages/auth/AuthPage';

import { checkAuth } from './redux/auth/auth.action.js';

import usePersistedState from './utils/usePersistedState';

function App() {
  const dispatch = useDispatch();
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  // TODO переписать RootStateOrAny на types redux
  const AUTH_REDUX = useSelector((state: RootStateOrAny) => state.authService);
  const { loading, error, isAuth } = AUTH_REDUX;

  // TODO изменение цвета через redux
  const themeToggler = () => {
    theme.title === 'light' ? setTheme(dark) : setTheme(light);
  };

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      dispatch(checkAuth());
    }
  }, []);

  if (loading) {
    return <Loader />;
  }

  // TODO Private Route and Auth v6 how now?
  // TODO redirect if u auth
  const AuthRouting = () => {
    <Routes>
      <Route path={'/signin'} element={AuthPage} />
    </Routes>;
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <button onClick={themeToggler}></button>
        <Routes>
          <Route path='*' element={() => 'NOT FOUND'} />
          <Route path='/' element={<HomePage />} />
          <Route path={'/signin'} element={AuthPage} />
          {/* Private Route */}
          {/* <Route
            path='/asset/personnel'
            element={
              isAuth ? (
                <Navigate to='/admin/dashboard' />
              ) : (
                <Navigate to='/auth/login' />
              )
            }
          />

          <Route
            exact
            path='/admin'
            element={
              isAuthenticated ? (
                <DashboardLayout />
              ) : (
                <Navigate to='/auth/login' />
              )
            }
          >
            <Route exact path='/dashboard' element={<Dashboard />} />
            <Route
              exact
              path='/property-management'
              element={<AdminPropManagement />}
            />
            <Route exact path='/new-property' element={<NewProperty />} />
          </Route> */}
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;

import { useMemo, useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Layout } from './components/Layout';
import { PageDefault } from './components/PageDefault';

import { AppContext, ThemeModeContext } from './contexts';
import { AppClient } from './clients';
import { routes } from './config';
import { Route as AppRoute } from './types';
import { getAppTheme } from './styles/theme';
import { DARK_MODE_THEME, LIGHT_MODE_THEME } from './utils/constants';
import { Login } from './pages/Login';
import { SignIn } from './pages/SignIn';
import { useAppSelector } from "./hooks"

function App() {
  const [mode, setMode] = useState<typeof LIGHT_MODE_THEME | typeof DARK_MODE_THEME>(LIGHT_MODE_THEME);
  const appClient = new AppClient();
  const user = useAppSelector((state) => state.user.value);

  const themeMode = useMemo(
    () => ({
      toggleThemeMode: () => {
        setMode((prevMode) => (prevMode === LIGHT_MODE_THEME ? DARK_MODE_THEME : LIGHT_MODE_THEME));
      },
    }),
    []
  );

  const theme = useMemo(() => getAppTheme(mode), [mode]);

  const addRoute = (route: AppRoute) => (
    <Route key={route.key} path={route.path} component={route.component || PageDefault} exact />
  );

  return (
    <AppContext.Provider value={appClient}>
      <ThemeModeContext.Provider value={themeMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Switch>
              <Route exact component={Login} path="/login" />
              <Route exact component={SignIn} path="/SignIn" />
              
              { user.is_logged ?
              <Layout>
                {routes.map((route: AppRoute) =>
                  route.subRoutes ? route.subRoutes.map((item: AppRoute) => addRoute(item)) : addRoute(route)
                )}
              </Layout> :
              <Redirect to={{ pathname: '/SignIn' }} /> }
            </Switch>
          </Router>
        </ThemeProvider>
      </ThemeModeContext.Provider>
    </AppContext.Provider>
  );
}

export default App;

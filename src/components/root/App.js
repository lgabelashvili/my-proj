import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import { useLayoutEffect } from 'react';
import routes from '../../helpers/routes';
import { Div } from './styles';
import theme from '../../helpers/themes';
import FontStyles from '../../helpers/fontStyles';
import Navigation from '../Navigation';
import Footer from '../Footer';

const RouteComp = () => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      {routes.map((route) => (
        <Route
          exact={route.path === '/'}
          path={route.path}
          key={route.name}
          component={route.component}
        />
      ))}
    </>
  );
};

const App = () => (
  <ThemeProvider theme={theme}>
    <FontStyles />
    <Div>
      <Router>
        <Navigation />
        <Switch>
          <RouteComp />
        </Switch>
        <Footer />
      </Router>
    </Div>
  </ThemeProvider>
);

export default App;

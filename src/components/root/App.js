import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Div } from './styles';
import routes from '../../helpers/routes';
import theme from '../../helpers/themes';
import Navigation from '../Navigation';
import Footer from '../Footer';
import './styles.css';

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Div>
        <Navigation />
        <Switch>
          {routes.map((route) => (
            <Route
              exact={route.path === '/'}
              path={route.path}
              key={route.name}
            >
              {route.component}
            </Route>
          ))}
          <Redirect path="*" to="/" />
        </Switch>
        <Footer />
      </Div>
    </Router>
  </ThemeProvider>
);

export default App;

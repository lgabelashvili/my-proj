import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import routes from '../../helpers/routes';
import { Div } from './styles';
import theme from '../../helpers/themes';
import FontStyles from '../../helpers/fontStyles';
import Navigation from '../Navigation';
import Footer from '../Footer';

const App = () => (
  <ThemeProvider theme={theme}>
    <FontStyles />
    <Div>
      <Router>
        <Navigation />
        <Switch>
          {routes.map((route) => (
            <Route
              exact={route.path === '/'}
              path={route.path}
              key={route.name}
              component={route.component}
            />
          ))}
        </Switch>
        <Footer />
      </Router>
    </Div>
  </ThemeProvider>
);

export default App;

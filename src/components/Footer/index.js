import { Link } from 'react-router-dom';
import {
  Div,
  NavList,
  NavItem,
  AllRightReserved,
  containerStyles,
} from './styles';
import Container from '../Container';
import routes from '../../helpers/routes';

const Footer = () => (
  <Div>
    <Container costumeStyles={containerStyles}>
      <NavList>
        {routes.map((route) => (
          !route.isHiddenMenu && (
          <NavItem key={Math.random()}><Link to={route.path}>{route.name}</Link></NavItem>
          )
        ))}
        <NavItem><Link to="/terms">Terms & Condtions</Link></NavItem>
      </NavList>
      <AllRightReserved>© 2021. All Rights Reserved.</AllRightReserved>
    </Container>
  </Div>
);

export default Footer;

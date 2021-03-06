import { useLayoutEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
  Nav,
  containerStyles,
  Logo,
  NavList,
  NavItem,
  StyledLink,
  ToggleMenu,
  containerStylesLogo,
  NavComponent,
} from './styles';
import Container from '../Container';
import LogoImg from '../../assets/images/logo.png';
import routes from '../../helpers/routes';
import BurgerIcon from '../../assets/images/Burger.svg';
import CancelIcon from '../../assets/images/cancel.svg';

export const Navigation = () => {
  const [isOpen, setOpen] = useState(false);
  const history = useHistory();
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    setOpen(false);
  }, [pathname]);
  return (
    <NavComponent>
      <Container costumeStyles={containerStyles}>
        <Container costumeStyles={containerStylesLogo}>
          <Logo src={LogoImg} alt="" onClick={() => history.push('')} />
          <ToggleMenu src={isOpen ? CancelIcon : BurgerIcon} alt="" onClick={() => setOpen(!isOpen)} />
        </Container>
        <Nav isOpen={isOpen}>
          <NavList>
            {routes.map((route) => (
              !route.isHiddenMenu && (
              <NavItem key={Math.random()}>
                <StyledLink exact={route.path === '/'} to={route.path}>{route.name}</StyledLink>
              </NavItem>
              )
            ))}
          </NavList>
        </Nav>
      </Container>
    </NavComponent>
  );
};

export default Navigation;

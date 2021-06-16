import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const activeClassName = 'nav-item-active';

export const NavComponent = styled.div`
    height: 95px;
    @media (${({ theme }) => theme.device.laptopL}) { 
       height: 80px;
    }
    @media (${({ theme }) => theme.device.laptop}) { 
      height: 70px;
    }
    @media (${({ theme }) => theme.device.tablet}) { 
      height: 50px;
    }
`;

export const containerStyles = css`
  background-color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  position: relative;
  @media (${({ theme }) => theme.device.tablet}) { 
      padding: 0;
  }
`;

export const containerStylesLogo = css`
  width: max-content;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
   @media (${({ theme }) => theme.device.laptopL}) { 
       padding: 0
    }
    @media (${({ theme }) => theme.device.laptop}) { 
      padding: 0
    }
  @media (${({ theme }) => theme.device.tablet}) { 
      padding: 0 40px;
      width: 100%;
      background-color: white;
      z-index: 2;
      height: 100%;
      background-color: white;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  @media (${({ theme }) => theme.device.tablet}) { 
     transition: all 0.5s;
     padding: 0;
     position: absolute;
     left: 0;
     width: 100%;
     width: 100%;
     background-color: #FFFFFF;
     height: 50px;
     visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
     z-index: 0;
     transform: translateY(${({ isOpen }) => (isOpen ? '100%' : '0')});
  }
`;

export const Logo = styled.img`
  cursor: pointer;
  @media (${({ theme }) => theme.device.tablet}) { 
    height: 30px;
  }
  @media (${({ theme }) => theme.device.mobileL}) { 
      height: 25px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 44px;
  padding: 0;
   @media ${({ theme }) => theme.device.laptop} { 
      gap: 30px;
  }
  @media (${({ theme }) => theme.device.tablet}) { 
    gap: 30px;
  }
`;

export const NavItem = styled.li`
  list-style-type: none;
  cursor: pointer;
  font-size: 18px;
  font-family: Sofia-Pro;
   @media (${({ theme }) => theme.device.tablet}) { 
    font-size: 14px;
  }
    @media (${({ theme }) => theme.device.mobileL}) { 
    font-size: 13px;
  }
`;

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
   text-decoration: none;
    color: #293137;
  &.${activeClassName} {
    color: #1390F4;
  }
`;

export const ToggleMenu = styled.img`
  display: none;
  cursor: pointer;
   @media (${({ theme }) => theme.device.tablet}) { 
      display: block;
  }
   @media (${({ theme }) => theme.device.mobileL}) { 
      width: 20px;
  }
`;

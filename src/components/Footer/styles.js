import styled, { css } from 'styled-components';

export const Div = styled.div`
  background: #191b1d;
  padding: 25px 0;
  width: 100%;
    @media (${({ theme }) => theme.device.laptop}) { 
      padding: 20px 0;
    }
    @media (${({ theme }) => theme.device.tablet}) { 
      padding: 15px 0;
    }
`;

export const containerStyles = css`
  display: flex;
  justify-content: space-between;
   @media (max-width: 650px) { 
     flex-direction: column;
     gap: 10px 0;
     justify-content: center;
     align-items: center;
   }
  
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 35px;
   @media (${({ theme }) => theme.device.laptopL}) { 
     gap: 30px;
   }
    @media (${({ theme }) => theme.device.laptop}) { 
      gap: 25px;
    }
`;

export const NavItem = styled.li`
  color: white;
  list-style-type: none;
  cursor: pointer;
  font-family: Sofia-Bold;
  & a {
    text-decoration: none;
    font-size: 18px;
    color: white;
     @media (${({ theme }) => theme.device.laptopL}) { 
      font-size: 16px;
    }
     @media (${({ theme }) => theme.device.laptop}) { 
      font-size: 14px;
    }
  }
`;

export const AllRightReserved = styled.p`
  font-family: Sofia-Medium;
    font-size: 18px;
    color: #fff;
       @media (${({ theme }) => theme.device.laptopL}) { 
      font-size: 16px;
    }
     @media (${({ theme }) => theme.device.laptop}) { 
      font-size: 14px;
    }
`;

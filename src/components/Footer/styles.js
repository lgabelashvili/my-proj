import styled, { css } from 'styled-components';

export const Div = styled.div`
  background: #191b1d;
  padding: 25px 0;
  width: 100%;
  height: max-content;
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

export const NavItem = styled.li`
  color: white;
  list-style-type: none;
  cursor: pointer;
  font-family: Sofia-Bold;
  margin-bottom: 5px;
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

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  & ${NavItem}:not(:last-child){
      margin-right: 30px;
  }
   @media (${({ theme }) => theme.device.laptopL}) { 
      margin-right: 26px;
   }
    @media (${({ theme }) => theme.device.laptop}) { 
      margin-right: 20px;
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

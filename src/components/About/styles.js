import styled, { css } from 'styled-components';

export const Div = styled.div`
  background-color: #f9fafb;
  padding-top: 50px;
`;

export const containerStyles = css``;

export const ContainerWrapper = styled.div`
  max-width: 750px;
  margin: auto;
`;

export const Title = styled.h1`
    font-family: Sofia-Black;
    font-size: 40px;
    color: #191b1d;
    margin-bottom: 25px;
    @media (${({ theme }) => theme.device.laptopL}) { 
       font-size: 36px;
    }
    @media (${({ theme }) => theme.device.laptop}) { 
       font-size: 32px;
    }  
    @media (${({ theme }) => theme.device.tablet}) { 
       font-size: 24px;
    }  
    @media (${({ theme }) => theme.device.mobileL}) { 
       font-size: 20px;
    }    
`;

export const Desc = styled.p`
    font-family: "Sofia-Medium";
    font-size: 20px;
    color: #384047;
    padding-bottom: 30px;
    @media (${({ theme }) => theme.device.laptopL}) { 
       font-size: 19px;
    }
    @media (${({ theme }) => theme.device.laptop}) { 
       font-size: 18px;
    }  
    @media (${({ theme }) => theme.device.tablet}) { 
       font-size: 15px;
    }  
    @media (${({ theme }) => theme.device.mobileL}) { 
       font-size: 14px;
    }      
`;

export const SubTitle = styled.h2`
    font-family: Sofia-Black;
    font-size: 28px;
    color: #191b1d;
    position: relative;
    padding-left: 20px;
    margin-bottom: 25px;
    &:after {
      position: absolute;
      content: '';
      display: block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #1390F4;
      top: 50%;
      transform: translate(-20px, -40%);
    }
    @media (${({ theme }) => theme.device.laptopL}) { 
       font-size: 26px;
    }
    @media (${({ theme }) => theme.device.laptop}) { 
       font-size: 25px;
    }  
    @media (${({ theme }) => theme.device.tablet}) { 
       font-size: 19px;
    }  
    @media (${({ theme }) => theme.device.mobileL}) { 
       font-size: 17px;
    }       
`;

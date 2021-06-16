import styled, { css } from 'styled-components';

export const Div = styled.div`
  padding: 38px 0;
  background-color: white;
  @media (${({ theme }) => theme.device.tablet}) { 
     padding: 25px 0;
  };
`;

export const containerStyles = css`
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  justify-content: center;
  grid-column-gap: 220px;
  @media (${({ theme }) => theme.device.laptopL}) { 
     grid-column-gap: 5vw;
  };
  @media (${({ theme }) => theme.device.tablet}) { 
     grid-row-gap: 30px;
  };
  @media (max-width: 550px) { 
    grid-auto-flow: row;
  };
`;

export const Box = styled.div`
    display: flex;
   gap: 20px;
   text-align: left;
   @media (${({ theme }) => theme.device.tablet}) { 
     flex-direction: column;
     justify-content: center;
     align-items: center;
     text-align: center;
     gap: 0;
  };
  @media (max-width: 550px) { 
    align-items: flex-start;
    text-align: left;
  };
`;

export const Icon = styled.img`
  @media (${({ theme }) => theme.device.laptop}) { 
     width: 25px;
  }
   @media (${({ theme }) => theme.device.tablet}) { 
      margin-bottom: 10px;
      width: 30px;
  };
   @media (max-width: 550px) { 
      width: 35px;
  };
   @media (${({ theme }) => theme.device.mobileL}) { 
    width: 25px;
  }
`;

export const Details = styled.div`
  font-size: 16px;
  @media (${({ theme }) => theme.device.laptop}) { 
    font-size: 15px;
  }
  @media (${({ theme }) => theme.device.tablet}) { 
    font-size: 15px;
  }
  @media (max-width: 550px) { 
      font-size: 18px;
  };
  @media (${({ theme }) => theme.device.mobileL}) { 
    font-size: 15px;
  }
`;

export const Title = styled.p`
  font-family: Sofia-Black;
`;

export const Desc = styled.p`
  color: #7C8D9C;
  font-family: Sofia-Medium;
  font-size: 0.88em;
`;

import styled from 'styled-components';

export const Div = styled.div`
  height: 100vh;
  padding-top: 95px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
     @media (${({ theme }) => theme.device.laptopL}) { 
       padding-top: 80px;
    }
    @media (${({ theme }) => theme.device.laptop}) { 
      padding-top: 70px;
    }
    @media (${({ theme }) => theme.device.tablet}) { 
      padding-top: 50px;
    }
`;

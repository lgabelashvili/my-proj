import styled from 'styled-components';

export const Div = styled.div`
  min-height: 100vh;
  padding-top: 95px;
  display: grid;
  grid-template-rows: 1fr minmax(max-content, 0);
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

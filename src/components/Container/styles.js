import styled from 'styled-components';

export const Div = styled.div`
  padding: 0 200px;
  width: 100%;
  height: 100%;
   @media (${({ theme }) => theme.device.laptopL}) { 
      padding: 0 100px;
  }
  @media (${({ theme }) => theme.device.laptop}) { 
      padding: 0 70px;
  }
  @media (${({ theme }) => theme.device.laptop}) { 
      padding: 0 40px;
  }
   @media (${({ theme }) => theme.device.mobileL}) { 
      padding: 0 25px;
  }
   @media (${({ theme }) => theme.device.mobileM}) { 
      padding: 0 20px;
  }
  ${({ costumeStyles }) => costumeStyles};
`;

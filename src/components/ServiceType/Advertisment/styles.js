import styled from 'styled-components';

export const Div = styled.div`
  padding-top: 40px;
`;

export const containerStyles = styled.div`
  display: flex;
`;

export const Title = styled.h1`
  font-family: Sofia-Black;
  font-size: 22px;
  color: #191b1d;
  margin-bottom: 30px;
  @media (${({ theme }) => theme.device.laptopL}) { 
      font-size: 20px;
   } 
  @media (${({ theme }) => theme.device.laptop}) { 
      font-size: 18px;
   }      
 @media (${({ theme }) => theme.device.tablet}) { 
      font-size: 17px;
  }   
   @media (${({ theme }) => theme.device.mobileL}) { 
      font-size: 15px;
  }   
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
export const BoxTitle = styled.h3`
    font-family: "Sofia-Black";
    font-size: 16px;
    color: #191b1d;
    margin-bottom: 13px;
  @media (${({ theme }) => theme.device.laptopL}) { 
      font-size: 15px;
   } 
 
`;

export const Desc = styled.p`
    font-family: "Sofia-Medium";
    font-size: 18px;
    color: #54616c;
    margin-bottom: 24px;
      @media (${({ theme }) => theme.device.laptopL}) { 
      font-size: 22px;
   } 
  @media (${({ theme }) => theme.device.laptop}) { 
      font-size: 20px;
   }      
 @media (${({ theme }) => theme.device.tablet}) { 
      font-size: 16px;
  }   
   @media (${({ theme }) => theme.device.mobileL}) { 
      font-size: 14px;
  }  
`;

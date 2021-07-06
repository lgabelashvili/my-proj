import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  padding-bottom: 150px;
  @media (${({ theme }) => theme.device.laptop}) { 
     padding-bottom: 80px;
  }
`;

export const containerStyles = css`
  height: max-content;
  margin-top: 100px;
  @media (${({ theme }) => theme.device.laptopL}) { 
     margin-top: 80px;
  }
  @media (${({ theme }) => theme.device.laptop}) { 
     margin-top: 60px;
  }
`;

export const Box = styled.div`
  display: grid;
  grid-template-columns: ${({ reversed }) => (reversed ? '1fr 1.2fr' : '1.2fr 1fr')} ;
  max-width: 1260px;
  align-items: center;
  cursor: context-menu;
  margin: ${({ reversed }) => (!reversed && 'auto')};
  grid-gap: 50px;
  @media (${({ theme }) => theme.device.laptopL}) { 
      grid-template-columns: ${({ reversed }) => (reversed ? '1fr 1.3fr' : '1.3fr 1fr')} ;
  }
  @media (max-width: 800px) { 
     grid-template-columns: 1fr;
  }
  @media (${({ theme }) => theme.device.tablet}) { 
      grid-gap: 20px;   
  }
`;

export const Details = styled.div`
  order: ${({ reversed }) => reversed && 1};
   @media (${({ theme }) => theme.device.laptopL}) { 
      padding-left: ${({ reversed }) => !reversed && '6vw'};;   
   }
   @media (${({ theme }) => theme.device.tablet}) { 
     order: ${({ reversed }) => reversed && 0};
    padding-left: ${({ reversed }) => !reversed && '0px'};;  
  }
`;

export const Img = styled.img`
  max-height: 450px;
  height: 20vw;
  width: 100%;
  @media (${({ theme }) => theme.device.laptopL}) { 
      height: 23vw;
  }
   @media (${({ theme }) => theme.device.laptop}) { 
      height: 25vw;
  }
  @media (${({ theme }) => theme.device.tablet}) { 
      max-height: 260px;
      max-width: 400px;
      margin: auto;
      height: 220px;
  }
`;

export const BoxTitle = styled.p`
    font-family: Sofia-Bold;
    font-size: 16px;
    color: #1390f4;
    @media (${({ theme }) => theme.device.tablet}) { 
      font-size: 14px;
    }
`;

export const Title = styled.h1`
  font-family: Sofia-Black;
    font-size: 40px;
    color: #191b1d;
    margin: 22px 0;
    @media (${({ theme }) => theme.device.laptopL}) { 
      font-size: 36px;
      margin: 20px 0;
    }
    @media (${({ theme }) => theme.device.laptop}) { 
      font-size: 22px;
      margin: 17px 0;
    }
    @media (${({ theme }) => theme.device.mobileL}) { 
       font-size: 18px;
    }
`;

export const Desc = styled.p`
    font-family: Sofia-Medium;
    font-size: 20px;
    color: #505b65;
    width: 80%;
     @media (${({ theme }) => theme.device.laptopL}) { 
      font-size: 18px;
    }
    @media (${({ theme }) => theme.device.laptop}) { 
      font-size: 16px;
    }
    @media (${({ theme }) => theme.device.tablet}) { 
      font-size: 14px;
      margin-bottom: 20px;
    }
`;

export const Button = styled.button`
   border-radius: 10px;
   background: transparent;
   border: 1px solid #1390f4;
   padding: 15px 45px;
   cursor: pointer;
   font-family: Sofia-Bold;
   color: #1390F4;
   margin-top: 39px;
    @media (${({ theme }) => theme.device.laptopL}) { 
        padding: 14px 40px;
    }
    @media (${({ theme }) => theme.device.laptop}) { 
       padding: 12px 35px;
    }
    @media (${({ theme }) => theme.device.tablet}) { 
       display: none;
    }
`;

export const ButtonBottom = styled.button`
   border-radius: 10px;
   background: transparent;
   border: 1px solid #1390f4;
   padding: 15px 45px;
   cursor: pointer;
   font-family: Sofia-Bold;
   color: #1390F4;
   margin-top: 39px;
   display: none;
    @media (${({ theme }) => theme.device.laptopL}) { 
        padding: 14px 40px;
    }
    @media (${({ theme }) => theme.device.laptop}) { 
       padding: 12px 35px;
    }
    @media (${({ theme }) => theme.device.tablet}) { 
       display: block;
    }
    @media (${({ theme }) => theme.device.mobileL}) { 
       width: 100%;
    }
`;

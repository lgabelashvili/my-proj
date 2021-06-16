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
  display: flex;
  flex-direction: ${({ reversed }) => (reversed ? 'row-reverse' : 'row')};
  max-width: 1260px;
  align-items: center;
  cursor: context-menu;
  margin: ${({ reversed }) => (!reversed && 'auto')};
  gap: 100px;
  @media (${({ theme }) => theme.device.laptopL}) { 
    gap: 80px;
  }
  @media (${({ theme }) => theme.device.laptop}) { 
     gap: 70px;
  }
  @media (${({ theme }) => theme.device.tablet}) { 
   flex-direction: column;
   max-width: 400px;
   margin: auto;
   gap: 0;
  }
`;

export const Details = styled.div`
   flex: 1 1 0;
   width: 0;
   @media (${({ theme }) => theme.device.tablet}) { 
    flex: 0;
    width: 100%;
  }
`;

export const Img = styled.img`
   flex: 1 1 0;
   width: 0;
   height: 100%;
   @media (${({ theme }) => theme.device.tablet}) { 
    flex: 0;
    width: 100%;
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
      font-size: 28px;
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
    @media (${({ theme }) => theme.device.laptop}) { 
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
        display: block;
    }
    @media (${({ theme }) => theme.device.laptop}) { 
       padding: 12px 35px;
    }
    @media (${({ theme }) => theme.device.mobileL}) { 
       width: 100%;
    }
`;

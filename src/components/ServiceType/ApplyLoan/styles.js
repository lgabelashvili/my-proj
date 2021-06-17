import styled, { css } from 'styled-components';

export const Div = styled.div`
  background-color: #f9fafb;
  padding: 100px 0 80px;
`;

export const containerStyles = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 50px;
  @media (max-width: 850px) { 
       grid-template-columns: 1fr;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 70%;
      @media (max-width: 850px) { 
       display: none;
    }
`;

export const ImgForMobile = styled.img`
  display: none;
    @media (max-width: 850px) { 
       display: block;
       margin-top: 50px;
       width: 100%;
       height: 30vw;
    }
    @media (${({ theme }) => theme.device.mobileL}) { 
       display: block;
       margin-top: 50px;
       width: 100%;
       height: 40vw;
    }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
    font-family: Sofia-Black;
    font-size: 40px;
    color: #191b1d;
    margin-bottom: 15px;
    @media (${({ theme }) => theme.device.laptopL}) { 
       font-size: 32px;
    }
    @media (${({ theme }) => theme.device.laptop}) { 
       font-size: 28px;
       margin-bottom: 10px;
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
    font-weight: 500;
    font-size: 20px;
    text-align: left;
    color: #384047;
    @media (${({ theme }) => theme.device.laptopL}) { 
       font-size: 18px;
    }
    @media (${({ theme }) => theme.device.tablet}) { 
       font-size: 16px;
    } 
     @media (${({ theme }) => theme.device.tablet}) { 
       font-size: 14px;
    }           
`;

export const SubTitle = styled.h2`
  font-family: Sofia-Black;
  font-size: 28px;
  color: #191b1d;
  margin: 50px 0 25px;
    @media (${({ theme }) => theme.device.laptopL}) { 
       font-size: 26px;
    }
    @media (${({ theme }) => theme.device.laptop}) { 
       font-size: 24px;
    } 
    @media (${({ theme }) => theme.device.tablet}) { 
       font-size: 22px;
    }   
     @media (${({ theme }) => theme.device.mobileL}) { 
       font-size: 19px;
    }       
`;

export const Ul = styled.ul`
  margin-top: 35px;
    @media (${({ theme }) => theme.device.laptopL}) { 
       margin-top: 30px;
    }
    @media (${({ theme }) => theme.device.laptop}) { 
      margin-top: 25px;
    } 
    @media (${({ theme }) => theme.device.tablet}) { 
      margin-top: 23px;
    }     
    @media (${({ theme }) => theme.device.mobileL}) { 
      margin-top: 20px;
    }     
`;

export const Li = styled.li`
  position: relative;
  list-style: none;
  font-family: Sofia-Medium;
  font-size: 20px;
  color: #212529;
  padding-left: 20px;
  padding-bottom: 5px;
  @media (${({ theme }) => theme.device.laptopL}) { 
       font-size: 18px;
  }
  @media (${({ theme }) => theme.device.tablet}) { 
       font-size: 16px;
  }
  @media (${({ theme }) => theme.device.mobileL}) { 
       font-size: 14px;
  }
  &::before {
      position: absolute;
      content: "";
      width: 8px;
      height: 8px;
      background-color: #1390F4;
      border-radius: 50%;
      display: block;
      top: 50%;
      transform: translate(-20px, -70%);
  }
`;

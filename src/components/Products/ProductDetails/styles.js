import styled, { css } from 'styled-components';

export const Box = styled.div`
  height: 100%;
  background-color: #f9fafb;
`;

export const containerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 850px;
  width: 100%;
  margin: 50px 0;
`;

export const Back = styled.div`
  display: flex;
  align-items: center;
  font-family: Sofia-Black;
  font-size: 24px;
  color: #191b1d;
  gap: 20px;
  cursor: pointer;
  @media (${({ theme }) => theme.device.laptopL}) { 
      font-size: 22px;
  }
  @media (${({ theme }) => theme.device.laptop}) { 
     font-size: 20px;
  }
  @media (${({ theme }) => theme.device.tablet}) { 
     font-size: 18px;
  }
`;

export const BackImg = styled.img`
  @media (${({ theme }) => theme.device.laptopL}) { 
      width: 30px;
  }
  @media (${({ theme }) => theme.device.laptop}) { 
     width: 25px;
  }
  @media (${({ theme }) => theme.device.tablet}) { 
     width: 20px;
  }
`;

export const Img = styled.img`
  border-radius: 15px;
  margin: 29px 0 16px;
  width: 100%;
`;

export const LogoWrapper = styled.div`
  padding: 20px 24px;
  width: 100%;
  background-color: #E8EFF6;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  @media (${({ theme }) => theme.device.laptopL}) { 
      padding: 18px 22px;
  }
  @media (${({ theme }) => theme.device.laptop}) { 
      padding: 17px 20px;
  }
  @media (${({ theme }) => theme.device.tablet}) { 
      padding: 15px 18px;
  }
    @media (${({ theme }) => theme.device.mobileL}) { 
      padding: 12px;
  }
`;

export const Logo = styled.img`
  align-self: center;
  @media (${({ theme }) => theme.device.laptopL}) { 
      width: 200px;
      height: 50px;
  }
  @media (${({ theme }) => theme.device.laptop}) { 
      width: 180px;
      height: 40px;
  }
    @media (${({ theme }) => theme.device.tablet}) { 
      width: 170px;
      height: 35px;
  }
  @media (${({ theme }) => theme.device.tablet}) { 
      width: 130px;
      height: 23px;
  }
   @media (${({ theme }) => theme.device.mobileL}) { 
      width: 120px;
      height: 25px;
  }
     @media (${({ theme }) => theme.device.mobileS}) { 
      width: 80px;
      height: 18px;
  }
`;

export const Button = styled.button`
  font-family: Sofia-Bold;
  font-size: 18px;
  text-align: center;
  color: #fff;
  padding: 18px 75px;
  border: 0;
  background-color: #1390F4;
  border-radius: 4px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  @media (${({ theme }) => theme.device.laptopL}) { 
      padding: 15px 70px;
      font-size: 17px;
  }
  @media (${({ theme }) => theme.device.laptop}) { 
      padding: 13px 60px;
      font-size: 16px;
  }
  @media (${({ theme }) => theme.device.tablet}) { 
      padding: 10px 20px;
      width: max-content;
      font-size: 14px;
  }
  @media (${({ theme }) => theme.device.mobileL}) { 
      font-size: 12px;
      padding: 8px 16px;
  }
   @media (${({ theme }) => theme.device.mobileM}) { 
      font-size: 12px;
      padding: 8px;
  }
`;

export const Detail = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

export const DetailTitle = styled.h2`
  margin-bottom: 5px;
  font-family: Sofia-Black;
  font-size: 20px;
  color: #191b1d;
  @media (${({ theme }) => theme.device.laptopL}) { 
      font-size: 18px;
  }
  @media (${({ theme }) => theme.device.laptop}) { 
      font-size: 16px;
  }
`;

export const DetailText = styled.p`
    font-family: Sofia-Medium;
    font-size: 16px;
    color: #384047;
    margin-top: 18px;
    display: flex;
    align-items: baseline;
    position: relative;
    ${({ showDot }) => showDot && css`
      padding-left: 15px;
      &:after {
        position: absolute;
        content: '';
        display: block;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: #1390F4;
        top: 40%;
        transform: translate(-15px, 0);
      }
    `};
    @media (${({ theme }) => theme.device.laptopL}) { 
       font-size: 15px;
    }
    @media (${({ theme }) => theme.device.laptop}) { 
       font-size: 14px;
    }
    @media (${({ theme }) => theme.device.tablet}) { 
       font-size: 13px;
    }
`;

export const Score = styled.span`
  font-size: 1.5em;
  color: #FAC04C;
`;

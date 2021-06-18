import styled, { css } from 'styled-components';

export const Box = styled.div`
  height: 100%;
  background-color: #f9fafb;
`;

export const containerStyles = css`
  
`;

export const Title = styled.h1`
    font-family: Sofia-Black;
    font-size: 40px;
    color: #191b1d;
    padding: 50px 0 6px;
    @media (${({ theme }) => theme.device.laptopL}) { 
      font-size: 36px;
    }
    @media (${({ theme }) => theme.device.laptop}) { 
      font-size: 30px;
    }
   @media (${({ theme }) => theme.device.tablet}) { 
     font-size: 26px;
   }
`;

export const PageDesc = styled.p`
    font-family: Sofia-Medium;
    font-size: 20px;
    text-align: left;
    color: #73879b;
    @media (${({ theme }) => theme.device.laptopL}) { 
      font-size: 18px;
    }
    @media (${({ theme }) => theme.device.laptop}) { 
      font-size: 17px;
    }
   @media (${({ theme }) => theme.device.tablet}) { 
     font-size: 15px;
   }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  grid-gap: 30px;
  padding: 50px 0 70px;
  & div:nth-child(2n+1) {
        justify-self: end;
  }
   @media (${({ theme }) => theme.device.mobileL}) { 
      grid-template-columns: 1fr;
  }
`;

export const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  background: #e5e9ee;
  max-width: 400px;
  height: 100%;
     @media (${({ theme }) => theme.device.tablet}) { 
      margin: auto;
  }
`;

export const Header = styled.div`
  border-radius: 10px 10px 0px 0px;
  background: #d6dfe7;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
export const HeaderImg = styled.img`
  height: 50px;
  @media (${({ theme }) => theme.device.laptopL}) { 
      width: 170px;
      height: 45px;
  }
   @media (${({ theme }) => theme.device.tablet}) { 
      width: 140px;
      height: 40px;
  }
  @media (${({ theme }) => theme.device.mobileL}) { 
     width: 120px;
     height: 35px;
  }
`;

export const Ul = styled.ul`
  padding: 20px 30px;
  height: 100%;
`;

export const Li = styled.li`
  list-style: none;
  position: relative;
  font-family: Sofia-Medium;
  font-size: 16px;
  text-align: left;
  color: #4b5763;
  line-height: 1.2;
  margin-bottom: 15px;
  &:after {
    position: absolute;
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #1390F4;
    top: 0;
    transform: translate(-15px, 120%);
  }
  @media (${({ theme }) => theme.device.laptopL}) { 
      font-size: 15px;
  }
   @media (${({ theme }) => theme.device.tablet}) { 
      font-size: 14px;
  }
  @media (${({ theme }) => theme.device.mobileL}) { 
     font-size: 13px;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 40px 30px;
     @media (${({ theme }) => theme.device.laptop}) { 
      padding: 35px 28px 20px;
  }
   @media (${({ theme }) => theme.device.tablet}) { 
      padding: 30px 28px 20px;
  }
     @media (${({ theme }) => theme.device.mobileL}) { 
      padding: 5px 20px 15px;
      font-size: 12px;
  }
`;

export const Button = styled.button`
    background: #1390f4;
    color: white;
    font-family: Sofia-Bold;
    padding: 18px 22px;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    border: 0;
    &:focus {
       outline: none;
    }
   @media (max-width: 1550px) {
    font-size: 16px;
    padding: 18px;
  }
   @media (${({ theme }) => theme.device.tablet}) { 
      padding: 10px;
      font-size: 16px;
  }
   @media (${({ theme }) => theme.device.tablet}) { 
      padding: 8px;
      font-size: 14px;
  }
     @media (${({ theme }) => theme.device.mobileL}) { 
      padding: 2px 8px;
      font-size: 12px;
  }
`;

export const Score = styled.p`
    font-family: Sofia-Bold;
    font-size: 28px;
    text-align: center;
    color: #FAC04C;
    & span {
      color: #9eaebd;
      font-size: 0.8em;
    }
      @media (${({ theme }) => theme.device.laptopL}) { 
          font-size: 26px;
      }
      @media (${({ theme }) => theme.device.laptop}) { 
          font-size: 22px;
      }
      @media (${({ theme }) => theme.device.tablet}) { 
         font-size: 18px;
      }
      @media (${({ theme }) => theme.device.mobileL}) { 
         font-size: 16px;
      }
`;

export const FooterLink = styled.a`
    font-family: Sofia-Medium;
    font-size: 18px;
    text-align: center;
    color: #3d444b;
    display: block;
    text-decoration: underline;
    cursor: pointer;
      @media (${({ theme }) => theme.device.laptopL}) { 
        font-size: 17px;
      }
      @media (${({ theme }) => theme.device.laptop}) { 
          font-size: 16px;
      }
      @media (${({ theme }) => theme.device.tablet}) { 
         font-size: 15px;
      }
      @media (${({ theme }) => theme.device.mobileL}) { 
         font-size: 13px;
      }

`;

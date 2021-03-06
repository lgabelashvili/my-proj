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
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  padding: 50px 0 70px;
  justify-items: ${({ cnt }) => cnt > 1 && 'center'};
  justify-content: center;
   @media (max-width: 1850px) { 
   grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1250px) { 
      grid-template-columns: 1fr 1fr;
      & > div:nth-child(2n+1){
        justify-self: ${({ cnt }) => cnt > 1 && 'end'};
      }
      & > div:nth-child(2n){
        justify-self: ${({ cnt }) => cnt > 1 && 'start'};
      }
  }
  @media (max-width: 700px) { 
      grid-template-columns: 1fr;
  }
`;

export const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: #e5e9ee;
  max-width: 360px;
  width: 100%;
  @media (max-width: 1250px) { 
      max-width: 320px;
  }
  @media (${({ theme }) => theme.device.tablet}) { 
      margin: auto;
      padding-bottom: 10px;
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
  padding: 20px 30px 0px;
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
    top: 50%;
    transform: translate(-15px, -50%);
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
  padding: 40px 30px;
  align-items: center;
   @media (max-width: 1250px) { 
      padding: 10px 28px 20px;
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
    height: max-content;
    &:focus {
       outline: none;
    }
   @media (max-width: 1550px) {
    font-size: 16px;
    padding: 18px;
  }
   @media (max-width: 1250px) { 
      padding: 10px;
      font-size: 16px;
  }
   @media (${({ theme }) => theme.device.tablet}) { 
      font-size: 14px;
  }
     @media (${({ theme }) => theme.device.mobileL}) { 
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
     @media (max-width: 1250px) { 
          font-size: 20px;
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
      @media (max-width: 1250px) { 
          font-size: 15px;
      }
      @media (${({ theme }) => theme.device.tablet}) { 
         font-size: 15px;
      }
      @media (${({ theme }) => theme.device.mobileL}) { 
         font-size: 13px;
      }

`;

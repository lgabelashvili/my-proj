import styled, { css } from 'styled-components';
import BgImg from '../../../assets/images/productBg.png';

export const Div = styled.div`
  background-color: #246BA3;
  background-image: url(${BgImg});
  padding: 40px 0;
  background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
`;

export const containerStyles = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  color: #FAC04C;
  font-size: 16px;
  font-family: Sofia-Bold;
`;

export const FindService = styled.h1`
  font-family: Sofia-Black;
  font-size: 40px;
  color: #fff;
  margin: 20px 0;
  @media (${({ theme }) => theme.device.laptopL}) { 
      font-size: 36px;
  }
  @media (${({ theme }) => theme.device.laptop}) { 
      font-size: 28px;
      margin: 18px 0;
  }
   @media (${({ theme }) => theme.device.tablet}) { 
      font-size: 24px;
      margin: 14px 0;
  }
   @media (${({ theme }) => theme.device.mobileL}) { 
      font-size: 20px;
  }
  @media (${({ theme }) => theme.device.mobileS}) { 
      font-size: 17px;
  }
`;

export const SelectCategory = styled.p`
    font-family: Sofia-Medium;
    font-size: 20px;
    color: #d7e5f1;
    text-align: center;
      @media (${({ theme }) => theme.device.laptop}) { 
      font-size: 17px;
  }
    @media (${({ theme }) => theme.device.mobileL}) { 
      font-size: 15px;
  }
`;

export const CategoryList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin-top: 90px;
    @media (${({ theme }) => theme.device.laptopL}) { 
    grid-template-columns: repeat(2, minmax(max-content, 0));
    justify-content: center;
  }
   @media (${({ theme }) => theme.device.laptop}) { 
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    margin-top: 70px;
    & div:nth-child(2n+1){
        justify-self: flex-end;
    }
    @media (${({ theme }) => theme.device.tablet}) { 
      grid-template-columns: repeat(1, 1fr);
      justify-content: center;
      margin-top: 50px;
       & div:nth-child(n){
        justify-self: center;
    }
    }
  }
`;

export const BoxTitle = styled.h2`
    font-family: Sofia-Black;
    font-size: 22px;
      @media (${({ theme }) => theme.device.laptopL}) { 
        font-size: 20px;
      }
      @media (${({ theme }) => theme.device.laptop}) { 
          font-size: 18px;
      }
`;

export const BoxDesc = styled.p`
    font-family: Sofia-Medium;
    font-size: 18px;
    text-align: center;
    margin: 24px 0 40px;
    @media (${({ theme }) => theme.device.laptopL}) { 
        font-size: 17px;
     }
    @media (${({ theme }) => theme.device.laptop}) { 
        font-size: 14px;
    }
    @media (${({ theme }) => theme.device.tablet}) { 
       margin: 24px 0 30px;
    }
`;

export const LearnMore = styled.p`
    font-family: Sofia-Medium;
    font-size: 20px;
    text-align: center;
    color: #fac04c;
    cursor: pointer;
    background-color: transparent;
    border-radius: 10px;
    width: 100%;
    padding: 10px;
    @media (${({ theme }) => theme.device.laptopL}) { 
        font-size: 18px;
      }
    @media (${({ theme }) => theme.device.laptop}) { 
          font-size: 16.5px;
    }
`;

export const Box = styled.div`
  background-color: #1D5581;
  max-width: 364px;
  max-height: 300px;
  width: 100%;
  border-radius: 20px;
  box-shadow: 20px 20px 16px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 20px;
  transition: background 0.6s;
  cursor: context-menu;
  &:hover {
    background-color: #FFFFFF;
  }
  &:hover ${BoxTitle} {
    color: black;
  }
   &:hover ${BoxDesc} {
    color: #556573;
  }
   &:hover ${LearnMore} {
      background-color: #fac04c;
      color: white;
  };
  @media (${({ theme }) => theme.device.laptop}) { 
     max-width: 300px;
  }
`;

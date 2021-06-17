import styled, { css } from 'styled-components';
import OfferBg from '../../../assets/images/offerBg.png';
import OfferBgMb from '../../../assets/images/offerBgMb.png';

export const Div = styled.div`
  background-image: url(${OfferBg});
  background-size: 100% 100%;
    padding: 50px 20px;
    @media (${({ theme }) => theme.device.laptopL}) { 
        padding: 40px 20px;
   }
    @media (${({ theme }) => theme.device.laptop}) { 
       padding: 35px 20px;
   }
    @media (${({ theme }) => theme.device.tablet}) { 
        padding: 30px 20px;
   }
  @media (${({ theme }) => theme.device.mobileL}) { 
       background-image: url(${OfferBgMb});
   }
`;

export const containerStyles = css`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 50px;
    @media (${({ theme }) => theme.device.tablet}) { 
        grid-auto-flow: row;
        align-items: center;
        justify-content: center;
   }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 360px;
`;

export const Title = styled.h2`
    font-family: Sofia-Black;
    font-size: 22px;
    text-align: center;
    color: #fff;
    margin-bottom: 20px;
    @media (${({ theme }) => theme.device.laptopL}) { 
        font-size: 20px;
        margin-bottom: 18px;
   }
    @media (${({ theme }) => theme.device.laptop}) { 
        font-size: 18px;
        margin-bottom: 18px;
   }
    @media (${({ theme }) => theme.device.tablet}) { 
        font-size: 16px;
        margin-bottom: 16px;
   }
`;

export const Desc = styled.p`
    font-family: Sofia-Medium;
    font-size: 18px;
    text-align: center;
    color: #fff;
    @media (${({ theme }) => theme.device.laptopL}) { 
        font-size: 17px;
   }
    @media (${({ theme }) => theme.device.laptop}) { 
        font-size: 16px;
   }
    @media (${({ theme }) => theme.device.tablet}) { 
        font-size: 14px;
   }    
`;

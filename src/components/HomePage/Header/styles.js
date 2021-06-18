import styled, { css } from 'styled-components';

export const Div = styled.div`
  background-color: #f9fafb;
  padding: 89px 0 130px;
      cursor: context-menu;
   @media (${({ theme }) => theme.device.laptopL}) { 
        padding: 70px 0 115px;
    }
    @media (${({ theme }) => theme.device.laptop}) { 
        padding: 55px 0 80px;
    }
     @media (${({ theme }) => theme.device.tablet}) { 
        padding: 40px 0 60px;
    }
`;

export const containerStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
   @media (${({ theme }) => theme.device.tablet}) { 
        flex-direction: column-reverse;
        justify-content: center;
        text-align: center;
   }
`;

export const Description = styled.div`
  margin-right: 50px;
`;

export const Title = styled.h1`
    font-family: "Sofia-Bold";
    font-size: max(50px, 3.1vw);
    color: #191b1d;
    margin-bottom: 41px;
    @media (${({ theme }) => theme.device.laptopM}) { 
        font-size: max(24px, 2.2vw);
        margin-bottom: 30px;
    }
    @media (${({ theme }) => theme.device.laptop}) { 
      margin-bottom: 10px;
    }
    @media (max-width: 1200px) { 
      margin-bottom: 10px;
      margin-top: 30px;
    }
`;

export const Info = styled.p`
  font-family: Sofia-Medium;
  font-size: 26px;
  color: #73879b;
  width: 70%;
  @media (${({ theme }) => theme.device.laptopL}) { 
      font-size: 22px;
  }
  @media (max-width: 1200px) { 
      font-size: max(18px , 1.8vw);
      width: 100%;
   }
`;

export const Img = styled.img`
  max-width: 616px;
  max-height: 478px;
  width: 42vw;
  height: 25vw;
   @media (${({ theme }) => theme.device.laptopL}) { 
        width: 350px;
        height: 250px;
  }
   @media (${({ theme }) => theme.device.laptopL}) { 
        width: max(35vw, 200px);
        height: max(30vw, 150px);
  }
`;

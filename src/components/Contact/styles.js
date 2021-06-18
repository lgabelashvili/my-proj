import styled, { css } from 'styled-components';

export const Box = styled.div`
  display: flex;
  background-color: #f9fafb;
  padding: 100px 0 0;
  @media (${({ theme }) => theme.device.laptopL}) { 
     padding-top: 80px;
  }
  @media (${({ theme }) => theme.device.laptop}) { 
      padding-top: 70px;
  }
  @media (${({ theme }) => theme.device.tablet}) { 
     padding-top: 55px;
  }
`;

export const containerStyles = css`
   width: 100%;
  max-width: 1260px;

`;

export const Title = styled.h1`
  font-family: Sofia-Black;
  font-size: 40px;
  color: #191b1d;
  @media (${({ theme }) => theme.device.laptopL}) { 
      font-size: 36px;
  }
  @media (${({ theme }) => theme.device.laptop}) { 
      font-size: 30px;
  }
  @media (${({ theme }) => theme.device.tablet}) { 
      font-size: 26px;
  }
  @media (${({ theme }) => theme.device.mobileL}) { 
      font-size: 22px;
  }
`;

export const SubTitle = styled.p`
  font-family: Sofia-Medium;
  font-size: 20px;
  color: #73879b;
  margin-top: 5px;
  @media (${({ theme }) => theme.device.laptopL}) { 
      font-size: 18px;
  }
  @media (${({ theme }) => theme.device.laptop}) { 
      font-size: 16px;
  }
  @media (${({ theme }) => theme.device.tablet}) { 
      font-size: 14px;
  }
  @media (${({ theme }) => theme.device.mobileM}) { 
      font-size: 13px;
  }
`;

export const Ul = styled.ul`
  margin-top: 50px;
  padding-left: 20px;
  display: grid;
  grid-template-columns: repeat(3, minmax(max-content, 0));
  flex-wrap: wrap;
  gap: 100px;
  @media (${({ theme }) => theme.device.laptopL}) { 
      grid-template-columns: repeat(2, minmax(max-content, 0));
      gap: 10px 20px;
  }
  @media (${({ theme }) => theme.device.tablet}) { 
      grid-template-columns: 1fr;
  }
`;

export const Li = styled.li`
  position: relative;
  list-style: none;
  font-family: Sofia-Semi-Bold;
  font-size: 16px;
  color: #212529;
  @media (${({ theme }) => theme.device.laptopL}) { 
     font-size: 14px;
  }
  @media (${({ theme }) => theme.device.laptop}) { 
     font-size: 13px;
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
      transform: translate(-20px, -50%);
  }
`;

export const Form = styled.form`
  background-color: #E8ECF0;
  border-radius: 10px;
  padding: 50px 80px 40px 80px;
  margin-top: 30px;
  display: grid;
  grid-auto-flow: row;
  grid-gap: 20px;
  margin-bottom: 50px;
  @media (${({ theme }) => theme.device.laptopL}) { 
      padding: 40px 120px 30px 120px;
  }
  @media (${({ theme }) => theme.device.laptop}) { 
      padding: 25px 105px 30px 105px;
  }
  @media (${({ theme }) => theme.device.tablet}) { 
     padding: 25px 30px 30px 30px;
  }
    @media (${({ theme }) => theme.device.tablet}) { 
     padding: 25px 20px 30px 20px;
  }
`;

export const FormTitle = styled.h1`
    font-family: Sofia-Black;
    font-size: max(30px, 2.1vw);
    text-align: center;
    color: #191b1d;
    @media (min-width: 1901px) { 
      font-size: 36px;
    }
    @media (${({ theme }) => theme.device.laptopL}) { 
      font-size: 28px;
    }
    @media (${({ theme }) => theme.device.laptop}) { 
       font-size: 26px;
    }
    @media (${({ theme }) => theme.device.tablet}) { 
        font-size: 22px;
    }
   @media (${({ theme }) => theme.device.mobileL}) { 
        font-size: 18px;
    }
    @media (${({ theme }) => theme.device.mobileL}) { 
        font-size: 16px;
   }
`;

export const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  grid-gap: 20px;
  margin-top: 50px;
  @media (${({ theme }) => theme.device.laptopL}) { 
     margin-top: 40px;
  }
  @media (${({ theme }) => theme.device.laptop}) { 
      margin-top: 30px;
  }
  @media (${({ theme }) => theme.device.tablet}) { 
       margin-top: 25px;
       grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  width: 100%;
  background: #fff;
  border: 2px solid #ecefef;
  padding: 20px;
  font-family: Sofia-Medium;
  font-size: 16px;
  color: #73879b;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
  @media (${({ theme }) => theme.device.laptopL}) { 
    padding: 18px;
  }
  @media (${({ theme }) => theme.device.laptop}) { 
     padding: 17px;
  }
  @media (${({ theme }) => theme.device.tablet}) { 
     width: 100%;
      font-size: 14px;
  }
  @media (${({ theme }) => theme.device.mobileL}) { 
     font-size: 13px;
  }
  @media (${({ theme }) => theme.device.mobileL}) { 
     font-size: 12px;
  }

`;

export const TextArea = styled.textarea`
  width: 100%;
  background: #fff;
  border: 2px solid #ecefef;
  padding: 20px;
  font-family: Sofia-Medium;
  font-size: 16px;
  color: #73879b;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
  @media (${({ theme }) => theme.device.laptopL}) { 
    padding: 18px;
  }
  @media (${({ theme }) => theme.device.laptop}) { 
     padding: 17px;
  }
  @media (${({ theme }) => theme.device.tablet}) { 
     width: 100%;
      font-size: 14px;
  }
  @media (${({ theme }) => theme.device.mobileL}) { 
     font-size: 13px;
  }
  @media (${({ theme }) => theme.device.mobileL}) { 
     font-size: 12px;
  }
`;

export const Button = styled.button`
   background: #1390f4;
   padding: 20px 150px;
   width: max-content;
   border: 0;
   margin-left: auto;
   font-size: 22px;
   font-family: Sofia-Bold;
   color: white;
   border-radius: 10px;
   &:focus {
     outline: none;
   }
   @media (${({ theme }) => theme.device.laptopL}) { 
    font-size: 21px;
    padding: 18px 140px;
  }
  @media (${({ theme }) => theme.device.laptop}) { 
    font-size: 18px;
    padding: 15px 130px;
  }
  @media (${({ theme }) => theme.device.tablet}) { 
    font-size: 17px;
    padding: 10px 120px;
  }
  @media (${({ theme }) => theme.device.mobileL}) { 
     margin: auto;
     width: 100%;
     padding: 10px 2px;
  }
`;

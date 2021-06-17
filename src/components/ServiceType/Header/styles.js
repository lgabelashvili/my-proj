import styled, { css } from 'styled-components';
import CarIcon from '../../../assets/images/car.svg';

export const Div = styled.div`
    background-color: #f9fafb;
    padding: 80px 0;
`;

export const containerStyles = css``;

export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 150px;
`;

export const Title = styled.h1`
  font-family: Sofia-Black;
  font-size: 40px;
  color: #191b1d;
  width: 100%;
`;

export const Steps = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-end;
  gap: 25px;
`;

export const StepList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 670px;
`;

export const Step = styled.p`
    font-family: Sofia-Bold;
    font-size: 20px;
    color: #999D9F;
`;

export const Progressbar = styled.div`
    display: block;
    max-width: 670px;
    width: 100%;
    height: 12px;
    border-radius: 6px;
    background: #e4e7e9;
    position: relative;
`;

export const ProgressbarFilled = styled.div`
  position: absolute;
  height: 100%;
  border-radius: 6px;
  background-color: #1390F4;
  width: ${({ step }) => (step === 1 ? '25%' : `calc(100% - ${`${(100 - (step - 1) * 50)}%`})`)};
  transition: all 0.7s;
`;

export const ProgressbarFilledWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  &:after {
    position: absolute;
    content: url(${CarIcon});
    right: 0;
    top: 50%;
    transform: translate(110%, -50%);
  }
`;

export const Select = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  margin-top: 20px;
`;

export const SelectTitle = styled.h2`
    font-family: Sofia-Black;
    font-size: 24px;
    color: #191b1d;
    margin-top: 135px;
`;

export const SelectDesc = styled.p`
    font-family: Sofia-Medium;
    font-size: 16px;
    line-height: 32px;
    color: #505b65;
`;

export const SelectBox = styled.div`
  max-width: 365px;
  width: 100%;
  border-radius: 10px;
  background-color: #F2F5F8;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  font-family: Sofia-Bold;
  font-weight: bold;
  font-size: 20px;
  color: #3a3f44;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.3s;
  &:hover {
    border: 2px solid #1390F4;
  }
`;

export const SelectBoxImg = styled.img`
  width: 70%;
  height: 110px;
`;

export const FinalStep = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

export const FinalStepBox = styled.div`
  width: 492px;
  background: #fff;
  filter: drop-shadow(20px 20px 16px rgba(0, 0, 0, 0.03));
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
`;

export const FinalStepLogo = styled.img`
    width: 230px;
    height: 60px;
`;

export const FinalStepDesc = styled.p`
  font-family: Sofia-Medium;
  font-size: 18px;
  color: #556573;
  text-align: center;
  margin: 40px 0 60px;
`;

export const Button = styled.button`
    width: 100%;
    padding: 20px 0;
    border-radius: 10px;
    background: #1390f4;
    border: none;
    font-family: Sofia-Bold;
    font-size: 22px;
    color: #fff;
    cursor: pointer;
    &:focus {
    outline: none;
    }
`;

export const FooterText = styled.p`
    font-family: Sofia-Medium;
    font-size: 14px;
    text-align: center;
    color: #556573;
    opacity: 0.7;
    margin-top: 35px;
`;

export const FinalStepImg = styled.img`
  width: 100%;
`;

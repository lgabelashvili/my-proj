import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Div,
  containerStyles,
  HeaderWrapper,
  Title,
  Steps,
  StepList,
  Step,
  Progressbar,
  ProgressbarFilled,
  ProgressbarFilledWrapper,
  SelectBox,
  Select,
  SelectBoxImg,
  SelectTitle,
  SelectDesc,
  FinalStep,
  FinalStepBox,
  FinalStepImg,
  FinalStepLogo,
  FinalStepDesc,
  Button,
  FooterText,
} from './styles';
import Container from '../../Container';
import DefCarIcon from '../../../assets/images/defCar.svg';
import SuvCarIcon from '../../../assets/images/suv.svg';
import VanCarIcon from '../../../assets/images/van.svg';
import TruckCarIcon from '../../../assets/images/truck.svg';
import YesIcon from '../../../assets/images/yes.svg';
import NoIcon from '../../../assets/images/no.svg';
import AllStateLogo from '../../../assets/images/alistataLogo.png';
import NoImg from '../../../assets/images/noImg.png';
import { companyInfo } from '../../../helpers/companyInfo';

const Header = () => {
  const [step, setStep] = useState(1);
  const { id } = useParams();

  const carList = [
    {
      title: 'I want a Car',
      img: DefCarIcon,
    },
    {
      title: 'I want a SUV',
      img: SuvCarIcon,
    },
    {
      title: 'I want a Van',
      img: VanCarIcon,
    },
    {
      title: 'I want a Truck',
      img: TruckCarIcon,
    },
  ];
  const agreementList = [
    {
      title: 'Yes',
      img: YesIcon,
    },
    {
      title: 'No',
      img: NoIcon,
    },
  ];
  const currentData = companyInfo.autoLoans.filter((item) => item.id === id)[0];

  return (
    <Div>
      <Container costumeStyles={containerStyles}>
        <HeaderWrapper>
          <Title>Get Auto Financing With Good Or Bad Credit</Title>
          <Steps>
            <StepList>
              <Step>Step 1</Step>
              <Step>Step 2</Step>
              <Step>Step 3</Step>
            </StepList>
            <Progressbar>
              <ProgressbarFilled step={step}>
                <ProgressbarFilledWrapper />
              </ProgressbarFilled>
            </Progressbar>
          </Steps>
        </HeaderWrapper>
        <SelectTitle>
          {step === 1 && 'What kind of car do you want?'}
          {step === 2 && 'Are you 18 or older?'}
        </SelectTitle>
        <SelectDesc>
          {step === 1 && `Don't worry – if you are not sure,
            you can change your answer later.`}
          {step === 2 && 'Don\'t worry – if you are not sure, you can change your answer later.'}
        </SelectDesc>
        {step < 3 && (
        <Select>
          {step === 1 && carList.map((el) => (
            <SelectBox key={el.img} onClick={() => setStep(step + 1)}>
              <SelectBoxImg src={el.img} />
              {el.title}
            </SelectBox>
          ))}
          {step === 2 && agreementList.map((el) => (
            <SelectBox key={el.img} onClick={() => setStep(step + 1)}>
              <SelectBoxImg src={el.img} isAgreement />
              {el.title}
            </SelectBox>
          ))}
        </Select>
        )}
        {step === 3 && (
        <FinalStep>
          <FinalStepBox>
            <FinalStepLogo src={AllStateLogo} />
            <FinalStepDesc>Get your quote today from Allstate Car Loan company.</FinalStepDesc>
            <Button
              onClick={() => window.location.replace(currentData?.contact?.quoteUrl)}
            >
              Get Quote Now
            </Button>
            <FooterText>
              Just click, fill in the form and one of our
              specialists will call you with customized auto loan options.
            </FooterText>
          </FinalStepBox>
          <FinalStepImg src={NoImg} />
        </FinalStep>
        )}
      </Container>
    </Div>
  );
};

export default Header;

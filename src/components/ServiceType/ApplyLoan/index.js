import {
  Div,
  containerStyles,
  Img,
  LeftSide,
  Title,
  Desc,
  SubTitle,
  Ul,
  Li,
  ImgForMobile,
} from './styles';
import Container from '../../Container';
import NoImg from '../../../assets/images/noImg.png';

const ApplyLoan = () => (
  <Div>
    <Container costumeStyles={containerStyles}>
      <LeftSide>
        <Title>Apply for Your Auto Loan Today</Title>
        <Desc>
          We are proud to work with a nationwide network of approved dealerships
          and lenders to help our customers get the service and financial help they need.
        </Desc>
        <ImgForMobile src={NoImg} />
        <SubTitle>Get Finance</SubTitle>
        <Desc>
          Our nationwide dealerships and lending partners
          have helped millions of people get the financing options that they need.
        </Desc>
        <Ul>
          <Li>No Credit, No Problem</Li>
          <Li>No Obligation</Li>
          <Li>Quick response in under 24 hours</Li>
          <Li>Secure Online Portal</Li>
        </Ul>
      </LeftSide>
      <Img src={NoImg} />
    </Container>
  </Div>
);

export default ApplyLoan;

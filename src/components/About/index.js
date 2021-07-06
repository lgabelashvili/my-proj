import {
  Div,
  containerStyles,
  Title,
  Desc,
  ContainerWrapper,
  SubTitle,
} from './styles';
import Container from '../Container';

const About = () => (
  <Div>
    <Container costumeStyles={containerStyles}>
      <ContainerWrapper>
        <Title>About Us</Title>
        <Desc>
          Verylinx LTD aims to help hard-working Americans get their lives on track.
          We know how hard it can be to balance your work, family and social life,
          especially when there are bills to pay. But don’t worry, we’re here to help.
          Here at Verylinx, we help you to sort out the areas of your life you’d
          rather not worry about,
          such as finding the right Personal or Car Loan. We make life simple,
          so that you can enjoy spending more time with your loved ones.
        </Desc>
        <SubTitle>Why Choose Verylinx?</SubTitle>
        <Desc>
          Our experts are dedicated to finding the best deals for you. We compare every deal we find
          through rigorous testing to ensure that they all meet our standards.
          We know that affordability is important, however, we will never compromise on quality.
        </Desc>
        <Desc>
          That’s why we check all deals to see whether or not
          they give you the comprehensive cover you need.
        </Desc>
        <SubTitle>Our Service</SubTitle>
        <Desc>
          We recommend the best deals to all our clients
          and give them tailored solutions to suit their needs.
          We also help ordinary people to understand the
          market before they hand over any money.
          By doing this, we can help to put you in the
          best possible position to make an informed choice.
        </Desc>
        <Desc>
          By helping you to find the best medical personal or car loans,
          we know that we can help you to be your very best! We want to help
          you to build a strong, healthy and happy family, by investing in your future.
        </Desc>
      </ContainerWrapper>
    </Container>
  </Div>
);

export default About;

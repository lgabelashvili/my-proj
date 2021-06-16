import Container from '../../Container';
import {
  Div,
  Img,
  containerStyles,
  Description,
  Title,
  Info,
} from './styles';
import HeaderImg from '../../../assets/images/homePageImg.png';

const Header = () => (
  <Div>
    <Container costumeStyles={containerStyles}>
      <Description>
        <Title>Make Huge Savings!</Title>
        <Info>
          Compare the best deals on a wide range of
          financial plans including health insurance and car loans.
        </Info>
      </Description>
      <Img src={HeaderImg} alt="" />
    </Container>
  </Div>
);

export default Header;

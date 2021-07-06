import {
  Box,
  containerStyles,
  Details,
  Img,
  BoxTitle,
  Title,
  Desc,
  // eslint-disable-next-line no-unused-vars
  Button,
  // eslint-disable-next-line no-unused-vars
  ButtonBottom,
  Wrapper,
} from './styles';
import Container from '../../Container';
import PartnerImg from '../../../assets/images/partners.png';
import AboutUsImg from '../../../assets/images/About us Picture.png';

const Info = () => (
  <Wrapper>
    <Container costumeStyles={containerStyles}>
      <Box>
        <Details>
          <BoxTitle>COMPANY</BoxTitle>
          <Title>Our Partners</Title>
          <Desc>Ranking and detailed reviews of the best products and services</Desc>
          {/* <Button>See All Partners</Button> */}
        </Details>
        <Img src={PartnerImg} alt="" />
        {/* <ButtonBottom>See All Partners</ButtonBottom> */}
      </Box>
    </Container>
    <Container costumeStyles={containerStyles}>
      <Box reversed>
        <Details reversed>
          <BoxTitle>ABOUT US</BoxTitle>
          <Title>Who We Are</Title>
          <Desc>
            Here at Veylinx.com we pride ourselves on professional service.
            Our experts compare thousands of offers across the internet to find the best deals.
          </Desc>
          {/* <Button>Read More</Button> */}
        </Details>
        <Img src={AboutUsImg} alt="" />
        {/* <ButtonBottom>See All Partners</ButtonBottom> */}
      </Box>
    </Container>
  </Wrapper>
);

export default Info;

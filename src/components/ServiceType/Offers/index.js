import {
  Div,
  containerStyles,
  Box,
  Title,
  Desc,
} from './styles';
import Container from '../../Container';

const Offers = () => (
  <Div>
    <Container costumeStyles={containerStyles}>
      <Box>
        <Title>Safe and Secure</Title>
        <Desc>Your personal information is secured by industry standard encryption.</Desc>
      </Box>
      <Box>
        <Title>All Credit Types Accepted</Title>
        <Desc>Our network of lenders offer loans for people with all types of credit.</Desc>
      </Box>
      <Box>
        <Title>Save Time</Title>
        <Desc>
          {`Visit dealers with confidence knowing 
        that you're already approved.`}
        </Desc>
      </Box>
    </Container>
  </Div>
);

export default Offers;

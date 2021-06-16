import {
  containerStyles,
  Div,
  Box,
  Icon,
  Details,
  Title,
  Desc,
} from './styles';
import Container from '../../Container';
import RegPreviewIcon from '../../../assets/images/regularReview.svg';
import TrProviderIcon from '../../../assets/images/trProvider.svg';
import TQuotesIcon from '../../../assets/images/tQuotes.svg';

const Reviews = () => (
  <Div>
    <Container costumeStyles={containerStyles}>
      <Box>
        <Icon src={RegPreviewIcon} alt="" />
        <Details>
          <Title>Regular Reviews</Title>
          <Desc>Update Daily</Desc>
        </Details>
      </Box>
      <Box>
        <Icon src={TrProviderIcon} alt="" />
        <Details>
          <Title>Trusted Providers</Title>
          <Desc>Search Big Name Brands</Desc>
        </Details>
      </Box>
      <Box>
        <Icon src={TQuotesIcon} alt="" />
        <Details>
          <Title>Tailored Quotes</Title>
          <Desc>Something For Everyone</Desc>
        </Details>
      </Box>
    </Container>
  </Div>
);

export default Reviews;

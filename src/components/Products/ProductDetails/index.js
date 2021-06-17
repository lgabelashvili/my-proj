import { useHistory } from 'react-router-dom';
import {
  Box,
  containerStyles,
  ContainerWrapper,
  Back,
  BackImg,
  Img,
  LogoWrapper,
  Button,
  Logo,
  Detail,
  DetailTitle,
  DetailText,
  Score,
} from './styles';
import Container from '../../Container';
import BackIcon from '../../../assets/images/back.svg';
import NoImg from '../../../assets/images/noImg.png';
import LogoImg from '../../../assets/images/alistataLogo.png';

const ProductDetails = () => {
  const history = useHistory();
  const params = history.location.pathname.split('/');
  const prevRoute = params.slice(1, params.length - 1).join('/');
  return (
    <Box>
      <Container costumeStyles={containerStyles}>
        <ContainerWrapper>
          <Back onClick={() => history.push(`/${prevRoute}`)}>
            <BackImg alt="" src={BackIcon} />
            Back
          </Back>
          <Img src={NoImg} alt="" />
          <LogoWrapper>
            <Logo src={LogoImg} alt="" />
            <Button>Visit Website</Button>
          </LogoWrapper>
          <Detail>
            <DetailTitle>Highlights & Score</DetailTitle>
            <DetailText showDot>
              <Score>9</Score>
              /10
            </DetailText>
            <DetailText showDot>1,095 dealerships nationwide</DetailText>
            <DetailText showDot>Over 1.3 million requests processed in 2020</DetailText>
            <DetailText showDot>
              Special financing for Bad Credit,
              No Credit and Bankruptcy
            </DetailText>
            <DetailText showDot>One of the USA’s most trusted Auto Financing services</DetailText>
          </Detail>
          <Detail>
            <DetailTitle>Highlights & Score</DetailTitle>
            <DetailText>
              Auto Credit Express is a leading provider of auto financing lenders and dealerships.
              They match people to the best new and used car loans providers in the USA and Canada.
              They have a Trustpilot rating of 4.7 stars and are one of the USA’s
              most popular auto financing services.
            </DetailText>
          </Detail>
          <Detail>
            <DetailTitle>Benefits</DetailTitle>
            <DetailText>
              Auto Credit Express can help people with bad credit or low credit,
              or who have previously been turned down due to bankruptcy,
              through their special finance lenders.
            </DetailText>
          </Detail>
          <Detail>
            <DetailTitle>Reviews</DetailTitle>
            <DetailText>
              A“I had a great experience with auto credit express
              and my car buying experience, you should give
              them a chance with your own car buying experience.”
              <br />
              <br />
              Susan Stacey
            </DetailText>
            <DetailText>
              “I had a great experience with auto credit express
              and my car buying experience, you should give
              them a chance with your own car buying experience.”
              <br />
              <br />
              Susan Stacey
            </DetailText>
          </Detail>
        </ContainerWrapper>
      </Container>
    </Box>
  );
};

export default ProductDetails;

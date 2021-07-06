/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import { useHistory, useParams } from 'react-router-dom';
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
import { companyInfo } from '../../../helpers/companyInfo';

const ProductDetails = () => {
  const history = useHistory();
  const params = history.location.pathname.split('/');
  const prevRoute = params.slice(1, params.length - 1).join('/');
  const { productsName, id } = useParams();

  const handleUrlChange = (url) => {
    window.location.replace(url);
  };

  const filteredData = () => {
    switch (productsName) {
      case 'auto-loans':
        return companyInfo.autoLoans.filter((item) => item.id === id)[0];
      case 'personal-finance':
        return companyInfo.personalFinance.filter((item) => item.id === id)[0];
      default:
        break;
    }
    return null;
  };
  console.log(filteredData());
  return (
    <Box>
      <Container costumeStyles={containerStyles}>
        <ContainerWrapper>
          <Back onClick={() => history.push(`/${prevRoute}`)}>
            <BackImg alt="" src={BackIcon} />
            Back
          </Back>
          <Img src={require(`../../../assets/images/${filteredData().cover}`).default} alt="" />
          <LogoWrapper>
            <Logo src={require(`../../../assets/images/${filteredData().logo}`).default} alt="" />
            <Button onClick={() => handleUrlChange(filteredData().url)}>Visit Website</Button>
          </LogoWrapper>
          <Detail>
            <DetailTitle>Highlights & Score</DetailTitle>
            {filteredData().hS.map((item, index) => (
              <>
                {index === 0 && (
                <DetailText showDot>
                  <Score>{item.split('/')[0]}</Score>
                  /
                  {item.split('/')[1]}
                </DetailText>
                )}
                { index > 0 && (
                <DetailText showDot>{item}</DetailText>
                )}
              </>
            ))}
          </Detail>
          <Detail>
            <DetailTitle>Benefits</DetailTitle>
            <DetailText>
              {filteredData().benefits}
            </DetailText>
          </Detail>
          <Detail>
            <DetailTitle>Reviews</DetailTitle>
            <DetailText>
              {filteredData().overview}
            </DetailText>
          </Detail>
        </ContainerWrapper>
      </Container>
    </Box>
  );
};

export default ProductDetails;

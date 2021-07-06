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
    window.open(url, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
  };

  const filteredData = () => {
    switch (productsName) {
      case 'auto-loans': {
        const data = companyInfo.autoLoans.filter((item) => item.id === id);
        if (data.length === 0) {
          history.replace('/');
        }
        return data[0];
      }
      case 'personal-finance':
      {
        const data = companyInfo.personalFinance.filter((item) => item.id === id);
        if (data.length === 0) {
          history.replace('/');
        }
        return data[0];
      }
      default:
        break;
    }
    return null;
  };
  return (
    <Box>
      <Container costumeStyles={containerStyles}>
        <ContainerWrapper>
          <Back onClick={() => history.push(`/${prevRoute}`)}>
            <BackImg alt="" src={BackIcon} />
            Back
          </Back>
          <Img src={filteredData() && require(`../../../assets/images/${filteredData()?.cover}`).default} alt="" />
          <LogoWrapper>
            <Logo src={filteredData() && require(`../../../assets/images/${filteredData()?.logo}`).default} alt="" />
            <Button onClick={() => handleUrlChange(filteredData().url)}>Visit Website</Button>
          </LogoWrapper>
          <Detail>
            <DetailTitle>Highlights & Score</DetailTitle>
            {filteredData() && filteredData().hS.map((item, index) => (
              <div key={Math.random()}>
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
              </div>
            ))}
          </Detail>
          <Detail>
            <DetailTitle>Benefits</DetailTitle>
            <DetailText>
              {filteredData()?.benefits}
            </DetailText>
          </Detail>
          <Detail>
            <DetailTitle>Reviews</DetailTitle>
            <DetailText>
              {filteredData()?.overview}
            </DetailText>
          </Detail>
        </ContainerWrapper>
      </Container>
    </Box>
  );
};

export default ProductDetails;

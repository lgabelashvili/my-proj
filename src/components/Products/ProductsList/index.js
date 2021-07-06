/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import { useHistory, useLocation, useParams } from 'react-router-dom';
import {
  Box,
  containerStyles,
  Title,
  PageDesc,
  List,
  ListBox,
  HeaderImg,
  Header,
  Ul,
  Li,
  Footer,
  Button,
  Score,
  FooterLink,
} from './styles';
import Container from '../../Container';

const data = {
  autoLoans: [
    {
      id: 1,
      name: 'blue-sky',
      logo: 'blueSkyLogo',
      details: [
        'Good, Bad or No Credit Accepted',
        '400+ Lenders Compete for Your Business ',
        'Same Day Car Financing ',
        'Approvals Absolutely FREE & Confidential',
      ],
      url: 'https://redirect-3.net/d/37627',
    },
    {
      id: 2,
      name: 'carloans',
      logo: 'carLoansLogo',
      details: [
        'Get a quote free of charge',
        'Fast-track fully online service',
        'All credit scores accepted',
        'Nationwide network of dealerships and lenders',
      ],
      url: 'https://redirect-3.net/d/52083',
    },
    {
      id: 3,
      name: 'cars-fast',
      logo: 'carfastLogo',
      details: [
        'Get a quote free of charge',
        'Better Rates',
        'Low Payments',
        'Save Money',
      ],
      url: 'https://redirect-3.net/d/60912',
    },
  ],
  personalFinance: [
    {
      id: 4,
      name: 'blue-sky',
      logo: 'blueSkyLogo',
      details: [
        'Financing When You Need It',
        'Fairer Financing Without Confusion',
        'Nationwide Network of Lenders',
      ],
      url: 'https://redirect-3.net/d/17862',
    },
  ],
};

const ProductsList = () => {
  const { productsName } = useParams();
  const history = useHistory();
  const location = useLocation();
  console.log(productsName, 111);
  const handleUrlChange = (url) => {
    window.location.replace(url);
  };

  const filteredData = () => {
    switch (productsName) {
      case 'auto-loans':
        return data.autoLoans;
      case 'personal-finance':
        return data.personalFinance;
      default:
        break;
    }
    return null;
  };
  return (
    <Box>
      <Container costumeStyles={containerStyles}>
        <Title>Product Page</Title>
        <PageDesc>
          {`We've helped millions of people with all
              types of credit issues - and we can help you!`}
        </PageDesc>
        <List cnt={filteredData().length}>
          {filteredData().map((item) => (
            <ListBox key={item + Math.random()}>
              <Header>
                <HeaderImg alt="" src={require(`../../../assets/images/${item.logo}.png`).default} />
              </Header>
              <Ul>
                {item.details.map((detail) => (
                  <Li>{detail}</Li>
                ))}
              </Ul>
              <Footer>
                <Button onClick={() => handleUrlChange(item.url)}>
                  Visit Website
                </Button>
                <Score>
                  9.7
                  <span>/10</span>
                  <FooterLink onClick={() => history.push(`${location.pathname}/${item.id}`)}>Read Review</FooterLink>
                </Score>
              </Footer>
            </ListBox>
          ))}
        </List>
      </Container>
    </Box>
  );
};

export default ProductsList;

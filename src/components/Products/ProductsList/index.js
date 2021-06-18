import { useHistory, useLocation } from 'react-router-dom';
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
import alistataLogo from '../../../assets/images/alistataLogo.png';

const ProductsList = () => {
  const history = useHistory();
  const location = useLocation();
  console.log(location.pathname);
  const handleUrlChange = (url) => {
    window.location.replace(url);
  };
  return (
    <Box>
      <Container costumeStyles={containerStyles}>
        <Title>Product Page</Title>
        <PageDesc>
          {`We've helped millions of people with all
              types of credit issues - and we can help you!`}
        </PageDesc>
        <List>
          {new Array(20).fill(1).map((el, index) => (
            <ListBox key={el + Math.random()}>
              <Header>
                <HeaderImg alt="" src={alistataLogo} />
              </Header>
              <Ul>
                <Li>Special financing for Bad Credit, No Credit and Bankruptcy</Li>
                <Li>Special financing for Bad Credit</Li>
                <Li>Special financing for Bad Credit, No Credit and Bankruptcy</Li>
                <Li>Special financing for Bad Credit</Li>
                <Li>Special financing for Bad Credit, No Credit and Bankruptcy</Li>
              </Ul>
              <Footer>
                <Button onClick={() => handleUrlChange('https://www.google.com')}>
                  Visit Website
                </Button>
                <Score>
                  9.7
                  <span>/10</span>
                  <FooterLink onClick={() => history.push(`${location.pathname}/${index}`)}>Read Review</FooterLink>
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

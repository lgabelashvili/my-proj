import { useHistory } from 'react-router-dom';
import {
  Div,
  Title,
  containerStyles,
  FindService,
  SelectCategory,
  Box,
  CategoryList,
  BoxTitle,
  BoxDesc,
  LearnMore,
} from './styles';
import Container from '../../Container';

const Products = () => {
  const history = useHistory();
  return (
    <Div>
      <Container costumeStyles={containerStyles}>
        <Title>PRODUCTS</Title>
        <FindService>Find the Service that suits you</FindService>
        <SelectCategory>Select a category and compare the best details</SelectCategory>
        <CategoryList>
          <Box>
            <BoxTitle>Auto Insurance</BoxTitle>
            <BoxDesc>
              While driving the road is full of surprises.
              You can protect your finances and use 24 hours auto
            </BoxDesc>
            <LearnMore onClick={() => history.push('/product/test')}>Learn More</LearnMore>
          </Box>
          <Box>
            <BoxTitle>Auto Loans</BoxTitle>
            <BoxDesc>
              {`Auto loans are secured loans that use the car you're
              buying as collateral. You're typically asked to pay a fixed`}
            </BoxDesc>
            <LearnMore onClick={() => history.push('/product/test')}>Learn More</LearnMore>
          </Box>
          <Box>
            <BoxTitle>Legal Help</BoxTitle>
            <BoxDesc>
              Carloans Legal Help is for people who
              are handling their legal problems without a lawyer
            </BoxDesc>
            <LearnMore onClick={() => history.push('/product/test')}>Learn More</LearnMore>
          </Box>
          <Box>
            <BoxTitle>Auto Insurance</BoxTitle>
            <BoxDesc>
              While driving the road is full of surprises.
              You can protect your finances and use 24 hours auto
            </BoxDesc>
            <LearnMore onClick={() => history.push('/product/test')}>Learn More</LearnMore>
          </Box>
        </CategoryList>
      </Container>
    </Div>
  );
};

export default Products;

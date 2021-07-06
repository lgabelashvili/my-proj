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
            <BoxTitle>Auto Loans</BoxTitle>
            <BoxDesc>
              {`We’ve carefully reviewed all of our auto loan providers to find the very best for our customers. 
              All of the providers we’ve selected allow you to apply online and have fast approval times.`}
            </BoxDesc>
            <LearnMore onClick={() => history.push('/product/auto-loans')}>Learn More</LearnMore>
          </Box>
          <Box>
            <BoxTitle>Personal Finance</BoxTitle>
            <BoxDesc>
              All of the personal finance providers we’ve selected
              allow you to apply online and have fast approval times.
            </BoxDesc>
            <LearnMore onClick={() => history.push('/product/personal-finance')}>Learn More</LearnMore>
          </Box>
        </CategoryList>
      </Container>
    </Div>
  );
};

export default Products;

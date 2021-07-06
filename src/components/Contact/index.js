import {
  Box,
  containerStyles,
  Title,
  SubTitle,
  Ul,
  Li,
  Form,
  FormTitle,
  InputWrapper,
  Input,
  TextArea,
  Button,
} from './styles';
import Container from '../Container';

const Contact = () => (
  <Box>
    <Container costumeStyles={containerStyles}>
      <Title>This is example text</Title>
      <SubTitle>This is example text which will be replaced later</SubTitle>
      <Ul>
        <Li>Verylinx LTD</Li>
        <Li>VAT: GE812162613</Li>
        <Li>Adress: Vazha Phshavela Avenue, 36</Li>
      </Ul>
      <Form>
        <FormTitle>Get in contact with our data experts</FormTitle>
        <InputWrapper>
          <Input name="name" placeholder="Name (Required)" />
          <Input name="email" placeholder="Email (Required)" />
        </InputWrapper>
        <TextArea placeholder="Message (Required)" rows={6} />
        <Button onClick={(e) => e.preventDefault()}>Send</Button>
      </Form>
    </Container>
  </Box>

);

export default Contact;

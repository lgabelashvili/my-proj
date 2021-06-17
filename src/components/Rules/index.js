import {
  Div,
  containerStyles,
  Title,
  Desc,
  ContainerWrapper,
  SubTitle,
} from './styles';
import Container from '../Container';

const Rules = () => (
  <Div>
    <Container costumeStyles={containerStyles}>
      <ContainerWrapper>
        <Title>Privacy Policy</Title>
        <Desc>
          At Liberty Tips, accessible from libertytips.com,
          one of our main priorities is the privacy of our visitors.
          This Privacy Policy document contains types of information
          that is collected and recorded by Liberty Tips and how we use it.
        </Desc>
        <Desc>
          If you have additional questions or require more information
          about our Privacy Policy, do not hesitate to contact us.
        </Desc>
        <SubTitle>General Data Protection Regulation (GDPR)</SubTitle>
        <Desc>We are a Data Controller of your information.</Desc>
        <Desc>
          legal basis for collecting and using the personal information described in
          this Privacy Policy depends on the Personal Information we collect
          and the specific context in which we collect the information:
        </Desc>
        <Desc>needs to perform a contract with you</Desc>
        <Desc>You have given  permission to do so</Desc>
        <Desc>Processing your personal information is in  legitimate interests</Desc>
        <Desc>needs to comply with the law</Desc>
        <Desc>
          will retain your personal information only for as long as is necessary
          for the purposes set out in this Privacy Policy. We will retain and use your
          information to the extent necessary to comply with our legal obligations,
          resolve disputes, and enforce our policies.
        </Desc>
        <Desc>
          If you are a resident of the European Economic Area (EEA),
          you have certain data protection rights. If you wish to be
          informed what Personal Information we hold about
          you and if you want it to be removed from our systems, please contact us.
        </Desc>
        <Desc>In certain circumstances, you have the following data protection rights:</Desc>

        <Desc>
          The right to access, update or to delete the information we have on you.
          <br />
          The right of rectification.
          <br />
          The right to object.
          <br />
          The right of restriction.
          <br />
          The right to data portability
          <br />
          The right to withdraw consent
        </Desc>
      </ContainerWrapper>
    </Container>
  </Div>
);

export default Rules;

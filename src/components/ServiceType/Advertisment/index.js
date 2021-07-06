import { useParams } from 'react-router-dom';
import {
  Div,
  containerStyles,
  Title,
  Box,
  BoxTitle,
  Desc,
} from './styles';
import Container from '../../Container';
import { companyInfo } from '../../../helpers/companyInfo';

const Advertisment = () => {
  const { id } = useParams();

  const currentData = companyInfo.autoLoans.filter((item) => item.id === id)[0];

  return (
    (
      <Div>
        <Container costumeStyles={containerStyles}>
          <Title>
            THIS IS AN ADVERTISEMENT AND NOT AN ACTUAL NEWS ARTICLE,
            BLOG, OR CONSUMER PROTECTION UPDATE.
          </Title>
          <Box>
            <BoxTitle>APR RATE:</BoxTitle>
            <Desc>Average APR rates range from 3.9% to 24% depending on credit.</Desc>
          </Box>
          <Box>
            <BoxTitle>What are the average financial terms?</BoxTitle>
            <Desc>
              The duration of a loan will determine how long it will
              take you to pay off your financial contract.
              Generally, a lender will offer you a loan with a term of 36 to 84 months,
              which means that you will have three to six years
              to repay the price of your vehicle plus interest. Interest rates and terms offered may
              vary and are based on a number of factors,
              including your down payment and credit score.
            </Desc>
            <Desc>
              It is important to understand that the term of your financial contract
              also has a role in determining your interest rate and therefore,
              how much will be the amount of your monthly payment. For example,
              a typical 60-month loan will have a higher interest than a 36- to 48-month loan,
              but will come with a lower monthly payment. The APR range is 3.49 +% and
              the average interest rates are as follows:
            </Desc>
            <Desc>
              36 Months: 3.71%
              <br />
              48 Months: 3.81%
              <br />
              60 Months: 3.93%
              <br />
              72 Months: 3.78%
            </Desc>
          </Box>
          <Box>
            <BoxTitle>PHONE NUMBER:</BoxTitle>
            <Desc>
              To reach us by phone, please call
              {currentData?.contact?.phone}
            </Desc>
          </Box>
          <Box>
            <BoxTitle>EMAIL:</BoxTitle>
            <Desc>{currentData?.contact?.email}</Desc>
          </Box>
          <Box>
            <BoxTitle>ADDRESS:</BoxTitle>
            <Desc>{currentData?.contact?.address}</Desc>
            <Desc>
              If you do not agree to our terms and policies,
              then please leave this site immediately.
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              All trademarks, logos, and service marks (collectively the "Trademarks")
              displayed are registered and/or unregistered Trademarks of their respective owners.
            </Desc>
            <Desc>
              This site is not a part of the Facebook website or Facebook Inc.
              Additionally, this site is NOT endorsed by Facebook in any way.
              FACEBOOK is a trademark of FACEBOOK, Inc.
            </Desc>
            <Desc>
              The site is NOT affiliated with or endorsed by
              the United States government.
            </Desc>
          </Box>
        </Container>
      </Div>
    )
  );
};

export default Advertisment;

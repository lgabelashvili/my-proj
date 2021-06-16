import {
  Div,
} from './styles';

export const Container = ({ children, costumeStyles }) => (
  <Div costumeStyles={costumeStyles}>
    {children}
  </Div>
);

export default Container;

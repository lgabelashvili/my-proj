import {
  useLocation,
} from 'react-router-dom';
import { useLayoutEffect } from 'react';
import {
  Div,
} from './styles';

export const Container = ({ children, costumeStyles }) => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Div costumeStyles={costumeStyles}>
      {children}
    </Div>
  );
};

export default Container;

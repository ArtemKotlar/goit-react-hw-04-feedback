import PT from 'prop-types';
import { Wrapper } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      {children}
    </Wrapper>
  );
};

export default Section;

Section.propTypes = {
  title: PT.string,
  children: PT.node,
};

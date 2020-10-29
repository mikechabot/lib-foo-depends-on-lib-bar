import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FooProps {}

const StyledFoo = styled.div`
  color: pink;
`;

export const Foo = (props: FooProps) => {
  return (
    <StyledFoo>
      <h1>Welcome to foo!</h1>
    </StyledFoo>
  );
};

export default Foo;

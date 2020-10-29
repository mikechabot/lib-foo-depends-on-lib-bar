import React from 'react';

import styled from 'styled-components';
import {Bar} from "@my-test-org/bar";

/* eslint-disable-next-line */
export interface FooProps {}

const StyledFoo = styled.div`
  color: pink;
`;

export const Foo = (props: FooProps) => {
  return (
    <StyledFoo>
      <h1>Welcome to foo!</h1>
      <Bar />
    </StyledFoo>
  );
};

export default Foo;

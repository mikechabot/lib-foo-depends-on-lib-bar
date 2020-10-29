import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BarProps {}

const StyledBar = styled.div`
  color: pink;
`;

export const Bar = (props: BarProps) => {
  return (
    <StyledBar>
      <h1>Welcome to bar!</h1>
    </StyledBar>
  );
};

export default Bar;

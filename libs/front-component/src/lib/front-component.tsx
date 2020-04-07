import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FrontComponentProps {}

const StyledFrontComponent = styled.div`
  color: pink;
`;

export const FrontComponent = (props: FrontComponentProps) => {
  return (
    <StyledFrontComponent>
      <h1>Welcome to front-component component!</h1>
    </StyledFrontComponent>
  );
};

export default FrontComponent;

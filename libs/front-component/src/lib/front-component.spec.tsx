import React from 'react';
import { render } from '@testing-library/react';

import FrontComponent from './front-component';

describe(' FrontComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontComponent />);
    expect(baseElement).toBeTruthy();
  });
});

import React from 'react';
import { render } from '@testing-library/react';

import Bar from './Bar';

describe('Bar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Bar />);
    expect(baseElement).toBeTruthy();
  });
});

import React from 'react';
import { render } from 'react-testing-library';
import Image from './Image';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('<Image />', () => {
  // This test _should fail_, it's here to demonstrate what the CLI
  // output looks like when you have an a11y violation.
  test('should be accessible', async () => {
    const { container } = render(<Image src="my-image-path.png" />);
    const html = container.innerHTML;
    expect(await axe(html)).toHaveNoViolations();
  });
});

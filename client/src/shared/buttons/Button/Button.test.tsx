import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  test('Button with text', () => {
    render(<Button color="primary">button</Button>);
    expect(screen.getByText('button')).toBeInTheDocument();
  });
});

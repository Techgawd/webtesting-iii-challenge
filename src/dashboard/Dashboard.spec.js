import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react/cleanup-after-each';
import Dashboard from './Dashboard';
import renderer from 'react-test-renderer';

describe('<Dashboard />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

  describe('<Dashboard />', () => {
    it('button should display "Close Gate" when clicked', () => {
      const { getByText } = render(<Dashboard />);
  
      const closeGateBtn = getByText(/close gate/i)
      fireEvent.click(closeGateBtn);
      expect(getByText(/open gat/i)).toBeInTheDocument();
      
    });
  });
  
  describe('<Dashboard />', () => {
      it('closed should render when clicking close gate', () => {
        const { getByText } = render(<Dashboard />);
        const button = getByText(/close gate/i);
        fireEvent.click(button);
        const closedSign = getByText(/closed/i);
        expect(closedSign).toBeInTheDocument();
      });
    });
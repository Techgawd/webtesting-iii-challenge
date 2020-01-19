import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';
import { getByTestId } from '@testing-library/react';
// import renderer from 'react-test-renderer';

afterEach(rtl.cleanup);
it('renders without crashing', () => {
});

it('renders "display header', () => {
    const wrapper = rtl.render();
    const hasDisplayHeader = wrapper.queryByText(/this is the display component/i);
});
import {
  render,
  fireEvent,
  waitFor,
  screen,
  RenderResult,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../app';
import { renderWithMemoryHistory, renderWrapper } from '../helpers/testUtils';

describe('App', () => {
  it('render App', () => {
    const {asFragment}: RenderResult = render(<App />);

    // output comparison -> prevents regression
    expect(asFragment).toMatchSnapshot();
  });

  it('Loads and shows Go to Order Page button', async () => {

    renderWrapper(<App />);

    const buttonElement = screen.getByText(/Go to Order Page/);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.firstChild?.nodeValue).toEqual('Go to Order Page');
  });
});

/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import getSearchTracks from 'api/getSearchTracks';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from 'redux/store';
import Search from '.';

describe('Search function test', () => {
  test('Component should render', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Search />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('Fetch search result #1', async () => {
    const query = 'first track';
    const token = {
      token: 'aaaaa',
    };

    const response = await getSearchTracks(query, token);

    expect(response.length).toBe(1);
    expect(response[0].trackTitle).toBe('First Track');
  });

  test('Fetch search result #2', async () => {
    const query = 'second track';
    const token = {
      token: 'aaaaa',
    };

    const response = await getSearchTracks(query, token);

    expect(response.length).toBe(1);
    expect(response[0].trackTitle).toBe('Second Track');
  });

  test('search with input', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Search />
        </BrowserRouter>
      </Provider>
    );

    userEvent.type(screen.getByRole('textbox'), 'First track');
    expect(screen.getByRole('textbox')).toHaveValue('First track');

    expect(screen.getByRole('button')).toHaveTextContent('Search');
    userEvent.click(screen.getByRole('button'));
  });
});

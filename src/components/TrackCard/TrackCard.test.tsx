/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import TrackCard from '.';
import data from '../../api/mocks/singleSample';
import store from '../../services/store';

test('Render track component', () => {
  render(
    <Provider store={store}>
      <TrackCard
        uri={data.uri}
        imgUrl={data.album.images[0].url}
        trackTitle={data.name}
        artistName={data.artists[0].name}
        albumName={data.album.name}
      />
    </Provider>
  );
  expect(screen.getByText(data.name)).toBeInTheDocument();
  expect(screen.getByText(data.artists[0].name)).toBeInTheDocument();
  expect(screen.getByText(data.album.name)).toBeInTheDocument();
});

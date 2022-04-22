/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';

const track1 = {
  tracks: {
    items: [
      {
        id: '123',
        uri: 'spotify:123',
        name: 'First Track',
        album: {
          images: [
            {
              width: 300,
              url: 'https://wallpaper.dog/large/20534800.png',
            },
            {
              width: 600,
              url: 'https://www.google.com',
            },
            {
              width: 900,
              url: 'https://www.google.co.id',
            },
          ],
          name: 'First Album',
        },
        // eslint-disable-next-line camelcase
        duration_ms: 30000,
        artists: ['Hello', 'World'],
        // eslint-disable-next-line camelcase
        external_urls: {
          spotify: '',
        },
      },
    ],
  },
};

const track2 = {
  tracks: {
    items: [
      {
        id: '125',
        uri: 'spotify:125',
        name: 'Second Track',
        album: {
          images: [
            {
              width: 300,
              url: 'https://wallpaper.dog/large/20534800.png',
            },
            {
              width: 600,
              url: 'https://www.google.com',
            },
            {
              width: 900,
              url: 'https://www.google.co.id',
            },
          ],
          name: 'First Album',
        },
        // eslint-disable-next-line camelcase
        duration_ms: 35000,
        artists: ['Hello', 'World'],
        // eslint-disable-next-line camelcase
        external_urls: {
          spotify: '',
        },
      },
    ],
  },
};

const handlers = [
  rest.get(
    'https://api.spotify.com/v1/search?q=justin&type=track',
    (req, res, ctx) => {
      const q = req.url.searchParams.get('q');
      if (q === 'first track') {
        return res(ctx.status(200), ctx.json(track1));
      }
      return res(ctx.status(200), ctx.json(track2));
    }
  ),
];

export default handlers;

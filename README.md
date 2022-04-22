<h1 align="center">
  <a href="https://github.com/irfan44/generasi-gigih-homework">
    <!-- Please provide path to your logo here -->
    <img src="docs/images/logo.png" alt="Logo">
  </a>
</h1>

<div align="center">
  <br />
  <a href="https://generasi-gigih.irfannm.me"><strong>Visit Spotifie >></strong></a>
  <br />
</div>

<details open="open">
<summary>Table of Contents</summary>

- [About](#about)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Feedback](#feedback)

</details>

---

## About

Spotifie is a web application for creating a playlist based on the songs you've selected before. Spotifie implements the Spotify API and connected to your spotify account to search for tracks, create & see your playlist, add tracks to your playlist, etc. You can use Spotifie by clicking [here](https://generasi-gigih.irfannm.me)

(Do note that you will need my permission if you to use Spotifie via this link. It's recommended that you run Spotifie via your machine using your Spotify key).

### Features

1. Login with your spotify account
2. Show recommended tracks based on selected genres
3. Search for tracks
4. Create playlist
5. Add tracks to your playlist
6. See all of your playlist
7. See tracks inside of your playlist
8. See your account profile picture and display name
9. Open tracks & playlist in Spotify with one click

### Built With

1. [Create React App](https://create-react-app.dev/) to initialize the project.
2. Written in [Typescript](https://www.typescriptlang.org/)
3. [Tailwind CSS](https://tailwindcss.com/) for building UI
4. [React Redux](https://react-redux.js.org/) for state management
5. [React Router](https://reactrouter.com/) for routing
6. [Axios](https://github.com/axios/axios), for making API calls
7. [Jest](https://jestjs.io/), for testing
8. [MSW](https://mswjs.io/), for creating API mock
9. Deployed on [Vercel](https://vercel.com/)

### Technical Details

1. Use redux to store token, user profile, selected track URIs, and seleted tracks data.
2. Implements Spotify API for searching tracks, get recommended tracks, creating playlist, adding tracks to playlist, getting all of your playlist, getting all contents of your playlist, and get your Spotify profile data.
3. Use react router with private route for authentication verification.
4. Implements several types for typescript.
5. Use MSW for mocking API calls for search track.
6. Passing test for search track page using toBeInTheDocument & userEvent.

## Getting Started

### Prerequisites

1. Spotify account (Free/Premium)
2. Setting up Spotify Application in [Spotify Developer Dashboard ](https://developer.spotify.com/dashboard/applications)
3. NodeJS installed in your machine
4. Git

### Installation

1. Clone repo to your local machine. After it finished, open the folder and install project dependencies. You can do this from your command line/terminal :

```bash
# Clone this repository
$ git clone https://github.com/irfan44/generasi-gigih-homework.git

# Go to repository folder
$ cd generasi-gigih-homework

# Install dependencies
$ yarn
```

2. Insert your spotify key to `REACT_APP_SPOTIFY_CLIENT_ID` and redirect to `http://localhost:3000/callback/` for `REACT_APP_SPOTIFY_REDIRECT_URI` in `.env` file. Make sure that you've added the redirect URI to your application in Spotify Developer Dashboard

```bash
# .env example
REACT_APP_SPOTIFY_CLIENT_ID=9090asdasdczsda9a10ak12eqws12smx
REACT_APP_SPOTIFY_REDIRECT_URI=http://localhost:3000/callback/
```

3. Run the app

```bash
$ yarn start
```

4. Open `http://localhost:3000` to view the app in your browser

## Usage

### Creating and add tracks playlist

1. Login to Spotifie using your spotify account
2. In home page, you can select tracks that are recommended. Also you can see your account profile picture and display name in the top bar. You can click on the profile button to see your account profile in Spotify.
3. Selected tracks will appear in the selected track list bar. You can select multiple tracks and remove tracks accordingly using the trash button. In mobile view, you can access this bar by clicking on the menu located in the top bar.
4. In search page, you can search for tracks that you wanted to select. Selected track will also appear in the selected track list bar.
5. In create playlist page, you will see all of your selected tracks and you can input a name for your playlist. You can also add a description for your playlist. Note that you can only create playlist with at least one track and input atlest 10 digits for your playlist name.
6. In your playlist page, you can see all of your playlist and if you click on your playlist, you will see all of the tracks inside of your playlist in the playlist detail page.
7. In every track card and playlist details, you can see the Spotify logo. If you click on it, it will open the track or playlist in Spotify with one click.
8. If you finished creating playlist, you can click on the logout menu to go back to login page.

## Feedback

Reach out to the maintainer at one of the following places:

- [GitHub issues](https://github.com/irfan44/generasi-gigih-homework/issues/new)
- Contact options listed on [this GitHub profile](https://github.com/irfan44)

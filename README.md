<h1 align="center">
  <a href="https://github.com/irfan44/generasi-gigih-homework">
    <!-- Please provide path to your logo here -->
    <!-- <img src="docs/images/logo.svg" alt="Logo" width="100" height="100"> -->
    Spotifie
  </a>
</h1>

<!-- <div align="center">
  Spotifie
  <br />
  <a href="#about"><strong>Explore the screenshots »</strong></a>
  <br />
</div> -->

<details open="open">
<summary>Table of Contents</summary>

- [About](#about)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  <!-- - [Usage](#usage) -->
- [Feedback](#feedback)

</details>

---

## About

Spotifie is a web application for creating a playlist based on the songs you've selected before. Spotifie implements the Spotify API and connected to your spotify account to search for tracks, create & see your playlist, add tracks to your playlist, etc.

### Features

1. Login with your spotify account
2. Show recommended tracks based on selected genres
3. Search for tracks
4. Create playlist
5. Add tracks to your playlist
6. See all of your playlist
7. See contents of your playlist
8. See your account profile picture

<!-- <details>
<summary>Screenshots</summary>
<br>

> **[?]**
> Please provide your screenshots here.

|                               Home Page                               |                               Login Page                               |
| :-------------------------------------------------------------------: | :--------------------------------------------------------------------: |
| <img src="docs/images/screenshot.png" title="Home Page" width="100%"> | <img src="docs/images/screenshot.png" title="Login Page" width="100%"> |

</details> -->

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

2. Insert your spotify key to `REACT_APP_SPOTIFY_CLIENT_ID` and redirect to `http://localhost:3000/callback/` for `REACT_APP_SPOTIFY_REDIRECT_URI`. Make sure that you've added the redirect URI to your application in Spotify Developer Dashboard

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

<!-- ## Usage

> **[?]**
> How does one go about using it?
> Provide various use cases and code examples here. -->

## Feedback

Reach out to the maintainer at one of the following places:

- [GitHub issues](https://github.com/irfan44/generasi-gigih-homework/issues/new)
- Contact options listed on [this GitHub profile](https://github.com/irfan44)

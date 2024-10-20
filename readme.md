# Movies Recommendation System :movie_camera:

## Description :page_facing_up:

a back-end web application allowing users to get movies suggestion based on their preferred genres through restful apis. the app requests movies data through a <mark>third party API, TMDB</mark>. The application is built using **typescript, node.js, express, and mongodb**. The app also has its own **docker-compose** file for easy deployment. There is also **redis** integration for caching purposes.

## Key Features :pushpin:

- **User Authentication**: Allow users to sign up, log in, and manage their profiles securely.

- **User CRUD Operations**: Implement functionality for users to create, read, update, and delete accounts.

- **User WatchList, Preferred Genres, and Favorites**: Allow users to manage their watchlist, preferred genres, and favorite movies.

- **TMDB Integration**: Fetch, search, and get popular movies from TMDB movies database.

- **Caching**: Implement caching using Redis to store the most popular movies.

- **Get Recommendations**:star2:: Get movie recommendations based on user preferred genres.

## Technologies :computer:

**Backend**: Node.js with Express

**Database**: MongoDB

**Database Connection**: Mongoose

**Authentication**: Implement secure authentication using JWT token sent through cookies

**Caching**: Redis

**Deployment**: Docker through dockerfile and docker-compose

## Environment Variables :deciduous_tree:

The following variables are required to run the program.

- `PORT` : the port number for the server
- `DB_USER` : the username for the database
- `DB_PASSWORD` : the password for the database
- `DB_PORT` : the port number for the database
- `SECRET` : the secret key for the JWT token
- `API_KEY` :key: : the API key for TMDB

`DB_USER`, `DB_PORT`, and `DB_PASSWORD` can be obtained from your local configuration.
`SECRET` can be generated on your own choosing. Please carefully setting the port number when using docker. Lastly, `API_KEY` can be obtained by signing up for free account on [TMDB Website](https://developer.themoviedb.org/reference/intro/getting-started).

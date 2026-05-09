Check out live website at https://movie-finder-app-all-fiction.netlify.app/

# Movie Finder App

A modern web application to browse, search, and explore details about movies using The Movie Database (TMDB) API. Built with React and JavaScript, the app features multiple movie categories, dynamic search, and rich detail views.

## Features

- **Now Playing, Popular, Top Rated, Upcoming**: Browse the latest movies in each category, fetched in real-time via serverless functions.
- **Search**: Instantly search for movies by title. Results update dynamically with your query.
- **Detailed Movie Info**: Click any movie to view posters, synopsis, genres, ratings, votes, runtime, budget, revenue, release date, and IMDB code.
- **Responsive UI**: Clean, mobile-friendly layout with dark mode support.
- **Optimized Images**: Movie posters are served in multiple sizes for performance and quality.
- **Serverless Backend**: Uses Netlify Functions to proxy API requests, keeping API keys secure.

## Demo

<!--
Optionally, add a screenshot:
![App Screenshot](src/assets/picture/movie-finder.png)
-->

## How It Works

- The app fetches movie lists (`now_playing`, `popular`, `top_rated`, `upcoming`) and searches from TMDB API via secure serverless endpoints (`/.netlify/functions/movies`), never exposing your API key in client code.
- Clicking on a movie shows a detailed view with info pulled from TMDB.
- All major functionality is managed in React with hooks and modular components for maintainability.

## Tech Stack

- **Frontend**: React, JavaScript, HTML, CSS
- **Backend**: Netlify Functions (serverless), TMDB API
- **Styling**: Tailwind CSS (utility class usage is visible in components)
- **Routing**: React Router v6

## File Structure

- `src/api/movieApi.js`: Handles API calls to serverless endpoints for movies and search
- `netlify/functions/movies.js`: Netlify Function proxy for TMDB API
- `src/pages/`: Main page views for listing movies, searching, and detail display
- `src/components/`: UI elements like cards, headers, and footers

## Setup & Usage

1. **Clone the repository**
   ```bash
   git clone https://github.com/ziqkimi308/movie-finder-app.git
   cd movie-finder-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment**
   - Create a `.env` file in the repo root with your TMDB API key:
     ```
     API_KEY=your_tmdb_api_key_here
     ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## API Reference

All movie data comes from [The Movie Database (TMDB)](https://www.themoviedb.org/documentation/api).

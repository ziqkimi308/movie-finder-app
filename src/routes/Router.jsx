import { createBrowserRouter } from "react-router";
import App from "../App";
import PageNotFound from "../pages/PageNotFound";
import MovieList from "../pages/MovieList";
import MovieDetail from "../pages/MovieDetail";
import Search from "../pages/Search";
import {
	getNowPlaying,
	getPopular,
	getSearch,
	getTopRated,
	getUpcoming,
} from "../api/movieApi";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ index: true, element: <MovieList getMovie={getNowPlaying} /> },
			{ path: "movie/:id", element: <MovieDetail /> },
			{ path: "movies/popular", element: <MovieList getMovie={getPopular} /> },
			{ path: "movies/top", element: <MovieList getMovie={getTopRated} /> },
			{
				path: "movies/upcoming",
				element: <MovieList getMovie={getUpcoming} />,
			},
			{ path: "search", element: <Search getMovie={getSearch} /> },
			{ path: "*", element: <PageNotFound /> },
		],
	},
]);

export default router;

import { createBrowserRouter } from "react-router";
import App from "../App";
import PageNotFound from "../pages/PageNotFound";
import MovieList from "../pages/MovieList";
import MovieDetail from "../pages/MovieDetail";
import Search from "../pages/Search";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ index: true, element: <MovieList /> },
			{ path: "movie/:id", element: <MovieDetail /> },
			{ path: "movies/popular", element: <MovieList /> },
			{ path: "movies/top", element: <MovieList /> },
			{ path: "movies/upcoming", element: <MovieList /> },
			{ path: "search", element: <Search /> },
			{ path: "*", element: <PageNotFound /> },
		],
	},
]);

export default router;

import { useEffect, useState } from "react";
import { getSearch } from "../api/movieApi";
import { useSearchParams } from "react-router";
import Card from "../components/Card";

const Search = ({ getMovie = getSearch }) => {
	const [searchParams] = useSearchParams();
	const query = searchParams.get("query");
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		async function fetchMovie() {
			const data = await getMovie(query);
			setMovies(data);
		}
		fetchMovie();
	}, [getMovie, query]);

	return (
		<main>
			<section className="max-w-7xl mx-auto pt-7">
				<p className="text-3xl text-gray-700 dark:text-white">
					{movies.length === 0
						? `No result found for ${query}`
						: `Result for '${query}'`}
				</p>
			</section>
			<section className="max-w-7xl mx-auto py-7">
				<div className="flex justify-start flex-wrap">
					{movies.map((movie) => {
						return <Card key={movie.id} movie={movie} />;
					})}
				</div>
			</section>
		</main>
	);
};

export default Search;

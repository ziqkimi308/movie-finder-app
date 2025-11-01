import { useEffect, useState } from "react";
import Card from "../components/Card";
import { getNowPlaying } from "../api/movieApi";

const MovieList = ({ getMovie = getNowPlaying }) => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		async function fetchMovie() {
			const data = await getMovie();
			setMovies(data);
		}
		fetchMovie();
	}, [getMovie]);

	return (
		<main>
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

export default MovieList;

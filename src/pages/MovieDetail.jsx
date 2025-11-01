import { useEffect, useState } from "react";
import { getImageUrl, getMovieDetail } from "../api/movieApi";
import movieFinderImage from "../assets/picture/movie-finder.png";
import { useParams } from "react-router";

const MovieDetail = () => {
	const [movie, setMovie] = useState({});
	const { id } = useParams();

	useEffect(() => {
		async function fetchMovie() {
			const data = await getMovieDetail(id);
			setMovie(data);
		}
		fetchMovie();
	}, [id]);

	return (
		<section className="flex flex-col md:flex-row justify-center items-center md:items-start p-5 md:p-10 gap-8 md:gap-12 max-w-7xl mx-auto">
			{/* Poster Image */}
			<img
				className="rounded-lg h-[400px] md:h-[600px] w-full md:w-auto object-cover"
				src={
					movie.poster_path
						? getImageUrl(movie.poster_path, "original")
						: movieFinderImage
				}
				alt={movie.title}
			/>

			{/* Details Section */}
			<div className="flex flex-col gap-5 items-start w-full md:w-[60%] text-gray-900 dark:text-white">
				<h5 className="text-2xl md:text-3xl font-bold tracking-tight">
					{movie.title}
				</h5>

				<p className="text-gray-700 dark:text-gray-400 leading-relaxed">
					{movie.overview}
				</p>

				<ul className="flex flex-wrap gap-3">
					{movie.genres?.map((genre) => (
						<li
							key={genre.id}
							className="border border-black dark:border-gray-100 px-3 py-1 rounded-full text-sm md:text-base"
						>
							{genre.name}
						</li>
					))}
				</ul>

				<div className="space-y-2">
					<h3>
						⭐ {movie.vote_average} ({movie.vote_count} reviews)
					</h3>
					<h3>
						<span className="font-bold">Runtime:</span> {movie.runtime} min
					</h3>
					<h3>
						<span className="font-bold">Budget:</span> $
						{movie.budget?.toLocaleString()}
					</h3>
					<h3>
						<span className="font-bold">Revenue:</span> $
						{movie.revenue?.toLocaleString()}
					</h3>
					<h3>
						<span className="font-bold">Released Date:</span>{" "}
						{movie.release_date}
					</h3>
					<h3>
						<span className="font-bold">IMDB Code:</span> {movie.imdb_id}
					</h3>
				</div>
			</div>
		</section>
	);
};

export default MovieDetail;

import { Link } from "react-router";
import { getImageUrl } from "../api/movieApi";
import movieFinderImage from "../assets/picture/movie-finder.png";

const Card = ({ movie }) => {
	return (
		<div className="m-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
			<Link to={`/movie/${movie.id}`}>
				<img
					className={`rounded-t-lg ${
						!movie.poster_path ? "h-[575px] object-cover" : ""
					}`}
					src={
						movie.poster_path
							? getImageUrl(movie.poster_path, "original")
							: movieFinderImage
					}
					alt={movie.title}
				/>
			</Link>
			<div className="p-5">
				<Link to={`/movie/${movie.id}`}>
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{movie.title}
					</h5>
				</Link>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					{movie.overview}
				</p>
			</div>
		</div>
	);
};

export default Card;

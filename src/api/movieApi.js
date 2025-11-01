// Prepare proper Image path (unchanged)
export function getImageUrl(path, size = "w500") {
	if (!path) return "";
	return `https://image.tmdb.org/t/p/${size}${path}`;
}

// Fetch Now Playing
export async function getNowPlaying() {
	const res = await fetch("/.netlify/functions/movies?category=now_playing");
	const data = await res.json();
	return data.results;
}

// Fetch Popular
export async function getPopular() {
	const res = await fetch("/.netlify/functions/movies?category=popular");
	const data = await res.json();
	return data.results;
}

// Fetch Top Rated
export async function getTopRated() {
	const res = await fetch("/.netlify/functions/movies?category=top_rated");
	const data = await res.json();
	return data.results;
}

// Fetch Upcoming
export async function getUpcoming() {
	const res = await fetch("/.netlify/functions/movies?category=upcoming");
	const data = await res.json();
	return data.results;
}

// Fetch Search
export async function getSearch(movie_keyword) {
	const res = await fetch(`/.netlify/functions/movies?query=${encodeURIComponent(movie_keyword)}`);
	const data = await res.json();
	return data.results;
}

// Fetch Individual Movie by Id
export async function getMovieDetail(movie_id) {
	const res = await fetch(`/.netlify/functions/movies?movie_id=${movie_id}`);
	const data = await res.json();
	return data;
}
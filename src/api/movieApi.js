const BASE_URL = import.meta.env.VITE_BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY

// console.log("BASE_URL:", import.meta.env.VITE_BASE_URL);
// console.log("API_KEY:", import.meta.env.VITE_API_KEY);


// Fetch Now Playing
export async function getNowPlaying() {
	const response = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`);
	const data = await response.json();
	// console.log(data.results)

	return data.results
}

// Prepare proper Image path
export function getImageUrl(path, size = "w500") {
	if (!path) return ""
	// console.log(`https://image.tmdb.org/t/p/${size}${path}`)
	return `https://image.tmdb.org/t/p/${size}${path}`
}

// Fetch Popular
export async function getPopular() {
	const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
	const data = await response.json();
	// console.log(data.results)

	return data.results
}

// Fetch Top Rated
export async function getTopRated() {
	const response = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
	const data = await response.json();
	// console.log(data.results)

	return data.results
}

// Fetch Upcoming
export async function getUpcoming() {
	const response = await fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`);
	const data = await response.json();
	// console.log(data.results)

	return data.results
}

// Fetch Search
export async function getSearch(movie_keyword) {
	const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${movie_keyword}`);
	const data = await response.json();
	// console.log(data.results)

	return data.results
}

// Fetch Individual Movie by Id
export async function getMovieDetail(movie_id) {
	const response = await fetch(`${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}`);
	const data = await response.json();
	// console.log(data.results)

	return data
}
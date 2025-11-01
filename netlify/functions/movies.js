// /netlify/functions/movies.js
export async function handler(event) {
	const API_KEY = process.env.API_KEY; // private on Netlify
	const BASE_URL = "https://api.themoviedb.org/3";

	// get ?category or ?movie_id or ?query
	const { category, movie_id, query } = event.queryStringParameters || {};

	let endpoint = "";
	if (movie_id) endpoint = `/movie/${movie_id}`;
	else if (query) endpoint = `/search/movie?query=${encodeURIComponent(query)}`;
	else endpoint = `/movie/${category || "popular"}`;

	// build full TMDB URL
	const url = `${BASE_URL}${endpoint}${endpoint.includes("?") ? "&" : "?"}api_key=${API_KEY}`;

	try {
		const res = await fetch(url);
		const data = await res.json();
		return {
			statusCode: 200,
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		};
	} catch (err) {
		return { statusCode: 500, body: JSON.stringify({ error: "Server error" }) };
	}
}

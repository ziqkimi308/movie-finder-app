import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { DarkModeIcon, LightModeIconTwo } from "../assets/Icons";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [darkMode, setDarkMode] = useState(
		JSON.parse(localStorage.getItem("darkMode")) || false
	);
	const [searchTerm, setSearchTerm] = useState("");
	const navigate = useNavigate();

	const handleSearchSubmit = (event) => {
		event.preventDefault();
		if (searchTerm.trim()) {
			navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
			setSearchTerm("");
			setMenuOpen(false);
		}
	};

	useEffect(() => {
		localStorage.setItem("darkMode", JSON.stringify(darkMode));
		if (darkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [darkMode]);

	const toggleMenu = () => setMenuOpen((prev) => !prev);

	const activeClass =
		"font-bold text-2xl block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500";
	const inActiveClass =
		"block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

	return (
		<header>
			<nav className="w-full bg-white border-b border-gray-300 dark:bg-gray-900">
				<div className="flex flex-wrap items-center justify-between mx-auto p-4">
					<Link
						to="/"
						className="flex items-center space-x-3 rtl:space-x-reverse"
					>
						<img src="/logo.png" className="h-8" alt="Movie Finder Logo" />
						<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
							Movie Finder App
						</span>
					</Link>

					{/* Mobile Menu */}
					<div className="flex md:order-2">
						<button
							type="button"
							onClick={() => setDarkMode((prev) => !prev)}
							className="px-2.5"
						>
							{darkMode ? <LightModeIconTwo /> : <DarkModeIcon />}
						</button>
						<form
							onSubmit={handleSearchSubmit}
							className="relative hidden md:block"
						>
							<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
								<svg
									className="w-4 h-4 text-gray-500 dark:text-gray-400"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 20 20"
								>
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
									/>
								</svg>
								<span className="sr-only">Search icon</span>
							</div>
							<input
								type="text"
								id="search-navbar"
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Search..."
								autoComplete="off"
							/>
						</form>
						<button
							data-collapse-toggle="navbar-search"
							type="button"
							onClick={toggleMenu}
							className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
							aria-controls="navbar-search"
							aria-expanded="false"
						>
							<span className="sr-only">Open main menu</span>
							<svg
								className="w-5 h-5"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 17 14"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M1 1h15M1 7h15M1 13h15"
								/>
							</svg>
						</button>
					</div>
					<div
						className={`items-center justify-between ${
							menuOpen ? "" : "hidden"
						} w-full md:flex md:w-auto md:order-1`}
						id="navbar-search"
					>
						<form
							onSubmit={handleSearchSubmit}
							className="relative mt-3 md:hidden"
						>
							<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
								<svg
									className="w-4 h-4 text-gray-500 dark:text-gray-400"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 20 20"
								>
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
									/>
								</svg>
							</div>
							<input
								type="text"
								id="search-navbar"
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Search..."
								autoComplete="off"
							/>
						</form>
						<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
							<li>
								<NavLink
									to="/"
									className={({ isActive }) =>
										isActive ? activeClass : inActiveClass
									}
								>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/movies/popular"
									className={({ isActive }) =>
										isActive ? activeClass : inActiveClass
									}
								>
									Popular
								</NavLink>
							</li>
							<li>
								<NavLink
									to="movies/top"
									className={({ isActive }) =>
										isActive ? activeClass : inActiveClass
									}
								>
									Top Rated
								</NavLink>
							</li>
							<li>
								<NavLink
									to="movies/upcoming"
									className={({ isActive }) =>
										isActive ? activeClass : inActiveClass
									}
								>
									Upcoming
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;

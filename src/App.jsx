import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="min-h-screen flex flex-col dark:bg-slate-800">
			<Header />
			<main className="flex-grow">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

export default App;

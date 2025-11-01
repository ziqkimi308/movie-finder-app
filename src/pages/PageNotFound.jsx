import { Link } from "react-router";
import pageNotFoundImage from "../assets/picture/page-not-found.png";

const PageNotFound = () => {
	return (
		<div className="flex flex-col justify-around items-center p-5 gap-5">
			<img
				src={pageNotFoundImage}
				alt="page not found"
				className="h-[600px] w-[550px]"
			/>
			<Link
				to="/"
				type="button"
				className="bg-blue-500 w-[150px] rounded-3xl text-white font-bold py-3 text-center"
			>
				Return to Home
			</Link>
		</div>
	);
};

export default PageNotFound;

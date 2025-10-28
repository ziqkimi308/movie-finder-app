import clsx from "clsx"
import { twMerge } from "tailwind-merge"

const cn = (...classNames) => {
	return twMerge(clsx(...classNames))
}

export default cn;
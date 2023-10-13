import type { Metadata } from "next";
import { ReactNode } from "react";
import Navbar from "./component/Navbar";
import "./styles/globals.css";

export const metadata: Metadata = {
	title: "Tiling Windows",
	description: "An example of a tiled window layout in NextJS 13.",
};

const RootLayout = ({ children }: { children: ReactNode }): JSX.Element => (
	<html lang="en">
		<body>
			<Navbar />
			{children}
		</body>
	</html>
);
export default RootLayout;

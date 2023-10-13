import Image from "next/image";

const Navbar = (): JSX.Element => (
	<nav className="flex justify-between items-center bg-zinc-900/80 h-14 px-5 py-2">
		{/* Title */}
		<h1 className="text-xl font-black pointer-events-none">Tiling Windows</h1>

		{/* GitHub */}
		<a
			className="px-2 py-1.5 rounded-2xl bg-zinc-700/50 hover:opacity-80 transform-gpu transition-all"
			href="https://github.com/Rainnny7/tiling-windows"
		>
			<Image
				src="github-mark-white.svg"
				alt="GitHub Logo"
				width={28}
				height={28}
			/>
		</a>
	</nav>
);
export default Navbar;

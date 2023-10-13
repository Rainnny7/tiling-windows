"use client";

import { Mosaic, MosaicWindow } from "react-mosaic-component";
import "../styles/mosaic.css";
import ActionsWindow from "./windows/ActionsWindow";
import ChatWindow from "./windows/ChatWindow";
import VideoWindow from "./windows/VideoWindow";

const windows = {
	video: {
		title: "VIDEO PLAYER",
		jsx: <VideoWindow />,
	},
	actions: {
		title: "ACTIONS",
		jsx: <ActionsWindow />,
	},
	chat: {
		title: "CHAT",
		jsx: <ChatWindow />,
	},
};

const TiledWindows = () => (
	<Mosaic<string>
		initialValue={{
			direction: "row",
			first: {
				direction: "column",
				first: "video",
				second: "actions",
			},
			second: "chat",
			splitPercentage: 65,
		}}
		renderTile={(id, path) => {
			const window = windows[id];
			return (
				<MosaicWindow<string> path={path} title={window?.title}>
					{window?.jsx}
				</MosaicWindow>
			);
		}}
	/>
);
export default TiledWindows;

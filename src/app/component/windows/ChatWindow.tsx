const ChatWindow = () => (
	<div className="flex flex-col p-3">
		{new Array(30).fill(0).map((_, i) => (
			<div key={i}>
				<span className="text-red-600">Rainnny</span>
				<span className="text-zinc-600">: </span>
				<span className="text-zinc-300">Hi</span>
			</div>
		))}
	</div>
);
export default ChatWindow;

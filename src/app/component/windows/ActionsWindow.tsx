const ActionsWindow = () => {
	const actions: string[] = [
		"Magna do ad elit laboris irure velit consequat veniam veniam deserunt.",
		"Nulla non et pariatur exercitation aliqua nisi anim elit in aliquip.",
		"Irure ipsum sunt exercitation ad cupidatat nulla excepteur laborum.",
		"Excepteur consectetur proident ad nostrud.",
		"Exercitation consequat enim voluptate laborum.",
	]; // Dummy actions
	return (
		<div className="flex flex-col gap-3 p-3">
			<h1 className="text-sm font-semibold">{actions.length} Actions</h1>
			<div className="flex flex-col gap-1.5 divide-y divide-zinc-700 pl-3.5">
				{actions.map((action, i) => (
					<div key={i}>
						<span>* </span>
						<span>{action}</span>
					</div>
				))}
			</div>
		</div>
	);
};
export default ActionsWindow;

import "./example.css";

function key(val: string) {
	let el;
	if (val == "space") el = <button className="key keyspace">{val}</button>;
	else if (["123", "delete"].includes(val)) el = <button className="key key2">{val}</button>;
	else el = <button className="key">{val}</button>;
	return el;
}

function phone() {
	const keys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "=<", "C", "V", "B", "N", "M", "⌫", "123", "space", "delete"];

	const result: Array<React.JSX.Element> = [];

	keys.forEach((k: string) => {
		result.push(key(k));
	});

	return (
		<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
			<div style={{ width: "80%", height: "fit-content", padding: "10px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
				<p>18:00</p>
				<p className="battery">100</p>
			</div>
			<div className="app">
				<div>
					<div className="appPfp bold">Me</div>
					<div className="appText">What is the Wind speed in london today?</div>
				</div>
				<div className="appReply">
					<div className="appPfp neuroPfp bold">Neuro</div>
					<div className="appText" style={{ color: "white", backgroundColor: "#2b2b2b" }}>
						Today in London, the wind is blowing at a gentle speed of around 6 mph (10 km/h) from the east-northeast. The weather is generally calm with partly cloudy skies, and the light breeze is expected to remain steady throughout the day.
					</div>
				</div>
				<hr style={{ width: "100%", position: "relative", right: 10, backgroundColor: "var(--background)" }} />
				<div style={{ width: "100%", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
					<div className="appInput br">
						Message <div>+</div>
					</div>
					<div className="appSubmit"></div>
				</div>
			</div>
			<div className="keyboard">{...result}</div>
		</div>
	);
}

function Example() {
	return (
		<div className="example" style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", height: "800px" }}>
			<div className="phoneContainer">{phone()}</div>
			<div className="bold" style={{ fontSize: 40, width: "45%", textAlign: "center" }}>
				Save time and get more done with our intelligent chatbot.
			</div>
		</div>
	);
}

export default Example;

import Theme from "./theme";
import "./loading.css";

function Loading() {
	let i = 0;

	return (
		<>
			<Theme visibility={false} />
			<div className={`loadContainer`}>
				<div className="loader">
					<div style={{ animation: `load 1s ease ${i++ * 100}ms infinite alternate` }} className="dot"></div>
					<div style={{ animation: `load 1s ease ${i++ * 100}ms infinite alternate` }} className="dot"></div>
					<div style={{ animation: `load 1s ease ${i++ * 100}ms infinite alternate` }} className="dot"></div>
					<div style={{ animation: `load 1s ease ${i++ * 100}ms infinite alternate` }} className="dot"></div>
					<div style={{ animation: `load 1s ease ${i++ * 100}ms infinite alternate` }} className="dot"></div>
				</div>
			</div>
		</>
	);
}

export default Loading;

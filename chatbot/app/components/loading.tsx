import Theme from "./theme";
import "./loading.css";
import { useRef } from "react";

function Loading(loaded: boolean) {
	const cont = useRef<HTMLDivElement>(null);

	if (loaded && cont.current) cont.current.style.display = "none";

	let i = 0;

	return (
		<>
			<Theme visibility={false} />
			<div ref={cont} className={`loadContainer ${loaded ? "active" : ""}`}>
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

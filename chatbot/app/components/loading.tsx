import Theme from "./theme";
import "./loading.css";
import { useEffect } from "react";

let animation = false;

function StartThinking() {
	useEffect(() => {
		const dotsContainer = document.querySelector(".loader");

		if (!dotsContainer || animation) return;
		animation = true;

		for (let i = 0; i < 8; i++) {
			const dot = document.createElement("div");

			dot.classList.add("dot");

			dot.style.animation = `load 1s ease ${i * 100}ms infinite alternate`;

			dotsContainer.appendChild(dot);
		}
		document.querySelector(".container")?.appendChild(dotsContainer);
	});
}

// function stopThinking() {
// 	const dots = document.querySelector(".loader");
// 	if (dots) dots?.parentElement?.removeChild(dots);

// 	return null;
// }

function Loading() {
	StartThinking();
	return (
		<>
			{/* <Theme {visibility:true} /> */}
			<Theme visibility={false} />
			<div style={{ position: "fixed", left: 0, top: 0, width: "100vw", height: "100vh", backgroundColor: "var(--background)", display: "flex", justifyContent: "center", alignItems: "center" }}>
				<div className="loader"></div>
			</div>
		</>
	);
}

export default Loading;

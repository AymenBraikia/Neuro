"use client";
import "./introduction.css";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

function Introduction() {
	const [counter, updateCounter] = useState(0);

	const router = useRouter();

	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const intervalId = setInterval(() => {
			if (counter > 3) {
				updateCounter(0);
			} else {
				updateCounter(counter + 1);
			}

			if (ref.current) ref.current.style.top = 4 - 50 * counter + "px";
		}, 1500);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<>
			<h1 className="welcomeMessage">
				AI-Powered Chat Bot To Help You
				<div ref={ref} style={{ position: "absolute", right: 0, top: 4, transition: "var(--transition)" }}>
					<div className="word">Search</div>
					<div className="word">Code</div>
					<div className="word">Browse</div>
					<div className="word">Think</div>
					<div className="word">Solve</div>
				</div>
			</h1>
			<p className="mrt50" style={{ fontSize: 20, fontWeight: 400 }}>
				Save Your Time By With Our <span style={{ textDecoration: "underline" }}>AI-Model</span>
			</p>
			<div
				onClick={() => {
					router.push("../chat");
				}}
				data-n={"GET STARTED"}
				className="btn bgb br bold mrt100"
			>
				GET STARTED
			</div>
		</>
	);
}

export default Introduction;

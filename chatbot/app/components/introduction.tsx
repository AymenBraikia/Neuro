"use client";
import "./introduction.css";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

let counter = 0;

function Introduction() {
	const router = useRouter();

	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const intervalId = setInterval(() => {
			if (counter > 3) counter = 0;
			else counter++;

			if (ref.current) ref.current.style.top = 4 - 50 * counter + "px";
		}, 1500);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<>
			<h1 className="welcomeMessage">Research Powered By AI</h1>
			<p className="mrt50" style={{ fontSize: 22, fontWeight: 400, width: "720px", textAlign: "center" }}>
				Get comprehensive, accurate research in seconds. Our AI assistant helps you <span style={{ textDecoration: "underline" }}>find, analyze, and summarize</span> information from across the web.
			</p>
			<div className="mrt100" style={{ display: "flex", justifyContent: "center", alignItems: "center", columnGap: 50 }}>
				<div
					onClick={() => {
						router.push("../chat");
					}}
					data-n={"GET STARTED"}
					className="btn bgw br bold"
					style={{ border: "unset", boxShadow: "0px 4px 10px -7px black", padding: "13px 23px" }}
					>
					GET STARTED
				</div>
				<div
					onClick={() => {
						router.push("../chat");
					}}
					style={{ border: "1px solid black", boxShadow: "0px 4px 10px -7px black", padding: "13px 23px" }}
					data-n={"LEARN MORE"}
					className="btn bgb br bold learn"
				>
					LEARN MORE
				</div>
			</div>
		</>
	);
}

export default Introduction;

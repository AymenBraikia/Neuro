"use client";
import "./introduction.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function Introduction() {
	const router = useRouter();

	useEffect(() => {
		document.querySelectorAll(".shadowAnimation").forEach((el) => {
			el.classList.add("active");
		});
	}, []);

	return (
		<>
			<h1 className="welcomeMessage shadowAnimation">Research Powered By AI</h1>
			<p className="mrt50 shadowAnimation" style={{ fontSize: 22, fontWeight: 400, width: "720px", textAlign: "center",position:"relative" }}>
				Get comprehensive, accurate research in seconds. Our AI assistant helps you <span style={{ textDecoration: "underline" }}>find, analyze, and summarize</span> information from across the web.
			</p>
			<div className="mrt100" style={{ display: "flex", justifyContent: "center", alignItems: "center", columnGap: 50 }}>
				<div
					onClick={() => {
						router.push("../chat");
					}}
					data-n={"GET STARTED"}
					className="btn bgw br bold"
					style={{ border: "unset", boxShadow: "0px 4px 10px -7px var(--foreground)", padding: "13px 23px" }}
				>
					GET STARTED
				</div>
				<div
					onClick={() => {
						router.push("../chat");
					}}
					style={{ border: "1px solid var(--foreground)", boxShadow: "0px 4px 10px -7px var(--foreground)", padding: "13px 23px" }}
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

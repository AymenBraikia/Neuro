"use client";
import "./part1.css";
import { useRef, useEffect } from "react";

function Part1() {
	const container = useRef(null);
	const step1 = useRef(null);
	const step2 = useRef(null);
	const step3 = useRef(null);
	const step4 = useRef(null);

	useEffect(() => {
		document.addEventListener("scroll", () => {
			if (scrollY >= 1572) {
				step1.current.classList.add("active");
				container.current.classList.add("active");
			} else {
				step1.current.classList.remove("active");
				container.current.classList.remove("active");
			}

			if (scrollY > 1700) step2.current.classList.add("active");
			else step2.current.classList.remove("active");

			if (scrollY > 1900) step3.current.classList.add("active");
			else step3.current.classList.remove("active");

			if (scrollY > 2100) step4.current.classList.add("active");
			else step4.current.classList.remove("active");
			if (scrollY > 2200) container.current.classList.add("active2");
			else container.current.classList.remove("active2");
		});
	}, []);

	return (
		<div ref={container} className="part1 mrt200">
			<h1 style={{ fontSize: 50, backgroundClip: "text", color: "transparent", backgroundImage: "var(--gradient)" }}>How does it work?</h1>
			<div className="steps">
				<div ref={step1} className="step">
					<h2 className="stepTitle">Create an Account</h2>
					<div className="stepDescription">Begin by signing up to access our intelligent research platform. A quick and simple registration gives you full access to the AI-powered experience.</div>
				</div>
				<div ref={step2} className="step">
					<h2 className="stepTitle">Submit Your Prompt</h2>
					<div className="stepDescription">Enter a detailed prompt describing the information or assistance you’re seeking. The more specific your input, the more tailored and relevant the output will be.</div>
				</div>
				<div ref={step3} className="step">
					<h2 className="stepTitle">AI-Powered Web Research</h2>
					<div className="stepDescription">Once you submit your request, our advanced AI instantly conducts real-time web research, analyzing trusted sources to gather accurate, high-quality data related to your query.</div>
				</div>
				<div ref={step4} className="step">
					<h2 className="stepTitle">Curated Results & Summary</h2>
					<div className="stepDescription">After collecting the data, the AI carefully filters out irrelevant content, organizes key insights, and delivers a concise, well-structured response designed for clarity and usefulness.</div>
				</div>
			</div>
		</div>
	);
}

export default Part1;

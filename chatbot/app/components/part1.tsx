"use client";
// import send from "../../public/send.svg";
// import join from "../../public/join.svg";
// import summary from "../../public/summary.svg";
// import web from "../../public/web-svgrepo-com.svg";

// import Image from "next/image";

import "./part1.css";
import { useRef, useEffect } from "react";

function Web() {
	return (
		<svg viewBox="0 0 24 24" stroke="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M9.83824 18.4467C10.0103 18.7692 10.1826 19.0598 10.3473 19.3173C8.59745 18.9238 7.07906 17.9187 6.02838 16.5383C6.72181 16.1478 7.60995 15.743 8.67766 15.4468C8.98112 16.637 9.40924 17.6423 9.83824 18.4467ZM11.1618 17.7408C10.7891 17.0421 10.4156 16.1695 10.1465 15.1356C10.7258 15.0496 11.3442 15 12.0001 15C12.6559 15 13.2743 15.0496 13.8535 15.1355C13.5844 16.1695 13.2109 17.0421 12.8382 17.7408C12.5394 18.3011 12.2417 18.7484 12 19.0757C11.7583 18.7484 11.4606 18.3011 11.1618 17.7408ZM9.75 12C9.75 12.5841 9.7893 13.1385 9.8586 13.6619C10.5269 13.5594 11.2414 13.5 12.0001 13.5C12.7587 13.5 13.4732 13.5593 14.1414 13.6619C14.2107 13.1384 14.25 12.5841 14.25 12C14.25 11.4159 14.2107 10.8616 14.1414 10.3381C13.4732 10.4406 12.7587 10.5 12.0001 10.5C11.2414 10.5 10.5269 10.4406 9.8586 10.3381C9.7893 10.8615 9.75 11.4159 9.75 12ZM8.38688 10.0288C8.29977 10.6478 8.25 11.3054 8.25 12C8.25 12.6946 8.29977 13.3522 8.38688 13.9712C7.11338 14.3131 6.05882 14.7952 5.24324 15.2591C4.76698 14.2736 4.5 13.168 4.5 12C4.5 10.832 4.76698 9.72644 5.24323 8.74088C6.05872 9.20472 7.1133 9.68686 8.38688 10.0288ZM10.1465 8.86445C10.7258 8.95042 11.3442 9 12.0001 9C12.6559 9 13.2743 8.95043 13.8535 8.86447C13.5844 7.83055 13.2109 6.95793 12.8382 6.2592C12.5394 5.69894 12.2417 5.25156 12 4.92432C11.7583 5.25156 11.4606 5.69894 11.1618 6.25918C10.7891 6.95791 10.4156 7.83053 10.1465 8.86445ZM15.6131 10.0289C15.7002 10.6479 15.75 11.3055 15.75 12C15.75 12.6946 15.7002 13.3521 15.6131 13.9711C16.8866 14.3131 17.9412 14.7952 18.7568 15.2591C19.233 14.2735 19.5 13.1679 19.5 12C19.5 10.8321 19.233 9.72647 18.7568 8.74093C17.9413 9.20477 16.8867 9.6869 15.6131 10.0289ZM17.9716 7.46178C17.2781 7.85231 16.39 8.25705 15.3224 8.55328C15.0189 7.36304 14.5908 6.35769 14.1618 5.55332C13.9897 5.23077 13.8174 4.94025 13.6527 4.6827C15.4026 5.07623 16.921 6.08136 17.9716 7.46178ZM8.67765 8.55325C7.61001 8.25701 6.7219 7.85227 6.02839 7.46173C7.07906 6.08134 8.59745 5.07623 10.3472 4.6827C10.1826 4.94025 10.0103 5.23076 9.83823 5.5533C9.40924 6.35767 8.98112 7.36301 8.67765 8.55325ZM15.3224 15.4467C15.0189 16.637 14.5908 17.6423 14.1618 18.4467C13.9897 18.7692 13.8174 19.0598 13.6527 19.3173C15.4026 18.9238 16.921 17.9186 17.9717 16.5382C17.2782 16.1477 16.3901 15.743 15.3224 15.4467ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
			/>
		</svg>
	);
}
function Summary() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list-filter text-accent-400">
			<path d="M3 6h18"></path>
			<path d="M7 12h10"></path>
			<path d="M10 18h4"></path>
		</svg>
	);
}
function Send() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send-horizontal text-secondary-400">
			<path d="m3 3 3 9-3 9 19-9Z"></path>
			<path d="M6 12h16"></path>
		</svg>
	);
}
function Join() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-plus text-primary-400">
			<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
			<circle cx="9" cy="7" r="4"></circle>
			<line x1="19" x2="19" y1="8" y2="14"></line>
			<line x1="22" x2="16" y1="11" y2="11"></line>
		</svg>
	);
}

function Part1() {
	const container = useRef<HTMLDivElement>(null);
	const step1 = useRef<HTMLDivElement>(null);
	const step2 = useRef<HTMLDivElement>(null);
	const step3 = useRef<HTMLDivElement>(null);
	const step4 = useRef<HTMLDivElement>(null);

	useEffect(() => {
		document.addEventListener("scroll", () => {
			if (!step1.current || !container.current || !step2.current || !step3.current || !step4.current) return;
			if (step1.current.getClientRects()[0].y < screen.availHeight - 200) {
				step1.current.classList.add("active");
				let i = 1;
				setTimeout(() => step2.current?.classList.add("active"), i++ * 300);
				setTimeout(() => step3.current?.classList.add("active"), i++ * 300);
				setTimeout(() => step4.current?.classList.add("active"), i++ * 300);
			} else {
				step1.current.classList.remove("active");
				let i = 1;
				setTimeout(() => step2.current?.classList.remove("active"), i++ * 300);
				setTimeout(() => step3.current?.classList.remove("active"), i++ * 300);
				setTimeout(() => step4.current?.classList.remove("active"), i++ * 300);
			}
		});
	}, []);

	return (
		<div ref={container} className="part1">
			<h1 style={{ fontSize: 50 }}>How does it work?</h1>
			<p style={{ width: 570, fontSize: 18, textAlign: "center" }}>Our platform simplifies complex research tasks using advanced AI technology. Follow these steps to get started.</p>
			<div className="steps">
				<div ref={step1} className="step">
					<div className="stepIcon">{Join()}</div>
					<h2 className="stepTitle">Create an Account</h2>
					<div className="stepDescription">Begin by signing up to access our intelligent research platform. A quick and simple registration gives you full access to the AI-powered experience.</div>
				</div>
				<div ref={step2} className="step">
					<div className="stepIcon">{Send()}</div>
					<h2 className="stepTitle">Submit Your Prompt</h2>
					<div className="stepDescription">Enter a detailed prompt describing the information or assistance you’re seeking. The more specific your input, the more tailored and relevant the output will be.</div>
				</div>
				<div ref={step3} className="step">
					<div className="stepIcon">{Web()}</div>
					<h2 className="stepTitle">AI-Powered Web Research</h2>
					<div className="stepDescription">Once you submit your request, our advanced AI instantly conducts real-time web research, analyzing trusted sources to gather accurate, high-quality data related to your query.</div>
				</div>
				<div ref={step4} className="step">
					<div className="stepIcon">{Summary()}</div>
					<h2 className="stepTitle">Curated Results & Summary</h2>
					<div className="stepDescription">After collecting the data, the AI carefully filters out irrelevant content, organizes key insights, and delivers a concise, well-structured response designed for clarity and usefulness.</div>
				</div>
			</div>
		</div>
	);
}

export default Part1;

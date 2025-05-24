"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import "./part2.css";

function Message() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square h-6 w-6 text-primary">
			<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
		</svg>
	);
}
function Time() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock h-6 w-6 text-primary">
			<circle cx="12" cy="12" r="10"></circle>
			<polyline points="12 6 12 12 16 14"></polyline>
		</svg>
	);
}
function Person() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-person-standing h-6 w-6 text-primary">
			<circle cx="12" cy="5" r="1"></circle>
			<path d="m9 20 3-6 3 6"></path>
			<path d="m6 8 6 2 6-2"></path>
			<path d="M12 10v4"></path>
		</svg>
	);
}
function Speed() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap h-6 w-6 text-primary">
			<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
		</svg>
	);
}
function Learning() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap h-6 w-6 text-primary">
			<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
			<path d="M22 10v6"></path>
			<path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
		</svg>
	);
}
function Magic() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles h-6 w-6 text-primary">
			<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
			<path d="M20 3v4"></path>
			<path d="M22 5h-4"></path>
			<path d="M4 17v2"></path>
			<path d="M5 18H3"></path>
		</svg>
	);
}
function Bulb() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb h-6 w-6 text-primary">
			<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
			<path d="M9 18h6"></path>
			<path d="M10 22h4"></path>
		</svg>
	);
}

function Part2() {
	const router = useRouter();

	useEffect(() => {
		const cd = 300;
		document.addEventListener("scroll", () => {
			if (scrollY >= 2200 && !document.querySelector(".reason")?.classList.contains("active")) {
				document.querySelectorAll(".reason").forEach((el, i) => setTimeout(() => el.classList.add("active"), cd * i));
			} else if (scrollY < 2200 && document.querySelector(".reason")?.classList.contains("active")) document.querySelectorAll(".reason").forEach((el) => el.classList.remove("active"));
		});
	}, []);

	return (
		<div className="part2" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "column", position: "relative", rowGap: 50 }}>
			<h1 style={{ fontSize: 50 }}>Why Choose Neuro?</h1>
			<p style={{ fontSize: 20, width: 650, textAlign: "center" }}>Our AI assistant is designed to make your life easier and more productive.</p>
			<div className="reasons">
				<div className="reason">
					{<div className="reasonIcon">{Message()}</div>}
					<h2 className="reasonTitle">Instant Information and Answers</h2>
					<p className="reasonDescription">Get quick responses to your questions without having to search through websites or documents.</p>
				</div>
				<div className="reason">
					{<div className="reasonIcon">{Time()}</div>}
					<h2 className="reasonTitle">24/7 Availability</h2>
					<p className="reasonDescription"> Access assistance anytime, day or night.</p>
				</div>
				<div className="reason">
					{<div className="reasonIcon">{Person()}</div>}
					<h2 className="reasonTitle">Task Automation</h2>
					<p className="reasonDescription">Automate repetitive tasks, such as setting reminders, scheduling appointments, or drafting emails.</p>
				</div>
				<div className="reason">
					{<div className="reasonIcon">{Speed()}</div>}
					<h2 className="reasonTitle">Personalized Assistance</h2>
					<p className="reasonDescription">Receive tailored responses and support based on your specific needs and preferences.</p>
				</div>
				<div className="reason">
					{<div className="reasonIcon">{Learning()}</div>}
					<h2 className="reasonTitle">Learning and Education</h2>
					<p className="reasonDescription">Explore new topics, get explanations, and receive guidance on a wide range of subjects.</p>
				</div>
				<div className="reason">
					{<div className="reasonIcon">{Magic()}</div>}
					<h2 className="reasonTitle">Creative Content Generation</h2>
					<p className="reasonDescription">Generate different creative text formats, like poems, code, scripts, musical pieces, email, letters, etc.</p>
				</div>
				<div className="reason">
					{<div className="reasonIcon">{Bulb()}</div>}
					<h2 className="reasonTitle">Brainstorming and Idea Generation</h2>
					<p className="reasonDescription">Get help with brainstorming, problem-solving, and exploring different perspectives.</p>
				</div>
			</div>
			<div
				onClick={() => {
					router.push("../chat");
				}}
				className="tryNow bgw br bold btn"
			>
				Try Now
			</div>
		</div>
	);
}

export default Part2;

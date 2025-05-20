"use client";
import "./part2.css";

function Part2() {
	return (
		<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "column", position: "relative", top: 700, rowGap: 50 }}>
			<h1 style={{ textDecoration: "underline", fontSize: 50 }}>Why Neuro?</h1>
			<div className="reasons">
				<div className="reason">
					<h2 className="reasonTitle">Instant Information and Answers</h2>
					<p className="reasonDescription">Get quick responses to your questions without having to search through websites or documents.</p>
				</div>
				<div className="reason">
					<h2 className="reasonTitle">24/7 Availability</h2>
					<p className="reasonDescription"> Access assistance anytime, day or night.</p>
				</div>
				<div className="reason">
					<h2 className="reasonTitle">Task Automation</h2>
					<p className="reasonDescription">Automate repetitive tasks, such as setting reminders, scheduling appointments, or drafting emails.</p>
				</div>
				<div className="reason">
					<h2 className="reasonTitle">Personalized Assistance</h2>
					<p className="reasonDescription">Receive tailored responses and support based on your specific needs and preferences.</p>
				</div>
				<div className="reason">
					<h2 className="reasonTitle">Learning and Education</h2>
					<p className="reasonDescription">Explore new topics, get explanations, and receive guidance on a wide range of subjects.</p>
				</div>
				<div className="reason">
					<h2 className="reasonTitle">Creative Content Generation</h2>
					<p className="reasonDescription">Generate different creative text formats, like poems, code, scripts, musical pieces, email, letters, etc.</p>
				</div>
				<div className="reason">
					<h2 className="reasonTitle">Brainstorming and Idea Generation</h2>
					<p className="reasonDescription">Get help with brainstorming, problem-solving, and exploring different perspectives.</p>
				</div>
				<div className="reason">
					<h2 className="reasonTitle">Entertainment</h2>
					<p className="reasonDescription">Engage in conversations, play games, or get recommendations for movies, music, and books.</p>
				</div>
				<div className="reason">
					<h2 className="reasonTitle">Multilingual Support</h2>
					<p className="reasonDescription">Communicate in different languages and get translations.</p>
				</div>
			</div>
			<div className="tryNow br bold btn">Try Now</div>
		</div>
	);
}

export default Part2;

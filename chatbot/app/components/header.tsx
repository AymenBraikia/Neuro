"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import "./header.css";
import "./theme.css";
import Theme from "./theme";







function getCookie(name: string): string | null {
	const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
	return match ? match[2] : null;
}

function Header() {
	const router = useRouter();
	const scrollProgress = useRef<HTMLDivElement>(null);
	const header = useRef<HTMLDivElement>(null);

	const [username, setUsername] = useState<string | null>(null);

	useEffect(() => {
		const name = getCookie("username");
		setUsername(name);

		const handleScroll = () => {
			if (scrollY > 50) header.current?.classList.add("active");
			else header.current?.classList.remove("active");

			const scrollTop = scrollY;
			const docHeight = document.documentElement.scrollHeight - innerHeight;
			const scrollPercent = (scrollTop / docHeight) * 100;
			if (scrollProgress.current) scrollProgress.current.style.width = scrollPercent + "%";
		};

		document.addEventListener("scroll", handleScroll);
		return () => document.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header ref={header}>
			<h1 style={{ position: "relative", left: "10%" }}>Neuro</h1>

			<nav className="navbar">
				<div className="section">Contact</div>
				<div className="section">Pricing</div>
				<div className="section">About Us</div>

				{!username ? (
					<>
						<div onClick={() => router.push("/chat")} data-n="Get Started" className="btn br bgb">
							Get Started
						</div>
						<div className="btn br bgw" onClick={() => router.push("/signin")}>
							Log In
						</div>
					</>
				) : (
					<div className="profile">
						<h3 className="username">{username}</h3>
						<Pfp />
					</div>
				)}

				<Theme visibility={true} />
			</nav>

			<div ref={scrollProgress} className="scrollProgress"></div>
		</header>
	);
}

function Pfp() {
	return (
		<svg width={30} height={30} viewBox="0 0 24 24" fill="none">
			<path d="M12 1C8.96243 1 6.5 3.46243 6.5 6.5C6.5 9.53757 8.96243 12 12 12C15.0376 12 17.5 9.53757 17.5 6.5C17.5 3.46243 15.0376 1 12 1Z" fill="currentColor" />
			<path d="M7 14C4.23858 14 2 16.2386 2 19V22C2 22.5523 2.44772 23 3 23H21C21.5523 23 22 22.5523 22 22V19C22 16.2386 19.7614 14 17 14H7Z" fill="currentColor" />
		</svg>
	);
}

export default Header;

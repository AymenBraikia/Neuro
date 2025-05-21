"use client";
import "./header.css";
// import logo from "../../public/neuro.png";
import logo from "../../public/neuro_dark.png";
import Image from "next/image";
import { useRef, useEffect } from "react";

function Header() {
	const scrollProgress = useRef<HTMLDivElement>(null);
	const header = useRef<HTMLDivElement>(null);

	useEffect(() => {
		document.addEventListener("scroll", () => {
			if (scrollY > 50) header.current?.classList.add("active");
			else header.current?.classList.remove("active");
			const scrollTop = scrollY;
			const docHeight = document.documentElement.scrollHeight - innerHeight;
			const scrollPercent = (scrollTop / docHeight) * 100;
			if (scrollProgress.current) scrollProgress.current.style.width = scrollPercent + "%";
		});
	}, []);

	return (
		<header ref={header}>
			<Image alt="Neuro Logo" title="Neuro" src={logo} className="logo" />
			<h1 style={{ position: "absolute", left: "10%" }}>Neuro</h1>
			<nav className="navbar">
				<div className="section">Contact</div>
				<div className="section">Features</div>
				<div className="section">Pricing</div>
				<div className="section">About Us</div>
				<div className="section">Log In</div>
				<div data-n={"Get Started"} className="btn br bgb">
					Get Started
				</div>
				<div className="btn br bgw">Sign Up</div>
			</nav>
			<div ref={scrollProgress} className="scrollProgress"></div>
		</header>
	);
}

export default Header;

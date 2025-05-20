"use client";
import "./header.css";
// import logo from "../../public/neuro.png";
import logo from "../../public/neuro_dark.png";
import Image from "next/image";
import { useRef, useEffect } from "react";

function Header() {
	const scrollProgress = useRef<HTMLDivElement>(null);

	useEffect(() => {
		document.addEventListener("scroll", () => {
			const scrollTop = scrollY;
			const docHeight = document.documentElement.scrollHeight - innerHeight;
			const scrollPercent = (scrollTop / docHeight) * 100;
			if (scrollProgress.current) scrollProgress.current.style.width = scrollPercent + "%";
		});
	}, []);

	return (
		<div className="header">
			<Image alt="Neuro Logo" title="Neuro" src={logo} className="logo" />
			<nav className="navbar">
				<div className="section">Pricing</div>
				<div className="section">About Us</div>
				<div className="section">Log In</div>
				<div n={"Book Demo"} className="btn br bgb">
					Book Demo
				</div>
				<div className="btn br bgw">Sign Up</div>
			</nav>
			<div ref={scrollProgress} className="scrollProgress"></div>
		</div>
	);
}

export default Header;

"use client";
import "./header.css";
import Theme from "./theme";
import "./theme.css";


import { useRef, useEffect } from "react";

function Logo() {
	return (
		<svg className="logo" version="1.0" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 500.000000 500.000000" preserveAspectRatio="xMidYMid meet">
			<g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none">
				<path
					d="M1075 4804 c-179 -27 -283 -64 -409 -148 -141 -94 -252 -216 -319
-351 -77 -154 -103 -278 -94 -455 18 -380 257 -695 620 -818 85 -29 117 -34
197 -36 l95 -1 -3 25 c-13 89 -155 316 -297 474 -148 163 -187 246 -187 396 0
145 52 262 162 363 113 105 261 152 400 128 109 -20 191 -66 308 -172 57 -52
147 -127 200 -167 102 -76 261 -162 301 -162 l24 0 -6 93 c-26 396 -318 730
-711 813 -74 16 -230 26 -281 18z"
				/>
				<path
					d="M3688 4795 c-242 -41 -475 -188 -604 -382 -53 -79 -110 -208 -128
-287 -22 -95 -32 -241 -17 -250 14 -9 180 69 262 124 71 48 154 116 244 201
89 85 114 103 180 136 115 58 235 66 361 23 170 -59 306 -219 334 -395 13 -80
7 -144 -21 -232 -24 -72 -52 -114 -167 -243 -47 -52 -107 -126 -135 -165 -53
-74 -157 -278 -157 -307 0 -16 10 -18 78 -18 428 1 805 383 829 840 9 167 -22
312 -97 462 -128 257 -383 441 -679 492 -110 19 -176 19 -283 1z"
				/>
				<path
					d="M3724 4059 c-302 -307 -534 -447 -865 -521 -94 -21 -129 -23 -354
-23 -279 0 -344 9 -533 71 -224 73 -402 194 -683 463 -65 61 -122 111 -128
111 -13 0 -248 -226 -262 -252 -7 -14 10 -37 90 -120 371 -388 499 -657 520
-1091 21 -452 -56 -745 -273 -1042 -64 -88 -102 -132 -235 -274 -58 -63 -108
-120 -109 -128 -4 -15 218 -250 250 -267 14 -7 44 15 150 116 181 169 255 230
376 309 252 164 523 229 907 216 236 -8 371 -34 552 -108 176 -71 314 -169
552 -390 79 -74 149 -138 157 -144 11 -7 44 21 144 120 71 71 130 136 130 144
0 7 -42 57 -93 110 -318 327 -450 561 -508 902 -19 110 -21 151 -16 364 7 329
34 452 149 676 75 147 185 293 343 458 69 72 125 133 125 137 0 9 -262 274
-270 274 -4 0 -56 -50 -116 -111z"
				/>
				<path
					d="M995 2129 c-209 -31 -403 -141 -546 -312 -69 -82 -118 -173 -160
-298 -28 -81 -33 -112 -37 -225 -7 -198 30 -344 130 -511 80 -136 277 -305
426 -367 218 -91 477 -93 701 -4 276 109 492 385 541 690 6 40 10 93 8 118 -4
55 -9 55 -125 0 -105 -49 -216 -125 -301 -204 -141 -131 -164 -151 -205 -178
-178 -118 -435 -95 -594 54 -113 107 -158 208 -157 358 0 150 31 217 167 368
142 158 257 334 302 461 22 62 -4 71 -150 50z"
				/>
				<path
					d="M3847 2132 c-4 -5 2 -34 12 -63 44 -130 138 -275 267 -416 105 -114
151 -179 174 -247 62 -175 18 -357 -119 -496 -116 -117 -256 -164 -421 -141
-111 15 -176 53 -329 190 -156 140 -248 206 -363 261 -123 58 -122 58 -126
-19 -11 -238 158 -545 386 -700 160 -108 311 -154 507 -154 184 0 313 35 469
127 85 50 213 169 272 252 56 79 127 228 150 319 26 99 26 324 0 419 -103 383
-407 641 -792 672 -51 4 -83 3 -87 -4z"
				/>
			</g>
		</svg>
	);
}

function 
Header() {
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
			{Logo()}
			{/* <Image alt="Neuro Logo" title="Neuro" src={logo} className="logo" /> */}
			<h1 style={{ position: "absolute", left: "10%" }}>Neuro</h1>
			<nav className="navbar">
				<div className="section">Contact</div>
				<div className="section">Pricing</div>
				<div className="section">About Us</div>
				<div data-n={"Get Started"} className="btn br bgb">
					Get Started
				</div>
				<div className="btn br bgw">Log In</div>
				<Theme />
			</nav>
			<div ref={scrollProgress} className="scrollProgress"></div>
		</header>
	);
}

export default Header;

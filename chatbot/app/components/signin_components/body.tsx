"use client";
import "./body.css";
import "../signingRepsonsive.css";
import Theme from "../theme";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "../loading";

function google() {
	return (
		<svg width={20} className="w-5 h-5 mr-2" viewBox="0 0 24 24">
			<path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"></path>
			<path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"></path>
			<path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"></path>
			<path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"></path>
		</svg>
	);
}
function mail() {
	return (
		<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail text-[#eee]">
			<rect width="20" height="16" x="2" y="4" rx="2"></rect>
			<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
		</svg>
	);
}

function lock() {
	return (
		<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock text-[#eee]">
			<rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
			<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
		</svg>
	);
}

function Body() {
	const form = useRef<HTMLFormElement>(null);
	const emailInp = useRef<HTMLInputElement>(null);
	const passwordInp = useRef<HTMLInputElement>(null);

	useEffect(() => {
		form.current?.addEventListener("submit", (ev) => {
			ev.preventDefault();

			fetch(settings.production ? settings.serverUrl + "/signin" : "http://localhost:8000/signin", {
				method: "post",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					email: emailInp.current?.value,
					password: passwordInp.current?.value,
				}),
			})
				.then((resp) => {
					return resp.json();
				})
				.then((data) => {
					console.log(data);
				});
		});
	});

	const [settings, setSettings] = useState({ production: null, serverUrl: null, loaded: false });

	useEffect(() => {
		if (settings.loaded) return;
		fetch("/settings.json")
			.then((resp) => resp.json())
			.then((results) => {
				setSettings(results);
				setTimeout(() => document.querySelector(".loadContainer")?.classList.add("active"), 100);
			})
			.catch((err) => console.error("Failed to load settings:", err));
	}, [settings]);

	const router = useRouter();

	return (
		<>
			<Theme visibility={false} />
			{Loading(settings.loaded)}

			<div className="container">
				{settings.loaded ? (
					<>
						<div className="part1">
							<h1 className="title">Experience AI at its finest</h1>
							<p>Join thousands of users leveraging our advanced AI chatbot for solving their everyday problems.</p>
							<ul>
								<li>
									<div className="subTitle">Natural Conversations</div>
									<div className="subText">Our AI understands context and provides human-like responses.</div>
								</li>
								<li>
									<div className="subTitle">Personalized Experience</div>
									<div className="subText">The more you chat, the better it understands your preferences.</div>
								</li>
								<li>
									<div className="subTitle">Available 24/7</div>
									<div className="subText">Get instant answers whenever you need them, day or night.</div>
								</li>
								<li>
									<div className="subTitle">Secure & Private</div>
									<div className="subText">Your conversations are encrypted and never shared with third parties.</div>
								</li>
							</ul>
						</div>
						<div className="part2">
							<h2>Sign In Your Account</h2>
							<p style={{ color: "var(--foreground3)" }}>Continue your journey with our AI assistant</p>

							{/* <form action={settings.production ? settings.serverUrl + "/signin" : "http://localhost:8000/signin"} method="POST"> */}
							<form ref={form}>
								<div style={{ position: "relative", width: "100%" }}>
									<label className="icon" htmlFor="#email">
										{mail()}
									</label>
									<input ref={emailInp} required type="email" id="email" name="email" className="email" placeholder="Email address" />
								</div>

								<div style={{ position: "relative", width: "100%" }}>
									<label className="icon" htmlFor="#password">
										{lock()}
									</label>
									<input ref={passwordInp} required type="password" id="password" name="password" className="password" placeholder="Password" />
								</div>

								<div style={{ position: "relative", width: "100%", display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
									<input type="checkbox" name="remember" id="remember" />
									<label htmlFor="#remember">Remember me</label>
								</div>

								<input type="submit" value="Sign In" />

								<p>or continue with</p>

								<div className="continue">{google()} Continue with Google</div>
								<p>
									Don&apos;t have an account?{" "}
									<span
										onClick={() => {
											router.push("../signup");
										}}
									>
										Sign up
									</span>
								</p>
							</form>
						</div>
					</>
				) : (
					<></>
				)}
			</div>
		</>
	);
}

export default Body;

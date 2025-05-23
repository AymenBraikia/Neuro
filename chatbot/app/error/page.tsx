"use client";

import { useRouter } from "next/navigation";
import "./error.css";
import { useRef, useEffect } from "react";
function icon() {
	return (
		<svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-alert h-8 w-8 text-red-500">
			<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
			<path d="M12 8v4"></path>
			<path d="M12 16h.01"></path>
		</svg>
	);
}

function getCookie(name: string) {
	const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
	return match ? match[2] : null;
}

function Error() {
	const reason = useRef<HTMLDivElement>(null),
		router = useRouter();
	useEffect(() => {
		let content = "<p class='title'>" + getCookie("reason")?.replaceAll("%20", " ").replaceAll("%3A", ":</p>").replaceAll("%0A-", "<br>-").replaceAll("%2C", "<br><span class='dot'></span>");

		if (!content.endsWith("</span>")) content += "</span>";

		if (reason.current) reason.current.innerHTML = content;
	});

	return (
		<div className="container">
			<h1>{icon()}Error:</h1>
			<p ref={reason} className="reason"></p>
			<div onClick={router.back} className="btn">
				Go Back
			</div>
		</div>
	);
}

export default Error;

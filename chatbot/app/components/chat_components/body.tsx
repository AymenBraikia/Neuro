"use client";
import Image from "next/image";

import burger from "../../../public/menu-burger-horizontal-svgrepo-com.svg";
import gear from "../../../public/gear-svgrepo-com.svg";
import pen from "../../../public/pen-square-svgrepo-com.svg";
import search from "../../../public/search.svg";
import web from "../../../public/web-svgrepo-com.svg";
import database from "../../../public/db-material-2-svgrepo-com.svg";
import save from "../../../public/save-svgrepo-com.svg";
import image from "../../../public/image-svgrepo-com.svg";
import canvasPen from "../../../public/pen-svgrepo-com.svg";
import code from "../../../public/code-svgrepo-com.svg";

// import search from "../../../public/search-svgrepo-com (1).svg";
import "./body.css";
import { useRef, useEffect } from "react";

interface historyInfo {
	props: {
		children: HTMLElement[];
	};
}
interface topicITFC {
	name: string;
}

async function fetchReply(question: Array<object>): Promise<string> {
	const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer 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",
		},
		body: JSON.stringify({
			messages: question,
			model: "llama-3.3-70b-versatile",
			temperature: 1,
			max_completion_tokens: 1024,
			top_p: 1,
			stream: false,
			stop: null,
		}),
	});

	const data = await response.json();

	const result = data.choices[0].message.content;
	return result;
}

// function embed() {

// }

function navBarToggle() {
	const navbar = document.querySelector("nav");
	const body = document.querySelector(".body");
	const header = document.querySelector("header");

	navbar?.classList.toggle("active");
	body?.classList.toggle("active");
	header?.classList.toggle("active");
}

function startThinking() {
	const dotsContainer = document.createElement("div");
	dotsContainer.classList.add("dotsContainer");

	for (let i = 0; i < 5; i++) {
		const dot = document.createElement("div");

		dot.classList.add("dot");

		dot.style.animation = `load 1s ease ${i * 100}ms infinite alternate`;

		dotsContainer.appendChild(dot);
	}
	document.querySelector(".container")?.appendChild(dotsContainer);

	return null;
}

function stopThinking() {
	const dots = document.querySelector(".dotsContainer");
	if (dots) dots?.parentElement?.removeChild(dots);

	return null;
}
async function FetchHistory() {
	const myPromise = new Promise((resolve, reject) => {
		setTimeout(() => {
			if (renderChatHistory(localStorage.getItem("chat_history"))) {
				resolve(renderChatHistory(localStorage.getItem("chat_history")));
			} else {
				reject(<>You Don&apos;t Have Any Chat History</>);
			}
		}, 1000);
	});

	return myPromise;
}
function renderChatHistory(history: string | null) {
	if (!history) return <>there was an error</>;
	const data = JSON.parse(history);

	return (
		<>
			{...data.map((e: topicITFC) => {
				const h4 = document.createElement("h4");
				h4.innerHTML = e.name;
				h4.classList.add("chatTopic");

				return h4;
			})}
		</>
	);
}

function handleOptionClick(ev: React.MouseEvent<HTMLParagraphElement>) {
	const target = ev.currentTarget as HTMLElement;
	target.classList.toggle("active");
}
function handleAttachmentClick() {
	return;
	// ev.currentTarget.classList.toggle("active")
}

function getTopic(e: string) {
	const topic = fetchReply([{ role: "system", content: "what is the topic of this message if you dont find a topic related to the message just give me a title for it in two or three words:\n" + e }]) || "nothing";

	return topic;
}

async function setHistory() {
	const recent = document.querySelector(".recent");
	if (recent && localStorage.getItem("chat_history")) {
		const info: historyInfo = (await FetchHistory()) as historyInfo;
		recent.innerHTML = "";

		info.props.children.forEach((e: HTMLElement) => {
			recent?.appendChild(e);
		});
	} else setTimeout(setHistory, 1000);

	// recent
}
setHistory();

function Body() {
	let currentTopic: string | null = null;
	const h1 = useRef<HTMLDivElement>(null);
	const input = useRef<HTMLInputElement>(null);
	const container = useRef<HTMLDivElement>(null);
	const chat = useRef<HTMLDivElement>(null);

	const messages: Array<object> = [];

	async function Submit() {
		if (!input.current?.value || !input.current) return;
		if (document.querySelectorAll("h1").length > 1) {
			h1.current?.classList.add("active");

			const chat_history = localStorage.getItem("chat_history");

			const topic = await getTopic(input.current.value);
			currentTopic = topic;
			localStorage.setItem("last_topic", topic);

			if (!chat_history) {
				const data = [{ name: topic, messages: [] }];

				localStorage.setItem("chat_history", JSON.stringify(data));
			}

			setTimeout(() => h1.current?.parentElement?.removeChild(h1.current), 400);
		}

		const messageContent = input.current?.value;

		input.current.value = "";

		const myMessageContainer = document.createElement("div");
		const myMessage = document.createElement("p");

		const newMessage = { role: "user", content: messageContent };
		const updatedMessages = [...messages, newMessage];

		messages.push(...updatedMessages);

		myMessage.innerHTML = messageContent;

		myMessage.classList.add("myMessage");
		myMessageContainer.classList.add("myMessageContainer");

		myMessageContainer.appendChild(myMessage);
		container.current?.appendChild(myMessageContainer);

		setTimeout(() => myMessage.classList.add("active"), 1);

		startThinking();

		const replyContainer = document.createElement("div");
		const reply = document.createElement("p");

		reply.innerHTML = "";

		replyContainer.classList.add("replyContainer");
		reply.classList.add("reply");

		replyContainer.appendChild(reply);
		container.current?.appendChild(replyContainer);

		const replyContent = await fetchReply(updatedMessages);
		// const replyContent = embed(await fetchReply(updatedMessages));

		let respond = "";

		reply.innerHTML = respond;

		let index = 0;

		stopThinking();

		const interval = setInterval(() => {
			if (index >= replyContent.length) {
				clearInterval(interval);
				return;
			}
			index++;
			respond += replyContent.slice(index - 1, index);
			reply.innerHTML = respond;
		}, 5);

		// update topic messages
		const savedHistory = localStorage.getItem("chat_history");

		if (savedHistory) {
			const oldHistory = JSON.parse(savedHistory);

			let unedited = oldHistory.find((e: topicITFC) => {
				return e.name == currentTopic;
			});

			if (unedited) {
				unedited.messages.push(messageContent);
				unedited.messages.push(replyContent);
			} else {
				unedited = { name: currentTopic || localStorage.getItem("last_topic"), messages: [messageContent, replyContent] };
			}

			const edited = [
				...oldHistory.filter((e: topicITFC) => {
					return e.name !== unedited.name;
				}),
				unedited,
			];

			localStorage.setItem("chat_history", JSON.stringify(edited));
		}
	}

	useEffect(() => {
		document.addEventListener("keypress", (k) => {
			if (!input.current) return;
			if (k.code == "Enter" && document.activeElement == input.current && input.current.value.length > 0) Submit();
			if (document.activeElement !== chat.current) input.current?.focus();
		});
	}, []);

	return (
		<>
			<nav>
				<div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", width: "100%", height: "10%" }}>
					<Image src={burger} alt="Burger" onClick={navBarToggle} className="burger" />

					<Image className="search" alt="Search" src={search} />
				</div>
				<div>
					<div className="newChat">
						<Image src={pen} alt="New chat" width={30} height={30} title="New chat" />
						<h3>New chat</h3>
					</div>
				</div>
				<div style={{ width: "100%", height: "80%", display: "flex", justifyContent: "space-evenly", alignItems: "flex-start", flexDirection: "column" }}>
					<h3 style={{ height: "10%", display: "flex", justifyContent: "center", alignItems: "center" }}>Recent</h3>
					<div className="recent">You don&apos;t have chat history yet;</div>
				</div>
				<div>
					<div className="settings_help" style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
						<Image src={gear} alt="Settings" width={30} height={30} />
						<h3>Settings And Help</h3>
					</div>
				</div>
			</nav>
			<div className="body" style={{ width: "80vw", height: "calc(100vh - 70px)", position: "absolute", left: "20vw", top: 70, transition: "var(--transition)" }}>
				<div ref={chat} className="chat" style={{ width: "100%", height: "calc(100% - 120px)", overflow: "auto" }}>
					<div ref={container} className="container">
						<h1 ref={h1} style={{ transition: "var(--transition)", position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }}>
							How can i help you?
						</h1>
					</div>
				</div>
				<div style={{ height: 100, width: "80%", background: "#dedede", position: "relative", left: "10%", borderRadius: 15 }}>
					<input ref={input} style={{ width: "100%", padding: 15, fontSize: 18, background: "transparent", outline: "none", border: "none", color: "black" }} type="text" placeholder="Ask Neuro" />
					<div className="options">
						<p onClick={handleAttachmentClick} style={{ height: 40, width: 40, fontWeight: 200, fontSize: 36, display: "flex", justifyContent: "center", alignItems: "center" }}>
							+
						</p>
						<p onClick={handleOptionClick}>
							{" "}
							<Image src={web} width={25} height={25} alt="web" />
							Search
						</p>
						<p onClick={handleOptionClick}>
							{" "}
							<Image src={database} width={20} height={20} alt="web" />
							Deep Search
						</p>
						<p onClick={handleOptionClick}>
							{" "}
							<Image src={save} width={30} height={30} alt="web" />
							Reason
						</p>
						<p onClick={handleOptionClick}>
							{" "}
							<Image src={image} width={20} height={20} alt="web" />
							Create image
						</p>
						<p onClick={handleOptionClick}>
							{" "}
							<Image src={canvasPen} width={25} height={25} alt="web" />
							Canvas
						</p>
						<p onClick={handleOptionClick}>
							{" "}
							<Image src={code} width={25} height={25} alt="web" />
							Code
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Body;

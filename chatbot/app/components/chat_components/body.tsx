"use client";
import Theme from "../theme";

function gear() {
	return (
		<svg width="25" height="25" viewBox="0 0 24 24" fill="none">
			<path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			<path
				d="M12.9046 3.06005C12.6988 3 12.4659 3 12 3C11.5341 3 11.3012 3 11.0954 3.06005C10.7942 3.14794 10.5281 3.32808 10.3346 3.57511C10.2024 3.74388 10.1159 3.96016 9.94291 4.39272C9.69419 5.01452 9.00393 5.33471 8.36857 5.123L7.79779 4.93281C7.3929 4.79785 7.19045 4.73036 6.99196 4.7188C6.70039 4.70181 6.4102 4.77032 6.15701 4.9159C5.98465 5.01501 5.83376 5.16591 5.53197 5.4677C5.21122 5.78845 5.05084 5.94882 4.94896 6.13189C4.79927 6.40084 4.73595 6.70934 4.76759 7.01551C4.78912 7.2239 4.87335 7.43449 5.04182 7.85566C5.30565 8.51523 5.05184 9.26878 4.44272 9.63433L4.16521 9.80087C3.74031 10.0558 3.52786 10.1833 3.37354 10.3588C3.23698 10.5141 3.13401 10.696 3.07109 10.893C3 11.1156 3 11.3658 3 11.8663C3 12.4589 3 12.7551 3.09462 13.0088C3.17823 13.2329 3.31422 13.4337 3.49124 13.5946C3.69158 13.7766 3.96395 13.8856 4.50866 14.1035C5.06534 14.3261 5.35196 14.9441 5.16236 15.5129L4.94721 16.1584C4.79819 16.6054 4.72367 16.829 4.7169 17.0486C4.70875 17.3127 4.77049 17.5742 4.89587 17.8067C5.00015 18.0002 5.16678 18.1668 5.5 18.5C5.83323 18.8332 5.99985 18.9998 6.19325 19.1041C6.4258 19.2295 6.68733 19.2913 6.9514 19.2831C7.17102 19.2763 7.39456 19.2018 7.84164 19.0528L8.36862 18.8771C9.00393 18.6654 9.6942 18.9855 9.94291 19.6073C10.1159 20.0398 10.2024 20.2561 10.3346 20.4249C10.5281 20.6719 10.7942 20.8521 11.0954 20.94C11.3012 21 11.5341 21 12 21C12.4659 21 12.6988 21 12.9046 20.94C13.2058 20.8521 13.4719 20.6719 13.6654 20.4249C13.7976 20.2561 13.8841 20.0398 14.0571 19.6073C14.3058 18.9855 14.9961 18.6654 15.6313 18.8773L16.1579 19.0529C16.605 19.2019 16.8286 19.2764 17.0482 19.2832C17.3123 19.2913 17.5738 19.2296 17.8063 19.1042C17.9997 18.9999 18.1664 18.8333 18.4996 18.5001C18.8328 18.1669 18.9994 18.0002 19.1037 17.8068C19.2291 17.5743 19.2908 17.3127 19.2827 17.0487C19.2759 16.8291 19.2014 16.6055 19.0524 16.1584L18.8374 15.5134C18.6477 14.9444 18.9344 14.3262 19.4913 14.1035C20.036 13.8856 20.3084 13.7766 20.5088 13.5946C20.6858 13.4337 20.8218 13.2329 20.9054 13.0088C21 12.7551 21 12.4589 21 11.8663C21 11.3658 21 11.1156 20.9289 10.893C20.866 10.696 20.763 10.5141 20.6265 10.3588C20.4721 10.1833 20.2597 10.0558 19.8348 9.80087L19.5569 9.63416C18.9478 9.26867 18.6939 8.51514 18.9578 7.85558C19.1262 7.43443 19.2105 7.22383 19.232 7.01543C19.2636 6.70926 19.2003 6.40077 19.0506 6.13181C18.9487 5.94875 18.7884 5.78837 18.4676 5.46762C18.1658 5.16584 18.0149 5.01494 17.8426 4.91583C17.5894 4.77024 17.2992 4.70174 17.0076 4.71872C16.8091 4.73029 16.6067 4.79777 16.2018 4.93273L15.6314 5.12287C14.9961 5.33464 14.3058 5.0145 14.0571 4.39272C13.8841 3.96016 13.7976 3.74388 13.6654 3.57511C13.4719 3.32808 13.2058 3.14794 12.9046 3.06005Z"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
function menu() {
	return (
		<svg className="menuBtn" onClick={navBarToggle} width="30" height="30" viewBox="0 0 24 24" fill="none">
			<g clipPath="url(#clip0_429_11066)">
				<path d="M3 6.00092H21M3 12.0009H21M3 18.0009H21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
			</g>
			<defs>
				<clipPath id="clip0_429_11066">
					<rect width="24" height="24" fill="white" transform="translate(0 0.000915527)" />
				</clipPath>
			</defs>
		</svg>
	);
}

function search() {
	return (
		<svg className="search" fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 183.792 183.792">
			<path
				d="M54.734,9.053C39.12,18.067,27.95,32.624,23.284,50.039c-4.667,17.415-2.271,35.606,6.743,51.22
	c12.023,20.823,34.441,33.759,58.508,33.759c7.599,0,15.139-1.308,22.287-3.818l30.364,52.592l21.65-12.5l-30.359-52.583
	c10.255-8.774,17.638-20.411,21.207-33.73c4.666-17.415,2.27-35.605-6.744-51.22C134.918,12.936,112.499,0,88.433,0
	C76.645,0,64.992,3.13,54.734,9.053z M125.29,46.259c5.676,9.831,7.184,21.285,4.246,32.25c-2.938,10.965-9.971,20.13-19.802,25.806
	c-6.462,3.731-13.793,5.703-21.199,5.703c-15.163,0-29.286-8.146-36.857-21.259c-5.676-9.831-7.184-21.284-4.245-32.25
	c2.938-10.965,9.971-20.13,19.802-25.807C73.696,26.972,81.027,25,88.433,25C103.597,25,117.719,33.146,125.29,46.259z"
			/>
		</svg>
	);
}
function web() {
	return (
		<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M9.83824 18.4467C10.0103 18.7692 10.1826 19.0598 10.3473 19.3173C8.59745 18.9238 7.07906 17.9187 6.02838 16.5383C6.72181 16.1478 7.60995 15.743 8.67766 15.4468C8.98112 16.637 9.40924 17.6423 9.83824 18.4467ZM11.1618 17.7408C10.7891 17.0421 10.4156 16.1695 10.1465 15.1356C10.7258 15.0496 11.3442 15 12.0001 15C12.6559 15 13.2743 15.0496 13.8535 15.1355C13.5844 16.1695 13.2109 17.0421 12.8382 17.7408C12.5394 18.3011 12.2417 18.7484 12 19.0757C11.7583 18.7484 11.4606 18.3011 11.1618 17.7408ZM9.75 12C9.75 12.5841 9.7893 13.1385 9.8586 13.6619C10.5269 13.5594 11.2414 13.5 12.0001 13.5C12.7587 13.5 13.4732 13.5593 14.1414 13.6619C14.2107 13.1384 14.25 12.5841 14.25 12C14.25 11.4159 14.2107 10.8616 14.1414 10.3381C13.4732 10.4406 12.7587 10.5 12.0001 10.5C11.2414 10.5 10.5269 10.4406 9.8586 10.3381C9.7893 10.8615 9.75 11.4159 9.75 12ZM8.38688 10.0288C8.29977 10.6478 8.25 11.3054 8.25 12C8.25 12.6946 8.29977 13.3522 8.38688 13.9712C7.11338 14.3131 6.05882 14.7952 5.24324 15.2591C4.76698 14.2736 4.5 13.168 4.5 12C4.5 10.832 4.76698 9.72644 5.24323 8.74088C6.05872 9.20472 7.1133 9.68686 8.38688 10.0288ZM10.1465 8.86445C10.7258 8.95042 11.3442 9 12.0001 9C12.6559 9 13.2743 8.95043 13.8535 8.86447C13.5844 7.83055 13.2109 6.95793 12.8382 6.2592C12.5394 5.69894 12.2417 5.25156 12 4.92432C11.7583 5.25156 11.4606 5.69894 11.1618 6.25918C10.7891 6.95791 10.4156 7.83053 10.1465 8.86445ZM15.6131 10.0289C15.7002 10.6479 15.75 11.3055 15.75 12C15.75 12.6946 15.7002 13.3521 15.6131 13.9711C16.8866 14.3131 17.9412 14.7952 18.7568 15.2591C19.233 14.2735 19.5 13.1679 19.5 12C19.5 10.8321 19.233 9.72647 18.7568 8.74093C17.9413 9.20477 16.8867 9.6869 15.6131 10.0289ZM17.9716 7.46178C17.2781 7.85231 16.39 8.25705 15.3224 8.55328C15.0189 7.36304 14.5908 6.35769 14.1618 5.55332C13.9897 5.23077 13.8174 4.94025 13.6527 4.6827C15.4026 5.07623 16.921 6.08136 17.9716 7.46178ZM8.67765 8.55325C7.61001 8.25701 6.7219 7.85227 6.02839 7.46173C7.07906 6.08134 8.59745 5.07623 10.3472 4.6827C10.1826 4.94025 10.0103 5.23076 9.83823 5.5533C9.40924 6.35767 8.98112 7.36301 8.67765 8.55325ZM15.3224 15.4467C15.0189 16.637 14.5908 17.6423 14.1618 18.4467C13.9897 18.7692 13.8174 19.0598 13.6527 19.3173C15.4026 18.9238 16.921 17.9186 17.9717 16.5382C17.2782 16.1477 16.3901 15.743 15.3224 15.4467ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
				fill="currentColor"
			/>
		</svg>
	);
}
function database() {
	return (
		<svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
			<style type="text/css">.st0{}</style>
			<g>
				<path
					fill="currentColor"
					d="M455.925,324.816v-0.305c-43.168,34.714-115.123,56.648-200,56.648c-74.15,0-138.432-16.743-182.279-44.12
		c-6.223-3.94-12.07-8.112-17.48-12.524v0.178c-0.076-0.062-0.162-0.119-0.24-0.182v92.043c0,52.626,89.717,95.445,200,95.445
		s200-42.819,200-95.445v-56.488l0.15-35.363C456.026,324.742,455.974,324.777,455.925,324.816z"
				/>
				<path
					fill="currentColor"
					d="M255.925,340.831c110.283,0,200-42.82,200-95.444v-5.188V201.87v-16.675l0.15-10.437
		c-0.049,0.039-0.102,0.074-0.15,0.113v-0.301c-43.168,34.714-115.123,56.648-200,56.648c-74.117,0-138.375-16.73-182.221-44.087
		c-6.244-3.952-12.111-8.137-17.539-12.562v0.182c-0.076-0.062-0.162-0.119-0.24-0.182v27.3v38.329v5.188
		C55.925,298.012,145.642,340.831,255.925,340.831z"
				/>
				<path
					fill="currentColor"
					d="M255.925,190.89c110.283,0,200-42.819,200-95.444c0-1.507-0.328-2.974-0.472-4.463
		c-0.836-8.539-3.844-16.81-9.098-24.622C420.507,27.918,344.952,0,255.925,0C166.898,0,91.343,27.918,65.497,66.36
		c-5.256,7.812-8.264,16.083-9.098,24.622c-0.147,1.488-0.475,2.956-0.475,4.463C55.925,148.07,145.642,190.89,255.925,190.89z"
				/>
			</g>
		</svg>
	);
}
function save() {
	return (
		<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" clipRule="evenodd" d="M6.75 6L7.5 5.25H16.5L17.25 6V19.3162L12 16.2051L6.75 19.3162V6ZM8.25 6.75V16.6838L12 14.4615L15.75 16.6838V6.75H8.25Z" fill="currentColor" />
		</svg>
	);
}
function image() {
	return (
		<svg fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<title>image</title>
			<path d="M0 26.016q0 2.496 1.76 4.224t4.256 1.76h20q2.464 0 4.224-1.76t1.76-4.224v-20q0-2.496-1.76-4.256t-4.224-1.76h-20q-2.496 0-4.256 1.76t-1.76 4.256v20zM4 26.016v-20q0-0.832 0.576-1.408t1.44-0.608h20q0.8 0 1.408 0.608t0.576 1.408v20q0 0.832-0.576 1.408t-1.408 0.576h-20q-0.832 0-1.44-0.576t-0.576-1.408zM6.016 24q0 0.832 0.576 1.44t1.408 0.576h16q0.832 0 1.408-0.576t0.608-1.44v-0.928q-0.224-0.448-1.12-2.688t-1.6-3.584-1.28-2.112q-0.544-0.576-1.12-0.608t-1.152 0.384-1.152 1.12-1.184 1.568-1.152 1.696-1.152 1.6-1.088 1.184-1.088 0.448q-0.576 0-1.664-1.44-0.16-0.192-0.48-0.608-1.12-1.504-1.6-1.824-0.768-0.512-1.184 0.352-0.224 0.512-0.928 2.24t-1.056 2.56v0.64zM6.016 9.024q0 1.248 0.864 2.112t2.112 0.864 2.144-0.864 0.864-2.112-0.864-2.144-2.144-0.864-2.112 0.864-0.864 2.144z"></path>
		</svg>
	);
}
function canvasPen() {
	return (
		<svg width={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M11 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40974 4.40973 4.7157 4.21799 5.09202C4 5.51985 4 6.0799 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.0799 20 7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V12.5M15.5 5.5L18.3284 8.32843M10.7627 10.2373L17.411 3.58902C18.192 2.80797 19.4584 2.80797 20.2394 3.58902C21.0205 4.37007 21.0205 5.6364 20.2394 6.41745L13.3774 13.2794C12.6158 14.0411 12.235 14.4219 11.8012 14.7247C11.4162 14.9936 11.0009 15.2162 10.564 15.3882C10.0717 15.582 9.54378 15.6885 8.48793 15.9016L8 16L8.04745 15.6678C8.21536 14.4925 8.29932 13.9048 8.49029 13.3561C8.65975 12.8692 8.89125 12.4063 9.17906 11.9786C9.50341 11.4966 9.92319 11.0768 10.7627 10.2373Z"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
function code() {
	return (
		<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}

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
	const recent = document.querySelector(".recent");
	const search_history = document.querySelector(".search_history");

	navbar?.classList.toggle("active");
	body?.classList.toggle("active");
	header?.classList.toggle("active");
	recent?.classList.toggle("active");
	search_history?.classList.toggle("active");
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

				h4.onclick = () => {
					loadMessages(e.name);
					h4.classList.add("active");
				};
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
	if (recent && localStorage.getItem("chat_history") && document.readyState == "complete") {
		const info: historyInfo = (await FetchHistory()) as historyInfo;
		recent.innerHTML = "";

		info.props.children.forEach((e: HTMLElement) => {
			recent?.appendChild(e);
		});
	} else setTimeout(setHistory, 2000);

	// recent
}
setHistory();

function loadMessages(name: string) {
	const history = localStorage.getItem("chat_history"),
		container = document.querySelector(".container");

	if (!history || !container || localStorage.getItem("last_topic") !== name) return;

	const messages = JSON.parse(history).filter((e: topicITFC) => {
		return e.name == name;
	})[0].messages;

	messages.forEach((message: string, index: number) => {
		const myMessageContainer = document.createElement("div");
		const myMessage = document.createElement("p");

		myMessage.innerHTML = message;

		myMessage.classList.add("active");
		myMessage.classList.add(index % 2 == 1 ? "reply" : "myMessage");
		myMessageContainer.classList.add(index % 2 == 1 ? "replyContainer" : "myMessageContainer");

		myMessageContainer.appendChild(myMessage);
		container.appendChild(myMessageContainer);
	});

	localStorage.setItem("last_topic", name);

	const h1 = document.querySelector("h1");
	if (h1) h1.parentElement?.removeChild(h1);
}
// setTimeout(() => {
// loadMessages("Unknown Topic");
// }, 1500);

function Body() {
	let currentTopic: string | null = null;
	const h1 = useRef<HTMLDivElement>(null);
	const input = useRef<HTMLInputElement>(null);
	const container = useRef<HTMLDivElement>(null);
	const chat = useRef<HTMLDivElement>(null);

	const messages: Array<object> = [];

	async function Submit() {
		if (!input.current?.value) return;
		if (input.current?.value == "") return;

		if (document.querySelector("h1")) {
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
	});

	return (
		<>
			<nav>
				<div className="navHeader" style={{ display: "flex", justifyContent: "flex-start", columnGap: 20, alignItems: "center", minWidth: 160, width: "100%", height: "10%" }}>
					{menu()}
					<div className="searchCont" style={{ position: "relative", width: "70%" }}>
						{search()}
						<input type="text" className="search_history" placeholder="Search" id="" />
					</div>
				</div>

				<div>
					<div className="newChat">
						{canvasPen()}
						<h3>New chat</h3>
					</div>
				</div>
				<div style={{ width: "100%", height: "80%", display: "flex", justifyContent: "space-evenly", alignItems: "flex-start", flexDirection: "column" }}>
					<h3 style={{ height: "10%", display: "flex", justifyContent: "center", alignItems: "center" }}>Recent</h3>
					<div className="recent">You don&apos;t have chat history yet</div>
				</div>
				<div>
					<div className="settings_help" style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
						{gear()}
						<p style={{ fontSize: 18 }}>Settings And Help</p>
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
				<div className="inputContainer" style={{ height: 100, width: "80%", background: "var(--background3)", position: "relative", left: "10%", borderRadius: 15 }}>
					<input ref={input} style={{ width: "100%", padding: 15, fontSize: 18, background: "transparent", outline: "none", border: "none", color: "var(--foreground)" }} type="text" placeholder="Ask Neuro" />
					<div className="options">
						<p onClick={handleAttachmentClick} style={{ height: 40, width: 40, fontWeight: 200, fontFamily: "sans-serif", fontSize: 25, display: "flex", justifyContent: "center", alignItems: "center" }}>
							+
						</p>
						<p className="option" onClick={handleOptionClick}>
							{web()}
							Search
						</p>
						<p className="option" onClick={handleOptionClick}>
							{database()}
							Deep Search
						</p>
						<p className="option" onClick={handleOptionClick}>
							{save()}
							Reason
						</p>
						<p className="option" onClick={handleOptionClick}>
							{image()}
							Create image
						</p>
						<p className="option" onClick={handleOptionClick}>
							{canvasPen()}
							Canvas
						</p>
						<p className="option" onClick={handleOptionClick}>
							{code()}
							Code
						</p>
					</div>
				</div>
			</div>
			<Theme visibility={false} />
		</>
	);
}

export default Body;

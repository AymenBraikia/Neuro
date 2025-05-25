import express from "express";
import connectDB from "./db";
import cors from "cors";

const db = (async () => {
	return (await connectDB()).db("Neuro");
})();

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("../public"));

const port = 8000;

app.get("/", (req, res) => {
	res.send("Hello TypeScript with Express!");
});
interface userInfo {
	email: string;
	password: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

function validate(obj: userInfo) {
	if (!obj.email || !obj.password) return [false, "Bad Request"];

	const passwordTest = passwordRegex.test(obj.password);
	const email = emailRegex.test(obj.email);

	if (!email) return [false, "Email is not in the correct format"];
	if (!passwordTest) return [false, `Password is not in the correct format:, At least 8 characters, At least one uppercase letter, At least one lowercase letter, At least one digit, At least one special character`];

	return [true];
}

app.post("/signup", async (req, res) => {
	const info = req.body;

	const validation = validate(info);

	if (!validation[0]) {
		res
			.status(400)
			.cookie("reason", validation[1], { maxAge: 60 * 1e3 * 5 })
			.redirect(req.headers.origin + "/error");

		return;
	}

	const users = (await db).collection("users");

	if (await users.findOne({ email: info.email })) {
		// res.json({ state: false, reason: "This email is taken use another one" });

		res
			.status(400)
			.cookie("reason", "This email is taken use another one.", { maxAge: 60 * 1e3 * 5 })
			.redirect(req.headers.origin + "/error");
		return;
	} else if (await users.findOne({ username: info.username })) {
		// res.status(400).cookie("reason", "This username is taken use another one.").redirect(req.headers.origin + "/error");

		res
			.status(400)
			.cookie("reason", "This username is taken use another one.", { maxAge: 60 * 1e3 * 5 })
			.redirect(req.headers.origin + "/error");
		return;
	}

	users.insertOne({ username: info.username, email: info.email, password: info.password });

	res
		.status(200)
		.cookie("username", info.username)
		.redirect(req.headers.origin || "http://localhost:3000/");
});

app.post("/signin", async (req, res) => {
	const info = req.body;
	const validation = validate(info);

	if (!validation[0]) {
		res
			.status(400)
			.cookie("reason", validation[1], { maxAge: 60 * 1e3 * 5 })
			.redirect(req.headers.origin + "/error");
		return;
	}

	const data = await (await db).collection("users").findOne({ email: info.email, password: info.password });

	if (!data) {
		console.log("not found");
		res
			.status(400)
			.cookie("reason", "Could not find a user with the given information, Try to create an account if you don't have one", { maxAge: 60 * 1e3 * 5 })
			.redirect(req.headers.origin + "/error");
		return;
	}

	res.cookie("test", "true");

	res.cookie("username", data.username).redirect(req.headers.origin || "http://localhost:3000/");
});

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});

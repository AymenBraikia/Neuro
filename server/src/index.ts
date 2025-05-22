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

const port = 8000;

app.get("/", (req, res) => {
	res.send("Hello TypeScript with Express!");
});
interface userInfo {
	email: string;
	password: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

function validate(obj: userInfo) {
	if (!emailRegex.test(obj.email)) return [false, "Email is not in the correct format"];
	if (!passwordRegex.test(obj.password))
		return [
			false,
			`Password is not in the correct format:
-At least 8 characters
-At least one uppercase letter
-At least one lowercase letter
-At least one digit
-At least one special character`,
		];

	return [true];
}

app.post("/signup", async (req, res) => {
	const info = req.body;

	if (!validate(info)[0]) {
		res.json(JSON.stringify({ state: false, reason: validate(req.body)[1] }));
		return;
	}

	const users = (await db).collection("users");

	if (await users.findOne({ email: info.email })) {
		res.json({ state: false, reason: "This email is taken use another one" });
		return;
	} else if (await users.findOne({ email: info.email })) {
		res.json({ state: false, reason: "This username is taken use another one" });
		return;
	}

	users.insertOne({ username: info.username, email: info.email, password: info.password });

	res.cookie("username", info.username);
	res.redirect("http://localhost:3000/");
});

app.post("/signin", async (req, res) => {
	const info = req.body;

	if (!validate(info)[0]) {
		res.json(JSON.stringify({ state: false, reason: validate(req.body)[1] }));
		return;
	}

	const data = await (await db).collection("users").findOne({ email: info.email, password: info.password });

	if (!data) {
		res.json(JSON.stringify({ state: false, reason: "Could not find a user with the given information, Try to create an account if you don't have one" }));
		return;
	}
	res.cookie("username", data.username);
	res.redirect("http://localhost:3000/");
});

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});

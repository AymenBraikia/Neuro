"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db"));
const cors_1 = __importDefault(require("cors"));
const db = (async () => {
    return (await (0, db_1.default)()).db("Neuro");
})();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
const port = 8000;
app.get("/", (req, res) => {
    res.send("Hello TypeScript with Express!");
});
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
function validate(obj) {
    if (!emailRegex.test(obj.email))
        return [false, "Email is not in the correct format"];
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
    }
    else if (await users.findOne({ email: info.email })) {
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

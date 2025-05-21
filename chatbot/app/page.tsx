// import Image from "next/image";
import "./responsive.css";
import Header from "./components/header";
import Body from "./components/body";
import Theme from "./components/theme";

export default function Home() {
	return (
		<>
			<Header />
			<Body />
			<Theme />
		</>
	);
}

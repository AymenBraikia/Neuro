import Image from "next/image";
import userPfp from "../../../public/profile-1335-svgrepo-com.svg";

function header() {
	return (
		<header style={{ display: "flex", justifyContent: "space-around", alignItems: "center", width: "80vw", height: 70, backgroundColor: "#eee", columnGap: "30%", position: "fixed", left: "20vw", zIndex: 5,transition:"var(--transition)" }}>
			<h1>Neuro-3.5</h1>
			<div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", minWidth: 300 }}>
				<h3 style={{ cursor: "pointer" }}>Try Neuro-4.0</h3>
				<Image style={{ border: "3.5px solid black", borderRadius: "50%", padding: 3 }} width={50} height={50} src={userPfp} alt="user profile" />
			</div>
		</header>
	);
}

export default header;

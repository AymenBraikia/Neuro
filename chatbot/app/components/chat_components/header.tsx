import Image from "next/image";
import userPfp from "../../../public/profile-1335-svgrepo-com.svg";

const headerStyles: object = {
	backgroundColor: "var(--background-opacity)",
	width: "80vw",
	height: "70px",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	position: "fixed",
	left: "20vw",
	top: 0,
	padding: "0px 50px",
	zIndex: 5,
	backdropFilter: "blur(15px)",
	borderBottom: "3px solid var(--background3)",
	transition: "var(--transition)",
};

function header() {
	return (
		<header
			style={headerStyles}
			// style={{ display: "flex", justifyContent: "space-around", alignItems: "center", width: "80vw", height: 70, backgroundColor: "var(--background3)", columnGap: "30%", position: "fixed", left: "20vw", zIndex: 5, transition: "var(--transition)" }}
		>
			<h2>Neuro-3.5</h2>
			<div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", minWidth: 300 }}>
				<h3 style={{ cursor: "pointer" }}>Try Neuro-4.0</h3>
				<Image style={{ border: "3.5px solid black", borderRadius: "50%", padding: 3 }} width={50} height={50} src={userPfp} alt="user profile" />
			</div>
		</header>
	);
}

export default header;

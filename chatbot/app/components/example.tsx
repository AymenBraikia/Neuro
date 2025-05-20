import Image from "next/image";
import phone from "../../public/phone2.png";
import phoneKeyboard from "../../public/phoneKeyboard.png";
import "./example.css";
function Example() {
	return (
		<div className="mrt50" style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", height: "800px" }}>
			<div style={{ position: "relative", right: 200, width: 400 }}>
				<Image  style={{transform: "scale(0.418) translate(-121px, 318px)" }} src={phone} alt="Phone" />
				<div style={{ zIndex: -1, width: "350px", height: "700px", background: "white", position: "absolute", left: 225, top: 676, borderRadius: 55 }} className="phoneContent">
					<div className="app">
						<div>
							<div className="appPfp bold">Me</div>
							<div className="appText">What is the Wind speed in london today?</div>
						</div>
						<div className="appReply">
							<div className="appPfp neuroPfp bold">Neuro</div>
							<div className="appText">
								Today in London, the wind is blowing at a gentle speed of around 6 mph (10 km/h) from the east-northeast. The weather is generally calm with partly cloudy skies, and the light breeze is expected to remain steady throughout the day.
							</div>
						</div>
						<div style={{ width: "100%", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
							<div className="appInput br">Message</div>
							<div className="appSubmit"></div>
						</div>
					</div>
					<Image style={{ transform: "scale(0.208) translate(-2835px,-2317px)", background: "#d3d7dc" }} src={phoneKeyboard} alt="phone Keyboard" />
				</div>
			</div>
			<div className="bold" style={{ fontSize: 40, width: "45%", textAlign: "center" }}>Save time and get more done with our intelligent chatbot.</div>
		</div>
	);
}

export default Example;

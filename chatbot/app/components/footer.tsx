import "./footer.css";
import Link from "next/link";
import Image from "next/image";

import youtube from "../../public/youtube-168-svgrepo-com.svg";
import linkedin from "../../public/linkedin-linked-in-svgrepo-com.svg";
import github from "../../public/github-142-svgrepo-com.svg";
import instagram from "../../public/instagram-svgrepo-com.svg";
import tiktok from "../../public/tiktok-svgrepo-com.svg";
import discord from "../../public/discord-svgrepo-com.svg";

function Footer() {
	return (
		<footer style={{ marginTop: 800, width: "100vw", height: 400, background: "black", color: "white", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
			<div className="footerSection">
				<div className="fSectionTitle">Social Media</div>
				<Image width={25} height={25} src={youtube} className={"footerLink"} alt="youtube" />
				<Image width={25} height={25} src={linkedin} className={"footerLink"} alt="linkedin" />
				<Image width={25} height={25} src={github} className={"footerLink"} alt="github" />
				<Image width={25} height={25} src={instagram} className={"footerLink"} alt="instagram" />
				<Image width={25} height={25} src={tiktok} className={"footerLink"} alt="tiktok" />
				<Image width={25} height={25} src={discord} className={"footerLink"} alt="discord" />
			</div>
			<div className="footerSection">
				<div className="fSectionTitle">Terms & Policies</div>
				<Link className={"footerLink"} href={"#"}>
					Terms of Use
				</Link>
				<Link className={"footerLink"} href={"#"}>
					Privacy Policy
				</Link>
				<Link className={"footerLink"} href={"#"}>
					Security
				</Link>
				<Link className={"footerLink"} href={"#"}>
					Other Policies
				</Link>
			</div>
			<div className="footerSection">
				<div className="fSectionTitle">Company</div>
				<Link className={"footerLink"} href={"#"}>
					About Us
				</Link>
				<Link className={"footerLink"} href={"#"}>
					Our Character
				</Link>
				<Link className={"footerLink"} href={"#"}>
					Careers
				</Link>
				<Link className={"footerLink"} href={"#"}>
					Brand
				</Link>
			</div>
			<div className="footerSection">
				<div className="fSectionTitle">More</div>
				<Link className={"footerLink"} href={"#"}>
					News
				</Link>
				<Link className={"footerLink"} href={"#"}>
					Stories
				</Link>
				<Link className={"footerLink"} href={"#"}>
					Affiliate Program
				</Link>
				<Link className={"footerLink"} href={"#"}>
					Help Center
				</Link>
			</div>
		</footer>
	);
}

export default Footer;

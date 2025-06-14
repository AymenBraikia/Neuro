const userPfp = () => (
	<svg width="30" height="30" viewBox="0 0 20 20" version="1.1">
		<title>profile</title>
		<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			<g id="Dribbble-Light-Preview" transform="translate(-420.000000, -2159.000000)" fill="currentColor">
				<g id="icons" transform="translate(56.000000, 160.000000)">
					<path
						d="M374,2009 C371.794,2009 370,2007.206 370,2005 C370,2002.794 371.794,2001 374,2001 C376.206,2001 378,2002.794 378,2005 C378,2007.206 376.206,2009 374,2009 M377.758,2009.673 C379.124,2008.574 380,2006.89 380,2005 C380,2001.686 377.314,1999 374,1999 C370.686,1999 368,2001.686 368,2005 C368,2006.89 368.876,2008.574 370.242,2009.673 C366.583,2011.048 364,2014.445 364,2019 L366,2019 C366,2014 369.589,2011 374,2011 C378.411,2011 382,2014 382,2019 L384,2019 C384,2014.445 381.417,2011.048 377.758,2009.673"
						id="profile-[#1335]"
					></path>
				</g>
			</g>
		</g>
	</svg>
);

import "./responsive.css";

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
				{userPfp()}
			</div>
		</header>
	);
}

export default header;

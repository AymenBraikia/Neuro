import Introduction from "./introduction";
import Example from "./example";
import Part1 from "./part1";
import Part2 from "./part2";
import Footer from "./footer";
import Pricing from "./pricing";

function body() {
	return (
		<div style={{ position: "absolute", top: "250px", left: "0", height: "fit-content", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", rowGap: 50 }}>
			<Introduction />
			<Example />
			<Part1 />
			<Pricing />
			<Part2 />
			<Footer />
		</div>
	);
}

export default body;

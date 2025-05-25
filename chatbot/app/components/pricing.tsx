import "./pricing.css";

function tick() {
	return (
		<svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M18.0633 5.67387C18.5196 5.98499 18.6374 6.60712 18.3262 7.06343L10.8262 18.0634C10.6585 18.3095 10.3898 18.4679 10.0934 18.4957C9.79688 18.5235 9.50345 18.4178 9.29289 18.2072L4.79289 13.7072C4.40237 13.3167 4.40237 12.6835 4.79289 12.293C5.18342 11.9025 5.81658 11.9025 6.20711 12.293L9.85368 15.9396L16.6738 5.93676C16.9849 5.48045 17.607 5.36275 18.0633 5.67387Z"
				fill="lime"
			></path>
		</svg>
	);
}

function cross() {
	return (
		<svg width={25} height={25} viewBox="0 0 24 24" fill="none">
			<path d="M19 5L4.99998 19M5.00001 5L19 19" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}

function Pricing() {
	return (
		<div id="pricing" className="pricing">
			<div>
				<div className="price bold">Free Plan</div>
				<div className="benefits">
					<div>
						{tick()}
						<p>100 messagpes per day</p>
					</div>
					<div>
						{tick()}
						<p>Limited access to upload files</p>
					</div>
					<div>
						{cross()}
						<p>Voice messaes</p>
					</div>
					<div>
						{cross()}
						<p>Opportunities to test new features</p>
					</div>
					<div>
						{cross()}
						<p>Create and use tasks, projects, and custom Neuros</p>
					</div>
					<div>
						{cross()}
						<p>Access to Neuro-4</p>
					</div>
					<div>
						{cross()}
						<p>Access to research previews of Neuro-4.5 and Operator</p>
					</div>
					<div>
						{cross()}
						<p>Access to o1 pro mode, which uses more compute for the best answers to the hardest questions</p>
					</div>
					<div>
						{cross()}
						<p>Access to a research preview of Codex agent</p>
					</div>
				</div>
			</div>
			<div>
				<div className="price bold">14.99$ Plan</div>
				<div className="benefits">
					<div>
						{tick()}
						<p>Voice messaes</p>
					</div>
					<div>
						{tick()}
						<p>500 messagpes per day</p>
					</div>
					<div>
						{tick()}
						<p>Access to Neuro-4</p>
					</div>
					<div>
						{tick()}
						<p>Access to a research preview of Codex agent</p>
					</div>
					<div>
						{cross()}
						<p>Limited access to upload files</p>
					</div>
					<div>
						{cross()}
						<p>Opportunities to test new features</p>
					</div>
					<div>
						{cross()}
						<p>Create and use tasks, projects, and custom Neuros</p>
					</div>
					<div>
						{cross()}
						<p>Access to research previews of Neuro-4.5 and Operator</p>
					</div>
					<div>
						{cross()}
						<p>Access to o1 pro mode, which uses more compute for the best answers to the hardest questions</p>
					</div>
				</div>
			</div>
			<div>
				<div className="price bold">59.99$ Plan</div>
				<div className="benefits">
					<div>
						{tick()}
						<p>Voice messaes</p>
					</div>
					<div>
						{tick()}
						<p>1000 messagpes per day</p>
					</div>
					<div>
						{tick()}
						<p>Limited access to upload files</p>
					</div>
					<div>
						{tick()}
						<p>Opportunities to test new features</p>
					</div>
					<div>
						{tick()}
						<p>Create and use tasks, projects, and custom Neuros</p>
					</div>
					<div>
						{tick()}
						<p>Access to Neuro-4</p>
					</div>
					<div>
						{tick()}
						<p>Access to research previews of Neuro-4.5 and Operator</p>
					</div>
					<div>
						{tick()}
						<p>Access to o1 pro mode, which uses more compute for the best answers to the hardest questions</p>
					</div>
					<div>
						{tick()}
						<p>Access to a research preview of Codex agent</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Pricing;

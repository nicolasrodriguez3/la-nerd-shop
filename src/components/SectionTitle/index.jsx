export default function SectionTitle({ children }) {
	return (
		<h2 className="section-title">
			{children}
			<div className="underline">
				<div></div>
			</div>
		</h2>
	)
}

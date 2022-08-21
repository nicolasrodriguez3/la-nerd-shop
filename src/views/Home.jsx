import Carousel from "../components/Carousel"
import Hero from "../components/Hero"
import SectionTitle from "../components/SectionTitle"
import Contact from "../components/Contact"

export default function Home() {
	return (
		<div>
			<Hero />
			<SectionTitle>HOLA</SectionTitle>
			<Carousel />
			<Contact />
		</div>
	);
}
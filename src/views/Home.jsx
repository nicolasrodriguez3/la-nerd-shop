import Carousel from "../components/Carousel"
import Hero from "../components/Hero"
import SectionTitle from "../components/SectionTitle"
import Contact from "../components/Contact"
import AboutUs from "../components/AboutUs";

export default function Home() {
	return (
		<div>
			<Hero />
			<section className="carousel-section">
				<SectionTitle>NUESTRAS OFERTAS</SectionTitle>
				<Carousel />
			</section>
			<AboutUs />
			<Contact />
		</div>
	);
}
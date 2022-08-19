import Carousel from "./components/Carousel"
import Header from "./components/Header"
import Hero from "./components/Hero"
import SectionTitle from "./components/SectionTitle"
import Contact from "./components/Contact"
import "./styles/App.scss"
import Products from "./components/Products"

function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<SectionTitle>HOLA</SectionTitle>
			<Carousel />
			<Contact />
			<Products />
		</div>
	)
}

export default App

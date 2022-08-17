import Carousel from "./components/Carousel"
import Header from "./components/Header"
import Hero from "./components/Hero"
import SectionTitle from "./components/SectionTitle"
import "./styles/App.scss"

function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<SectionTitle>HOLA</SectionTitle>
			<Carousel />
		</div>
	)
}

export default App

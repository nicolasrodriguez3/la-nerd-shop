import { Route, Routes } from "react-router-dom"

// Components
import Header from "./components/Header"
import Home from "./views/Home"
import Products from "./components/Products"

import "./styles/App.scss"

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products />} />
			</Routes>
		</>
	)
}

export default App

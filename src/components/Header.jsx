import "../styles/Header.scss"
import { Link } from "react-router-dom"
import logo from "../assets/img/logo-small.svg"
import { ReactComponent as ProfileIcon } from "../assets/img/profile-icon.svg"
import { ReactComponent as CartIcon } from "../assets/img/cart-icon.svg"

export default function Header() {
	return (
		<div className="header-container">
			<header className="header">
				<div className="header-logo">
					<img src={logo} alt="logo" />
				</div>
				<form className="header-search">
					<input type="search" name="search" id="header-search-input" placeholder="Buscá tu gadget..." />
				</form>
				<nav>
					<Link to="#" className="active">SHOP</Link>
					<Link to="#">CONOCENOS</Link>
					<Link to="#">CONTACTO</Link>
				</nav>
				<div className="header-icons">
					<Link to="#">
						<ProfileIcon />
					</Link>
					<Link to="#">
						<CartIcon />
					</Link>
				</div>
			</header>
		</div>
	)
}

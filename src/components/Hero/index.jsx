import logoBig from "../../assets/img/logo-big.svg"
import { socialNetworks } from "../../social-networks"
import { Link } from "react-router-dom"
import { ReactComponent as ArrowIcon } from "../../assets/img/arrow-down.svg"
import { ReactComponent as HelpIcon } from "../../assets/img/online-support-icon.svg"

export default function Hero() {
	return (
		<div className="hero-container">
			<div className="hero-logo">
				<img src={logoBig} alt="logo" />
			</div>
			<p className="slogan">
				La tecnología que siempre <br />has querido.
			</p>
			<div className="social-icons">
				{socialNetworks.map(el => (
					<a href={el.url} key={el.name} title={el.name}>
						<img src={el.icon} alt={el.name} />
					</a>
				))}
			</div>
				<Link to="#" className="shop-now">
					<span>Shop now</span>
					<ArrowIcon className="shop-now-icon" />
				</Link>
				<div className="need-help">
					<HelpIcon />
					<span>¿Necesitas ayuda?</span>
				</div>
		</div>
	)
}

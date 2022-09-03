import { useEffect, useState } from "react"
import { ReactComponent as HelpIcon } from "../../assets/img/online-support-icon.svg"

export default function NeedHelp() {
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setVisible(true)
			} else {
				setVisible(false)
			}
		}
		window.addEventListener("scroll", handleScroll)
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return (
		<button className={`${visible ? "visible" : ""} need-help`}>
			<HelpIcon />
<<<<<<< HEAD
			<span>¿Necesitas ayuda?</span>
=======
			<span className="only-desktop">¿Necesitas ayuda?</span>
>>>>>>> nico
		</button>
	)
}

import React from 'react'
import SectionTitle from '../SectionTitle'
import { Link } from "react-router-dom"
import logo from "../../assets/img/logo-small.svg"
import logoBig from "../../assets/img/logo-big.svg"
import credit from "../../assets/img/el_credit-card.svg"
import shipping from "../../assets/img/la_shipping-fast.svg"
import security from "../../assets/img/ant-design_safety-certificate-outlined.svg"
import { ReactComponent as HelpIcon } from "../../assets/img/online-support-icon.svg"
import { socialNetworks } from "../../social-networks"

function Contact() {
    return (
        <div className='contact-container' id="contact">
            
            <section className='contact-first-section'>
                <SectionTitle>ESTEMOS EN CONTACTO!</SectionTitle>
                <form className='contact-first-section-form'>
                    <input
                        type="text"
                        placeholder='NOMBRE'
                        className='contact-first-section-input'
                    />
                    <input
                        type="number"
                        placeholder='TELÉFONO'
                        className='contact-first-section-input'
                    />
                    <input
                        type="mail"
                        placeholder='MAIL'
                        className='contact-first-section-input'
                    />
                    <textarea
                        placeholder='MENSAJE'
                        className='contact-first-section-textarea'>
                    </textarea>
                    <input
                        type="button"
                        placeholder="ENVIAR"
                        className='contact-first-section-button'
                    />
                </form>
            </section>

            <section className='contact-second-section' >
                <Link to="/" className="contact-logo">
                <div >
                    <img src={logoBig} alt="logo" />
                </div>
                </Link>
                
                <div className='contact-end'>
                    <div className='contact-icon-container'>
                        <img src={credit} alt="tarjeta de crédito, ícono" className='contact-icon' />
                        <p>¡ELEGÍ CÓMO PAGAR!</p>
                    </div>
                    <div className='contact-icon-container border'>
                        <img src={shipping} alt="envíos seguros, ícono" className='contact-icon' />
                        <p>ENVÍOS 100% SEGUROS</p>
                    </div>
                    <div className='contact-icon-container'>
                        <img src={security} alt="seguridad, ícono" className='contact-icon' />
                        <p>SEGURIDAD, DE PRINCIPIO A FIN</p>
                    </div>
                </div>
                <div className='contact-social-help-container'>
                    <div className="social-icons-contact">
                        {socialNetworks.map(el => (
                            <a href={el.url} key={el.name} title={el.name}>
                                <img src={el.icon} alt={el.name} />
                            </a>
                        ))}
                    </div>
                   
                </div>
                <p className='developed'>DESARROLLADO POR 'NICO & VALE' 😄</p>

            </section>
        </div>
    )
}

export default Contact

/*
 <div className="need-help-contact">
                        <HelpIcon />
                        <span>¿Necesitas ayuda?</span>
                    </div>
                    */
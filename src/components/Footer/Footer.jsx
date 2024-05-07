import React from "react";
import "../Footer/Footer.css";
import {Link} from "react-router-dom";
import LogoProject from "../assets/Logo.svg";
import Logofacebook from "../assets/facebook.svg";
import LogoInsta from "../assets/instagram.svg";
import LogoWhatsapp from "../assets/whatsapp.svg";
import LogoContact from "../assets/contact.svg";
import LogoMail from "../assets/mail.svg";
import LogoMap from "../assets/map.svg";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-body'>
          <div className="footer-body__block">
            <div className='left-block'>
              <div className='block_logo'>
                <img src={LogoProject} alt='logo' />
              </div>
              <div className='block_menu'>
                <h3>О компании</h3>
                <ul>
                  <li>
                    <Link to='/'>Главная</Link>
                  </li>
                  <li>
                    <Link to='/about-us'>О нас</Link>
                  </li>
                  <li>
                    <Link to='/advantages'>Преимущества</Link>
                  </li>
                  <li>
                    <Link to='/contacts'>Контакты</Link>
                  </li>
                  <li>
                    <Link to='/products'>О продукте</Link>
                  </li>
                  <li>
                    <Link to='/documents'>Документы</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='right-block'>
              <div className='block_social'>
                <h3>Соц.Сети</h3>
                <ul>
                  <li>
                    <img src={Logofacebook} alt='facebook' />
                    <a href='#'>Фейсбук</a>
                  </li>
                  <li>
                    <img src={LogoInsta} alt='Instagram' />
                    <a href='#'>Инстаграм</a>
                  </li>
                  <li>
                    <img src={LogoWhatsapp} alt='WhatsApp' />
                    <a href=''>WhatsApp</a>
                  </li>
                </ul>
              </div>
              <div className='block_contacts'>
                <h3>Контакты</h3>
                <ul>
                  <li>
                    <img src={LogoContact} alt='Contact' />
                    <a href='#'>+996 (777) 22-03-20</a>
                  </li>
                  <li>
                    <img src={LogoMail} alt='Mail' />
                    <a href=''>pki.office.kg@gmail.com</a>
                  </li>
                  <li>
                    <img src={LogoMap} alt='Map' />
                    <a href='#'>г.Бишкек, ул. Найманбаева 31</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='top-block'>
            <span>© 2024 ОсОО “Смарт счет”</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

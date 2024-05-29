import './Contacts.css';
import { Link } from "react-router-dom";
import inst_ic from "../../img/product_img/instagram.png"
import facebook_ic from "../../img/product_img/facebook.png"
import wathsapp_ic from "../../img/product_img/Whatsapp.png"


function Contacts() {
  return (
    <section className="Contacts">
      <ul className="content-list">
        <li className="content-list__item_1">
          <h2 className="title-1">Location</h2>
          <p>Kyrgyzstan, Karakol</p>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae6e14dd3be02147320ea82af5696df7de513eb1a7bb4574b3e0f0130c827d35f&amp;source=constructor" width="100%" height={450} ></iframe>
        </li>
        <li className="content-list__item_2">
          <h2 className="title-2">Telegram / WhatsApp</h2>
          <p>
            <Link to="tel:+996509190419">996 509 190 419</Link> <br/>
            <Link to="tel:+996509190419">996 509 190 419</Link>
          </p>
        </li>
        <li className="content-list__item_2">
          <h2 className="title-2">Email</h2>
          <p>
            <Link to="Email zunusalievardak@gmail.com">zunusalievardak@gmail.com</Link>
          </p>
        </li>
        <div className="Foot_links-wrap">
          <p className="Foot_tit">Links</p>
          <div className="Foot_links flex">
            <Link className="Foot_link Foot_link__inst">
              <img src={inst_ic} alt="" />
            </Link>
            <Link className="Foot_link Foot_link__fb">
              <img src={facebook_ic} alt="" />
            </Link>
            <Link className="Foot_link Foot_link__fb">
              <img src={wathsapp_ic} alt="" />
            </Link>
          </div>
        </div>
      </ul>
    </section>
  );
}

export default Contacts;
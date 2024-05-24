import './Contacts.css';
import { Link } from "react-router-dom";
import inst_ic from "../../img/product_img/instagram.png"
import facebook_ic from "../../img/product_img/facebook.png"


function Contacts() {
  return (
    <section className="Contacts">
      <ul className="content-list">
        <li className="content-list__item">
          <h2 className="title-1">Location</h2>
          <p>Kyrgyzstan,Karakol</p>
        </li>
        <li className="content-list__item">
          <h2 className="title-1">Telegram / WhatsApp</h2>
          <p>
            <a href="tel:+996509190419">996509190419 /</a>
            <a href="tel:+996509190419">996509190419</a>
          </p>
        </li>
        <li className="content-list__item">
          <h2 className="title-1">Email</h2>
          <p>
            <a href="mailtzunusalievardak@gmail.com">
              zunusalievardak@gmail.com
            </a>
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
            
          </div>
        </div>
      </ul>
    </section>
  );
}

export default Contacts;
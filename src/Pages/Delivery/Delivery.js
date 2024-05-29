import './Delivery.css';
import DeliveryImg from "../../img/product_img/Delivery.jpg"


function Delivery() {
  return (
    <section className="Delivery">
      <div className='container'>
        <div className="DeliveryTxt">
          <h1>Delivery</h1>
        </div>
       <img className='DeliveryImg' src={DeliveryImg} alt="" />
        <h1 className='DeliveryTxt_t'>"We are committed to providing our customers with convenient and reliable shipping to make your purchase as pleasant as possible. We offer nationwide shipping with convenient options including standard shipping and express shipping for those who appreciate speed in receiving their order. Our team of professionals works hard to ensure that your order is processed promptly and delivered to you as soon as possible. We also offer a convenient order tracking system so that you can always be aware of the delivery status. We hope that our service will meet your expectations and you will come back to us again for quality shoes and excellent service"</h1>
      </div>
    </section>
  );
}

export default Delivery;
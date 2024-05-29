import './About.css'
import AboutImg from "../../img/product_img/About.jpg"

function About() {
  return (
    <section className="About">
      <div className="container_About">
        <div className="About_Txt">
          <h1>About us</h1>
        </div>
        <div className="AboutImg">
          <img src={AboutImg} alt="" />
        </div>
        <div className='About_txt'>
          <h1 className='AboutTxt'>"Welcome to our online men's shoe store! 
            We are proud to offer high quality shoes for the modern man who values comfort, style and quality. Our mission is to help you look stylish and confident in any situation. We carefully select shoes from the best manufacturers to provide you with the best selection. Whether you are looking for classic office shoes, comfortable sneakers for an active lifestyle, or elegant boots for special occasions, we have what you need. Join us and emphasize your style with our shoes!"</h1>
        </div>
        <div className="AboutImg_brend">
          <img src="" alt="" />
        </div>
        .
      </div>
    </section>
  );
}

export default About;
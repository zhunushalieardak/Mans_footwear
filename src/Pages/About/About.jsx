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
          <p className='AboutTxt'>"Welcome to our online men's shoe store!
            We are proud to offer high quality shoes for the modern man who values comfort, style and quality. Our mission is to help you look stylish and confident in any situation. We carefully select shoes from the best manufacturers to provide you with the best selection. Whether you are looking for classic office shoes, comfortable sneakers for an active lifestyle, or elegant boots for special occasions, we have what you need. Join us and emphasize your style with our shoes!"</p>
        </div>

        <div className="About_our_card">
          <div className="container_our_card">
            <h2 class="sec_tit">Feedback from our clients</h2>
            <div class="our_cards flex">
              <div class="our_card">
                <div>
                  <h4 class="our_tit">
                    “Our quality of shouse ”
                  </h4>
                  <p class="our_txt">
                  “Very pleased with the quality of the shoes! The material is durable and looks expensive, the seams are neat, they don’t rub anything. The shoes are comfortable and fit perfectly on the feet. I recommend!”

                  </p>
                </div>
                <div class="our_customer flex">
                  <div class="our_img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlYNWyKBbun6mL-S4HTSJ2JyH9HdHRI5PITkJ-lXlBbQ&s" alt="" />
                  </div>
                  <div class="our_info">
                    <span class="our_name">John Smith</span>
                    <span class="our_address">Los Angeles, CA</span>
                  </div>
                </div>
              </div>

              <div class="our_card">
                <div>
                  <h4 class="our_tit">“About our store”
                  </h4>
                  <p class="our_txt">"I am very pleased with the purchase in this online store! A wide range of shoes for every taste and budget. The prices are reasonable, there are often promotions and discounts. The shoes arrived quickly and fully corresponded to the description on the website. I recommend it to everyone."
                  </p>
                </div>
                <div class="our_customer flex">
                  <div class="our_img">
                    <img src="https://news.uchicago.edu/sites/default/files/styles/square_feature/public/images/2023-10/Adam-Mastroianni-square.jpg?h=daa376fd&itok=YR0-YXHv" alt="" />
                  </div>
                  <div class="our_info">
                    <span class="our_name"> <b>Michael Johnson</b></span>
                    <span class="our_address">San Diego, CA</span>
                  </div>
                </div>
              </div>

              <div class="our_card">
                <div>
                  <h4 class="our_tit">“About our delivery”
                  </h4>
                  <p class="our_txt">
                  "The delivery of the shoes was excellent. The parcel arrived on time, the packaging was in good condition. The shoes fully corresponded to the description. Very satisfied!"

                  </p>
                </div>
                <div class="our_customer flex">
                  <div class="our_img">
                    <img src="https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q" alt="" />
                  </div>
                  <div class="our_info">
                    <span class="our_name"> <b>David Wilson</b></span>
                    <span class="our_address">San Francisco, CA</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
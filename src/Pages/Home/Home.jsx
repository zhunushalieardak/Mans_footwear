import "./Home.css";
import slideImg from "../../img/product_img/AdidasNew.jpg"
import slideImg2 from "../../img/product_img/PumaNew3.jpg"
import slideImg3 from "../../img/product_img/NIkeNew1.jpg"


function Home() {
  return (
    <>
      <section className="home_body">
        <div className="container">

          <h2 className="home_tit">New products</h2>

          <div className="container_h">

            <div class="card">
              <div class="face face1">
                <div class="content">
                  <div class="icon">
                    <img className="animation_img" src={slideImg} alt="" />
                  </div>
                </div>
              </div>
              <div class="face face2">
                <div class="content">
                  <p>Whether you're pounding the pavement or navigating the city, '80s runner, they feature plush BOOST cushioning for energy return with every step.</p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="face face1">
                <div class="content">
                  <div class="icon">
                    <img className="animation_img" src={slideImg2} alt="" />
                  </div>
                </div>
              </div>
              <div class="face face2">
                <div class="content">

                  <p>The PUMA Easy Rider was born in the late ‘70s, when running made its move from the track to the streets. Today it's back with</p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="face face1">
                <div class="content">
                  <div class="icon">
                    <img className="animation_img" src={slideImg3} alt="" />
                  </div>
                </div>
              </div>
              <div class="face face2">
                <div class="content">
                  <p>Bota Nike Shox TL posouvá mechanické tlumení na novou úroveň. Vylepšená verze kony z roku 2003 má svršek z prodyšné síťoviny. </p>
                </div>
              </div>
            </div>
          </div>

          <section className="">
            .container_
          </section>
        
        </div>
      </section>

    </>
  );
}


export default Home;
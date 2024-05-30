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

          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit necessitatibus eligendi iure sunt assumenda libero deserunt, adipisci facere obcaecati ratione nihil unde, minima eveniet quia harum quis similique et debitis ipsam quas aliquam repellat, nemo cum. Officia minus dolorum iure similique animi, eos libero natus delectus itaque quis facere voluptas. Omnis, at ratione. Dolorem cum ipsum officiis distinctio facilis, saepe hic vitae excepturi sequi. Inventore amet totam officia minima nihil tempora vel, itaque quas corrupti libero facere similique reprehenderit vero dolorum harum commodi ipsam excepturi officiis provident eaque. Impedit quidem voluptatibus, neque voluptate nulla cum eos quas numquam. Doloremque, odio nisi eius quis et, beatae accusamus modi magnam optio eveniet dolorum provident, consequatur iusto harum. Nam quos dolores doloribus ea quaerat molestias doloremque. Repellat provident atque voluptatum, animi rem quam quae quibusdam itaque distinctio maiores alias est ut exercitationem porro perspiciatis labore corrupti hic impedit velit, minima nesciunt quas dolorum ducimus veritatis. Officia fugiat illum obcaecati fugit, vel iste in earum placeat. Dignissimos nisi ad consequuntur ut veritatis doloribus excepturi autem eum nulla quo ab voluptates alias corporis facere suscipit, incidunt in repellendus blanditiis non animi accusamus illum! Alias assumenda ullam dolorum enim aliquid voluptate incidunt accusantium, beatae corrupti impedit.</p>

        </div>
      </section>

    </>
  );
}


export default Home;
import Screen from "./Screen.js"
export default class AboutScreen extends Screen {
  render() {
    return `
    <style>@import "./assets/styles/nav.css"</style>
    <style>@import "./assets/styles/about-us.css"</style>
    <header><navbar-component/></header>
    <div class="container-fluid">
    <h1 class="display-3 fw-bold mb-3 text-center">A propos de nous !</h1>
    <p class="lead mb-0 text-center">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque eius
      quis sapiente aperiam! Quas ducimus quaerat aut! Sed libero
      consequatur similique impedit commodi aliquam! Omnis quisquam fuga
      accusamus amet aliquid.
    </p>
  </div>
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-6">
        <div
          id="carouselExampleFade"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="assets/img/about/photo3.jpg"
                class="d-block w-100 img-fluid"
                alt="photo3"
              />
            </div>
            <div class="carousel-item">
              <img
                src="assets/img/about/interieur.jpg"
                class="d-block w-100 img-fluid"
                alt="interieur"
              />
            </div>
            <div class="carousel-item">
              <img
                src="assets/img/about/plat1.jpg"
                class="d-block w-100 img-fluid"
                alt="plat1"
              />
            </div>
            <div class="carousel-item">
              <img
                src="assets/img/about/plat2.jpg"
                class="d-block w-100 img-fluid"
                alt="plat2"
              />
            </div>
            <div class="carousel-item">
              <img
                src="assets/img/about/plat3.jpg"
                class="d-block w-100 img-fluid"
                alt="plat3"
              />
            </div>
            <div class="carousel-item">
              <img
                src="assets/img/about/pain-choc.jpeg"
                class="d-block w-100 img-fluid"
                alt="pain-choc"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="col-md-6">
        <div class="text-center">
          <h2 class="fw-bold mb-3 mt-3">Ce qu'on fait</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Doloremque officiis amet et, deleniti error, eum nulla maxime
            nobis numquam consequatur quo in vitae quia architecto
            repudiandae cumque, molestias ea sequi! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Officiis, laboriosam minus
            beatae deserunt debitis amet tempore voluptas perferendis
            nesciunt sapiente. Doloremque iure ipsam consectetur asperiores
            commodi quis natus repellat saepe. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Voluptate hic ipsam est sequi, quo
            cumque itaque enim exercitationem nam rerum dolorum officia
            sint. Quas eius quae consequatur, voluptatum aut nulla. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            porro fugit. Perspiciatis laborum, iste reiciendis facilis qui
            veniam enim iusto necessitatibus rem cumque voluptate maxime
            minima impedit officia, sunt neque?
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="container mt-5" data-aos="fade-up" data-aos-duration="1000">
    <h2 class="fw-bold mb-3 mt-3 text-center">La team de choc</h2>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col d-flex justify-content-center">
        <div class="card mt-3" style="width: 15rem">
          <img
            src="/assets/img/about/profil-solen.jpg"
            class="card-img-top"
            alt="profil-solen"
          />
          <div class="card-body">
            <h5 class="card-title text-center">Solen a la cantine</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div class="col d-flex justify-content-center">
        <div class="card mt-3" style="width: 15rem">
          <img
            src="/assets/img/about/profil-theo.jpg"
            class="card-img-top"
            alt="profil-theo"
          />
          <div class="card-body">
            <h5 class="card-title text-center">Théotudors?</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div class="col d-flex justify-content-center">
        <div class="card mt-3" style="width: 15rem">
          <img
            src="/assets/img/about/profil-antoine.jpg"
            class="card-img-top"
            alt="profil-antoine"
          />
          <div class="card-body">
            <h5 class="card-title text-center">Antoine C le troll</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer><footer-component/></footer>
`;
  }
}
customElements.define("about-screen", AboutScreen);

import Screen from "./Screen.js";

export default class AboutScreen extends Screen {
  render() {
    return `<style>@import "./assets/styles/nav.css"</style>
    <style>@import "./assets/styles/footer.css"</style>
    <style>@import "./assets/styles/about-us.css"</style>
    <header>
    <navbar-component/>
    </header>
    <div class="container-fluid">
    <h1 class="display-3 fw-bold mb-3 text-center">A propos de nous !</h1>
    <p class="lead mb-0 text-center">
    Bienvenue au Sat'Urday, un restaurant de tapas né de l'amitié et de la passion partagée pour les jeux vidéo et la bonne cuisine. 
    Créé il y a cinq ans par une bande de gamers gourmands, notre établissement incarne la convivialité, l'accessibilité et l'humour.
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
          Le Sat'Urday a vu le jour il y a cinq ans, grâce à l'initiative de trois amis inséparables : 
          Solen, Antoine et Théo. Unis par leur passion commune pour les pains au chocolat et leur amour de la bonne nourriture, 
          ils ont décidé de créer un lieu où ces deux univers se rencontrent. Ainsi est né notre restaurant de tapas, 
          un endroit où convivialité et plaisir sont au rendez-vous, et où la chocolatine n'existe pas.<br>
          Au Sat'Urday, nous croyons que la bonne cuisine doit être accessible à tous et se savourer dans la bonne humeur.<br>
          Nous avons créé un environnement chaleureux et accueillant où chacun se sent comme à la maison.
          Nos tapas sont conçus pour être partagés et appréciés par tous, quel que soit leur budget.<br>
          La vie est trop courte pour être prise trop au sérieux : chez nous, le rire, la bonne humeur, et les pains au chocolat sont toujours au menu.<br>
          Alors venez partager un moment unique avec nous et découvrez pourquoi le Sat'Urday est bien plus qu'un simple restaurant de tapas !
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
            <h5 class="card-title text-center">Solenix à la cantinix</h5>
            <p class="card-text">
            Notre gourmande en chef, Solenix la gauloise adore manger.
            Son endroit préféré dans la maison est la cuisine. 
            Sa joie de vivre et sa passion pour la cuisine se reflètent dans chaque plat que nous servons.
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
            Gamer professionnel, Théo possède un sens aigu du goût et du détail. 
            Son expertise et son amour des jeux se traduisent par une expérience culinaire unique et ludique.
            Rassurez-vous, Théotudors ne dort pas vraiment.
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
            Le maestro de la cuisine, Antoine est reconnu pour ses talents culinaires. 
            Il est célèbre pour posséder la plus belle caravane de Stardew Valley ! 
            Ses créations gastronomiques sont un véritable régal pour les papilles.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer>
  <footer-component/>
  </footer>`;
  }
}
customElements.define("about-screen", AboutScreen);

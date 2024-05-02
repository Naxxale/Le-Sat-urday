export default class HomeScreen extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = this.render();
    }
    render() {
        return `<div class="horizontal-line-nav"></div>
        <div class="firstContent">
            <img src="./assets/img/firstBackground.jpg" alt="">
            <h1>Envie de passez une bonne soirée <span class="underline">entre amis</span> ? <box-icon class="sun" name='sun' animation='tada' color='#221a43' ></box-icon></h1>
        </div>
        <div class="horizontal-line"></div>
        <h2>Notre Menu</h2> 
        <div class="menu">  
            <div class="book">
                <div class="listeMenu">
                    <h3>Titre</h3>
                    <li>Chocolatine</li>
                    <hr>
                    <li>Chocolatine</li>
                    <hr>
                    <li>Chocolatine</li>
                    <hr>
                    <li>Chocolatine</li>
                    <hr>
                    <li>Chocolatine</li>
                </div> 
                <div class="cover">
                    <h3 class="underline">Menu Semaine</h3>
                </div>
            </div>
            <button class="button"> 
                En savoir plus
            </button>
            <div class="book">
                <div class="listeMenu">
                    <h3>Titre</h3>
                    <li>Chocolatine</li>
                    <hr>
                    <li>Chocolatine</li>
                    <hr>
                    <li>Chocolatine</li>
                    <hr>
                    <li>Chocolatine</li>
                    <hr>
                    <li>Chocolatine</li>
                </div> 
                <div class="cover">
                    <h3 class="underline">Menu Sat'Urday</h3>
                </div>
            </div>
        </div>

        <div class="aboutUs">

        </div>`;
    }
}

customElements.define("home-screen", HomeScreen);
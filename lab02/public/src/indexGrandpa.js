import * as components from './components/indexFather.js';
import { newsCardsData } from './data/newsCardsData/newsCardsData.js';

class Container extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const container = document.createElement('div');
    container.classList.add('news-cards-container');
    this.shadowRoot.innerHTML = `<have-fun></have-fun>` + `
      <link rel="stylesheet" href="./src/components/newsCards/newsCards.css">
      <navbar-component></navbar-component>
      <banner-component
        img="ttps://www.muycomputer.com/wp-content/uploads/2023/05/nuevo-Call-of-Duty.jpg"
        alt="Call of Duty Black Ops 6 character"
        logo="https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/blackops6/common/black-ops-6-full-logo.png"
        description="Obligados a rebelarse. Perseguidos desde dentro.Esto es Black Ops 6."
        button00="RESERVA BO6"
        button01="VISITAR SITIO"
      ></banner-component>
    
      <section class="featured-news">
        <news-logos
          text="Últimas noticias y artículos"
          text2="All news"
          img1="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/activision-logo-small.svg"
          img2="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/cod-logo.svg"
          img3="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/thps-logo.png"
          img4="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/crash-bandicoot-logo.png"
        ></news-logos>
      </section>
    `;
    
    newsCardsData.forEach((e) => {
      const newsCard = document.createElement('news-cards');
      newsCard.setAttribute('image', e.image);
      newsCard.setAttribute('date', e.date);
      newsCard.setAttribute('title', e.title);
      container.appendChild(newsCard);
    });
    
    const featuredNews = this.shadowRoot.querySelector('.featured-news');
    featuredNews.appendChild(container);
    
    container.innerHTML += `
            <div class="button-view-all">
                <div class="button-login">
                    <a href="index.html"> Ver Todo</a>
                </div>
            </div>
    `;
    
    this.shadowRoot.innerHTML += `
            <support-banner
            title="¡Estamos aquí para ayudar!"
            description='Obtén respuestas a las preguntas más frecuentes, comprueba el estado del servidor y contacta con alguien experto en asistencia técnica.'
            image='https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/support-banner-v3.jpg'>
            </support-banner>

<link rel="stylesheet" href="./src/components/community/community.css">
<section class="shadow-container">     
  <h1 class="h1-community">Comunidad</h1>   
  <div class="shadow-card-container">
    <community-component
      img="https://i.insider.com/5e791c6f0c2a62580c17c4c8?width=1200&format=jpeg"
      username="@call of duty"
      icon="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png"
    ></community-component>

    <community-component
      img="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/es_LA/games/switch/c/crash-bandicoot-4-its-about-time-switch/hero"
      username="@Activision Gaming"
      icon="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png"
    ></community-component>

    <community-component
      img="https://image.api.playstation.com/vulcan/ap/rnd/202306/2400/ac505d57a46e24dd96712263d89a150cb443af288c025ff2.jpg"
      username="@Activision Publishing"
      icon="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png"
    ></community-component>
  </div>
</section>

<havefun-component
    <div class="have-fun__container__left">
        <h2>Diviertete</h2>
        <p>Más Información Sobre Las Oportunidades De Empleo</p>
            <div class="button-view-all">
                <div class="button-login">
                    <a href="index.html">ÚNETE A NOSOTROS</a>
                </div>
            </div>
    </div>
    <div class="have-fun__container__right">
        <h3>NUESTROS EQUIPOS</h3>    
        <ul>
            <li>DISEÑO DE JUEGO</li>
            <li>GRÁFICOS Y ANIMACIÓN</li>
            <li>GESTIÓN DE MARCA</li>
            <li>PRODUCCIÓN</li>
            <li>CONTROL DE CALIDAD</li>
            <li>DISEÑO DE JUEGO</li>
            <li>GESTIÓN DE MARCA</li>
            <li>GRÁFICOS Y ANIMACIÓN</li>
            <li>DISEÑO DE JUEGO</li>
            <li>PRODUCCIÓN</li>
        </ul>
    </div>
></havefun-component>
  
    `
  }
}

customElements.define('app-container', Container);
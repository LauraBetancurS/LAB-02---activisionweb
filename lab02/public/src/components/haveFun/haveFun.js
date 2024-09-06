class HaveFun extends HTMLElement {
    static get observedAttributes() {
        return ['h2', 'description', 'teams', 'li00', 'li01', 'li02', 'li03', 'li04', 'li05', 'li06', 'li07', 'li08', 'li09']
    }

    constructor() {
        super()
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render()
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        if (oldValue !== newValue) {
            this[propName] = newValue
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
<link rel="stylesheet" href="./src/components/haveFun/haveFun.css"> 
<section class="havefunbanner">
    <div class="havefunbannercontainer-left">
        <h2>Diviertete</h2>
        <p>Más Información Sobre Las Oportunidades De Empleo</p>
            <div class="button-view-all">
                <div class="button-join">
                    <a href="index.html">ÚNETE A NOSOTROS</a>
                </div>
            </div>
    </div>
    <div class="havefunbanner__container__right">
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
</section>
        `
    }
}

customElements.define('havefun-component', HaveFun)
export default HaveFun
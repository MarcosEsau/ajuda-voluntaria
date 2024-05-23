// Section1.js
import './index.css'

export default function Section1({ title, text, imageUrl, buttonLink }) {
    return (
        <div id="site">
            <div className="InfoSite">
                <h1 className="TituloSite">{title}</h1>
                <p className="TextoSite">{text}</p>
                <button id="BotaoSite">
                    <a href={buttonLink} target="_blank" rel="noopener noreferrer">Acesse o Site</a>
                </button>
            </div>
            <div className="ImagemSite">
                <img src={imageUrl} alt="Imagem do Site" />
            </div>
        </div>
    )
}

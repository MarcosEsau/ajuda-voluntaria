// Section1.
import './style.css'

export default function Section2({ title, text, imageUrl, buttonLink }) {
    return (
        <div id="site">

            <div className="ImagemSite">
                <img src={imageUrl} alt="Imagem do Site" />
            </div>
            <div className="InfoSite">
                <h1 className="TituloSite">{title}</h1>
                <p className="TextoSite">{text}</p>
                <a href={buttonLink} target="_blank" rel="noopener noreferrer">Acesse o Site</a>
            </div>
        </div>
    )
}

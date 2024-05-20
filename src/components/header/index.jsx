import './style.css'

export default function Header() {
    return(
      <header className="header">
        <span className="ajuda-bg">Ajuda Voluntária</span>
        <h1 className="ajuda-title"><span className="ajuda-span">Ajuda</span> Voluntária</h1>
        <nav className='nav-bar'>
            <ul>
                <li><a id="inicio" href="default.asp">Início</a></li>
                <li><a id="noticias" href="news.asp">Notícias</a></li>
                <li><a id="Contato" href="contato.asp">Contato</a></li>
                <li><a id="Sobre" href="sobre.asp">Sobre</a></li>
            </ul>
          </nav>
     </header>
    )
}
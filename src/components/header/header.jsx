import './style.css'

export default function Header() {
    return(
      <header className="header">
        
          <span className="esperanca-bg gradient">Esperança rs</span>
          <h1 className="esperanca-title">esperança<span className="esperanca-span">rs</span></h1>

          <nav>
              <ul className='nav-bar'>
                  <li><a id="inicio" href="default.asp">Início</a></li>
                  <li><a id="noticias" href="news.asp">Notícias</a></li>
                  <li><a id="Contato" href="contato.asp">Contato</a></li>
                  <li><a id="Sobre" href="sobre.asp">Sobre</a></li>
              </ul>
            </nav>
     </header>
    )
}
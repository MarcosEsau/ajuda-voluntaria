import './style.css'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

    console.log(location.pathname)

  useEffect(() => {
    if (location.pathname === '/') {
      setOpen(true);
    }
  }, [location]);

  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'black',
    boxShadow: 24,
    p: 4,
  };

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
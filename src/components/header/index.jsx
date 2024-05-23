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
                  <li><a id="inicio" href="/">Infos</a></li>
                  <li><a id="noticias" href="/doar">Materias</a></li>
                  <li><a id="Contato" href="/dinheiro">Dinheiro</a></li>
                  <li><a id="Sobre" href="/sobre">Sobre</a></li>
              </ul>
            </nav>
          <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h1
          style={{
            borderBottom: '3px solid #2D971C',
            paddingBottom: '20px',
            textAlign: 'center',
            fontSize: 30,
            color: 'white',
            marginBottom: 15,
          }}
        >
          AJUDA VOLUNTÁRIA
        </h1>
        <p style={{ color: 'white' }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </p>
      </Box>
    </Modal>
     </header>
    )
}
import * as React from 'react';
import './index.css'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal'
import 'reactjs-popup/dist/index.css';
import { useEffect } from 'react';


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

export default function Index() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

    useEffect(() => {
        const handleOpen = () => setOpen(true);
        handleOpen()
  }, []);

    return (
        <div className="body">
            <div>
                <div></div>
            </div>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <h1 style={{borderBottom: '3px solid red', paddingBottom: '20px', textAlign: 'center', fontSize: 30, color: 'white'}}>AJUDA VOLUNTÁRIA</h1>
                <p style={{color: 'white'}}>
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
        </div>
    )
}
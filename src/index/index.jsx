import * as React from 'react';
import './index.css'

import 'reactjs-popup/dist/index.css';
import Section1 from '../components/Section';

export default function Index() {

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
            <Section1>
            </Section1>
        </div>
    )
}
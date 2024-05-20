import React from 'react';

const style = {
    border: '3px solid #3A931C', 
    padding: 15, 
    borderRadius: 20, 
    backgroundColor: '#D7F9CC',
    cursor: 'pointer',
    textAlign: 'center',
    display: 'inline-block',
    color: 'black',
    textDecoration: 'none',
    transition: '0.2s ease-in',
    marginTop: 10
};

const hoverStyle = {
    ...style,
    backgroundColor: '#C1E8A8' 
};

export default function ErrorPage() {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div style={{display: 'grid', justifyItems: 'center', alignContent: 'center', height: '100vh'}}>
            <h1 style={{fontSize: 130}}>40<span style={{color: '#3A931C'}}>4</span></h1>
            <p style={{fontSize: 25, marginTop: -20}}>Pagina não <span style={{color: '#3A931C', textTransform: 'lowercase  '}}>encontrada</span></p>
            <a 
                style={isHovered ? hoverStyle : style}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                href="/"
            >
                Pagina Inicial
            </a>
        </div>
    );
}

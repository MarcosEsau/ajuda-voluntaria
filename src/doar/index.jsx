import React from "react"
import './style.css'
import Section1 from '../components/Section';

export default function Doar() {
    return (
        <section>
            <h1 style={{marginBottom: 50}}>Doações de Materiais</h1>
            <div className="infos">
                <Section1
                    title={'Ajuda RS'}
                    text={'Reúne informações de locais que servem de abrigos e pontos de coleta em todo estado.'}
                    imageUrl={'https://ajudars.com.br/wp-content/uploads/2024/05/Asset-1.png'}
                    buttonLink={'https://ajudars.com.br/'}
                />
            </div>
        </section>
    )
}
import Section1 from "../components/Section"
import Section2 from "../components/Section2"

export default function Dinheiro() {
    return(
        <section>
            <h1>Doações monetarias</h1>
            <Section1
                    title={'Vakinha'}
                    text={'Vaquinha para ajudar o empreendedorismo solidário com uma meta de 20mil reais.'}
                    imageUrl={'https://static.vakinha.com.br/uploads/vakinha/image/392079/mtitecnologia-vakinha-com.png?ims=700x410'}
                    buttonLink={'https://www.vakinha.com.br/vaquinha/que-tal-apoie-rs-solidariedade-para-bairros-empreendedores-e-comunidades-locais  '}
                />
            <Section2
                    title={'Para quem doar'}
                    text={'Site para doar algum valor em dinheiro para ajudar o Rio Grande do Sul. '}
                    imageUrl={'https://s2-redeglobo.glbimg.com/hzpEj4hvzRQ5VINaCItpLK6-Qlg=/1200x/smart/filters:cover():strip_icc()/s02.video.glbimg.com/x720/8487745.jpg'}
                    buttonLink={'https://emergencia.paraquemdoar.com.br/?ref=home_banner'}
                />
        </section>
    )
}
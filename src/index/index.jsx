import Section1 from '../components/Section';
import Section2 from '../components/Section2';

export default function Index() {

    return (
        <div className="body">
            <div> 
                <Section1
                 title={'sos enchentes'}
                  text={'Mostra vários pontos de coletas espalhados por todos os lugares atingidos, site mostra o que pode ser doado e pode cadastrar um ponto de doação novo e fazer doações por pix ou entrega de suprimentos para pontos de coletas.  '}
                  imageUrl={'https://sosenchentes.rs.gov.br/upload/recortes/202309/19160547_1450_GD.png'} 
                  buttonLink={'https://sosenchentes.rs.gov.br/inicial'} 
                  />
                <Section2
                 title={'terra'}
                  text={'Mostra onde ajudar como ajudar. O que doar e como participar do formulário de participação.  '}
                  imageUrl={'https://upload.wikimedia.org/wikipedia/commons/3/31/Logotipo_terra_2022.png'} 
                  buttonLink={'https://www.terra.com.br/byte/como-ser-voluntario-no-rio-grande-do-sul,eac834af55ff520c0a3c9d8afc24d9c7k9je542k.html#:~:text=Acesse%20casamilitar%2Drs.com.,Pressione%20%22Cadastrar%22'} 
                  />
                <Section1
                 title={'ação cidadania'}
                  text={'Site onde podem ser feitas contribuições financeiras para o estado. '}
                  imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCZIcRG1L4WaYaaJSiodJoLcCH8oAwjOCUxZ4vB_-I9Q&s'} 
                  buttonLink={'https://www.acaodacidadania.org.br/'} 
                  />
                  <Section2
                 title={'sos vale do taquari'}
                  text={'Aqui tem todos os pontos de coleta no vale do taquari.'}
                  imageUrl={'https://www.sosvaledotaquari.com.br/images/img-share.png'} 
                  buttonLink={'https://sosvaledotaquari.com.br/'} 
                  />
                  <Section1
                 title={'gzn'}
                  text={'Mostra como e onde doar para abrigos de animais resgatados da enchente no RS. '}
                  imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6zrTJlHW3yBpwagSwF8fn0KlZCjyiWRpjQ6MoeEXzWQ&s'} 
                  buttonLink={'https://gauchazh.clicrbs.com.br/ambiente/noticia/2024/05/veja-como-e-onde-doar-para-abrigos-de-animais-resgatados-da-enchente-no-rs-clw19d7v000v0011hqol931dc.html'} 
                  />
                  <Section2
                 title={'brasil escola'}
                  text={'Notícia onde doar e o que precisa doar.  '}
                  imageUrl={'https://brasilescola.uol.com.br/assets/images/logos/logo-br-escola.webp'} 
                  buttonLink={'https://brasilescola.uol.com.br/noticias/doacoes-para-rio-grande-do-sul-confira-onde-ajudar-de-forma-presencial-e-on-line/3131269.html'} 
                  />
                  <Section1
                 title={'uol'}
                  text={'O site ajuda as pessoas de outros estados, que querem ajudar, a saber como podem ajudar e onde doar.'}
                  imageUrl={'https://upload.wikimedia.org/wikipedia/commons/b/bd/UOL_logo.png'} 
                  buttonLink={'https://www.uol.com.br/ecoa/ultimas-noticias/2024/05/05/chuvas-no-rs-veja-como-ajudar-as-vitimas-dos-temporais-que-afetam-o-estado.htm'} 
                  />
                  <Section2
                 title={'Tôsalvo'}
                  text={'Site que ajuda pessoas resgatadas das enchentes a localizar familiares e amigos desaparecidos.'}
                  imageUrl={'https://ugc.production.linktr.ee/4a758ff2-c4f8-4dc0-9593-5a9e96e235c0_Logo-Cr-nicas.png'} 
                  buttonLink={'https://www.tosalvo.ong.br/'} 
                  />
            </div>
        </div>
    )
    
}

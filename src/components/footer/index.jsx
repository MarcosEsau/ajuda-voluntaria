export default function Footer() {
    return(
        <div style={{display: 'flex', backgroundColor: 'black', padding: 20, justifyContent: 'space-between', alignItems: 'center'}}>
            <p style={{color: 'white'}}>
                Pagina desenvolvida pelo 2 ano do ensimo Médio Senac SCS <br/>
                2024
            </p>
            <div style={{textAlign: 'center', color: 'white', textDecoration: 'underline'}}>
                <a href="https://senacscs.github.io/t3/">Outros sites da Turma</a><br/><br/>
                <a href="https://github.com/senacscs/t3">Github</a>
            </div>
        </div>
    )
}
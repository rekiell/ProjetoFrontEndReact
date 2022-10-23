function MenuCapitais () {
    const cidades = ["Rio de janeiro", "São Paulo", "Belo Horizonte", "Brasília", "Belém",
    "Salvador", "Curitiba", "Fortaleza", "Manaus", "João Pessoa"]
    const listaCidades = cidades.map ((cidadestemp)=>
        <li> {cidadestemp} </li>
    )
    return (
        <main>
            <div className="listaDasCapitais">
            <hr/>
            <h2>Capitais</h2>
            <p>Min Máx</p>
            </div>
            <div className="lista_cidades">
                <ul> {listaCidades} </ul>
            </div>
        </main>

    )
}

export default MenuCapitais
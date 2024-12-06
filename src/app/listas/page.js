export default function Listas (){
    const nomes = ['Cinnamoroll','Kuromi','My Melody','Hello Kitty','Batz Maru']
    const carros = [
        {
            id: 1,
            modelo: 'Fusca',
            ano: 1975,
            cor: 'Rosa'
        },
        {
            id: 2,
            modelo: 'Corolla',
            ano: 2022,
            cor: 'Preto'
        },
        {
            id: 3,
            modelo: 'Camaro',
            ano: 2019,
            cor: 'Amarelo'
        },
        {
            id: 4,
            modelo: 'S10',
            ano: 2020,
            cor: 'Prata'
        },
        {
            id: 5,
            modelo: 'Mustang',
            ano: 2023,
            cor: 'Branco'
        }
    ]

    return (
        <div>
            <h1>Listas</h1>
            <h2 style={{marginLeft:'15px', marginTop:'25px'}}>Lista Comum</h2>
            <ul style={{marginLeft:'40px', marginTop:'15px'}}>
                {nomes.map((nome, id) => (
                    <li key={id}>{id+1} - {nome}</li>
                ))}
            </ul>
            <div>
                <h2 style={{marginLeft:'15px', marginTop:'25px'}}>Lista de objetos</h2>
                {
                    carros.map((carro)=>(
                        <div style={{marginLeft:'15px', marginTop:'15px'}} key={carro.id}>
                            <h3>{carro.id} - {carro.modelo}</h3>
                            <p>Cor: {carro.cor}</p>
                            <p>Ano: {carro.ano}</p>
                        </div>    
                    ))
                }
            </div>
        </div>
    )
}
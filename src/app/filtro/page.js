"use client";
import { useState } from 'react';

export default function Filtro(){

    const nums = [1,2,3,4,5,6,7,8,9,10];
    const pares = nums.filter((num) => (num % 2 === 0));

    const nomes = ['Ana Gabriely', 'Ana Paula', 'Isabella', 'Leticia', 'Priscila', 'Thamylla'];

    const [busca, setBusca] = useState('')
    const nomesBusca = nomes.filter((nome) => (nome.toLowerCase().includes(busca.toLowerCase())))

    console.log(nums);
    console.log(pares);

    return(
        <div>
            <h1>Filtro</h1>
            <input
                value={busca}
                type="text"
                onChange={(ev) => setBusca(ev.target.value)}
            />
            {
                nomesBusca.map((nome) => (
                    <li style={{marginLeft:'15px', marginTop:'15px'}}>{nome}</li>
                ))}
        </div>
    )
}
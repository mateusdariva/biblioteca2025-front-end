import TituloLista from "../componentes/TítuloLista";
import axios from "axios";
import {useState, useEffect } from "react";

export default function ListaEditora(){
    //Declarando uma variavel useState
    const [dados, setDados] =  useState([]);

    const listar = async () => {
      let { data } = await axios.get('http://localhost:4000/editora');
      setDados(data); 
    }

    useEffect( ()=>{
      listar ();
    }, []);

    return (
        <>
            <TituloLista titulo ="Editoras" 
            descricao="Gerencia aqui as editoras dos livros da bilbioteca"
            rota="/cadastroeditora"/>


            <>
  {/* Tabela */}
  <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nome Editora</th>
        <th scope="col">CNPJ</th>
        <th scope="col">Endereço</th>
      </tr>
    </thead>
    <tbody>
      { dados.map( (d, i)=>(
          <tr>
        <td>
          <a className = "btn btn-primary" href={`/cadastroeditora/${d.ideditora}`}> Alterar</a>
        </td>
        <td>{d.nomeeditora}</td>
        <td>{d.cnpj}</td>
        <td>{d.endereco}</td>
      </tr>
      ) ) }
    </tbody>
  </table>
</>

        </>
    );
};
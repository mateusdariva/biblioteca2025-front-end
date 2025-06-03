import TituloLista from "../componentes/TítuloLista";
import axios from "axios";
import {useState, useEffect } from "react";

export default function ListaLivro(){
    //Declarando uma variavel useState
    const [dados, setDados] =  useState([]);

    const listar = async () => {
      let { data } = await axios.get('http://localhost:4000/livro');
      setDados(data); 
    }

    useEffect( ()=>{
      listar ();
    }, []);

    return (
        <>
            <TituloLista titulo ="Livros" 
            descricao="Gerencia aqui os livros da bilbioteca"
            rota="/cadastrolivro"/>


            <>
  {/* Tabela */}
  <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">ID Livro</th>
        <th scope="col">Título do livro</th>
        <th scope="col">Ano de publicação</th>
        <th scope="col">Categoria</th>
        <th scope="col">Editora</th>
        <th scope="col">Número de edição</th>
      </tr>
    </thead>
    <tbody>
      { dados.map( (d, i)=>(
          <tr>
        <td>
          <a className = "btn btn-primary" href={`/cadastrolivro/${d.idlivro}`}> Alterar</a>
        </td>
        <td>{d.idlivro}</td>
        <td>{d.titulo}</td>
        <td>{d.publicacao}</td>
        <td>{d.idcategoria}</td>
        <td>{d.ideditora}</td>
        <td>{d.edicao}</td>
      </tr>
      ) ) }
    </tbody>
  </table>
</>

        </>
    );
};
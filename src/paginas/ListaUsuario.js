import TituloLista from "../componentes/TítuloLista";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ListaUsuario() {
  const [dados, setDados] = useState([]);

  const listar = async () => {
    const { data } = await axios.get("http://localhost:4000/usuario");
    setDados(data);
  };

  useEffect(() => {
    listar();
  }, []);

  return (
    <>
      <TituloLista
        titulo="Usuários"
        descricao="Gerencia aqui os usuários da bilbioteca"
        rota="/cadastrousuario"
      />

      {/* Tabela */}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ID Usuários</th>
            <th scope="col">Nome do Usuário</th>
            <th scope="col">E-mail</th>
            <th scope="col">Telefone</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((d, i) => (
            <tr key={d.idusuario}>
              <td>
                <a className="btn btn-primary" href={`/cadastrousuario/${d.idusuario}`}>
                  Alterar
                </a>
              </td>
              <td>{d.idusuario}</td>
              <td>{d.nome}</td>
              <td>{d.email}</td>
              <td>{d.telefone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

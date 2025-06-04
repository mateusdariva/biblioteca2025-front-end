import TituloLista from "../componentes/TítuloLista";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ListaFuncionario() {
  const [dados, setDados] = useState([]);

  const listar = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/funcionario");
      setDados(data);
    } catch (error) {
      console.error("Erro ao listar funcionários:", error);
      alert("Erro ao carregar dados dos funcionários.");
    }
  };

  useEffect(() => {
    listar();
  }, []);

  return (
    <>
      <TituloLista
        titulo="Funcionários"
        descricao="Gerencie aqui os funcionários da biblioteca"
        rota="/cadastrofuncionario"
      />

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ID Funcionário</th>
            <th scope="col">Nome</th>
            <th scope="col">E-mail</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((d) => (
            <tr key={d.idfuncionario}>
              <td>
                <a
                  className="btn btn-primary"
                  href={`/cadastrofuncionario/${d.idfuncionario}`}
                >
                  Alterar
                </a>
              </td>
              <td>{d.idfuncionario}</td>
              <td>{d.nome}</td>
              <td>{d.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

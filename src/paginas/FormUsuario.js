import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import TituloCadastro from "../componentes/TituloCadastro";

export default function FormUsuario() {
  const navegacao = useNavigate();
  const { id } = useParams();

  const [nome, setNome] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");

  const voltar = () => {
    navegacao("/listausuario");
  };

  const selecionar = async () => {
    try {
      const { data } = await axios.get(`http://localhost:4000/usuario/${id}`);
      setNome(data.nome);
      setNascimento(data.nascimento);
      setCpf(data.cpf);
      setEmail(data.email);
      setTelefone(data.telefone);
      setSenha(data.senha);
    } catch (error) {
      console.error("Erro ao carregar usuário:", error);
      // opcional: alert ou outra notificação
    }
  };

  const alterar = async () => {
    try {
      const body = { nome, nascimento, cpf, email, telefone, senha };
      await axios.put(`http://localhost:4000/usuario/${id}`, body);
    } catch (error) {
      console.error("Erro ao alterar usuário:", error);
    }
  };

  const inserir = async () => {
    try {
      const body = { nome, nascimento, cpf, email, telefone, senha };
      await axios.post(`http://localhost:4000/usuario`, body);
    } catch (error) {
      console.error("Erro ao inserir usuário:", error);
    }
  };

  const salvar = async () => {
    if (id) {
      await alterar();
    } else {
      await inserir();
    }
    voltar();
  };

  const excluir = async () => {
    try {
      await axios.delete(`http://localhost:4000/usuario/${id}`);
      voltar();
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
    }
  };

  useEffect(() => {
    if (id) {
      selecionar();
    }
  }, [id]);

  return (
    <>
      <TituloCadastro id={id} titulo="Usuário" />
      <form>
        <div className="mb-3">
          <label className="form-label">Código</label>
          <input type="text" className="form-control" value={id || ""} disabled />
        </div>

        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Nascimento</label>
          <input
            type="text"
            className="form-control"
            value={nascimento}
            onChange={(e) => setNascimento(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">CPF</label>
          <input
            type="text"
            className="form-control"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">E-mail</label>
          <input
            type="text"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Telefone</label>
          <input
            type="text"
            className="form-control"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Senha</label>
          <input
            type="password"
            className="form-control"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <button type="button" className="btn btn-primary" onClick={salvar}>
          Salvar
        </button>
        <button type="button" className="btn btn-secondary" onClick={voltar}>
          Cancelar
        </button>
        {id && (
          <button type="button" className="btn btn-danger" onClick={excluir}>
            Excluir
          </button>
        )}
      </form>
    </>
  );
}

import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import TituloCadastro from "../componentes/TituloCadastro";

export default function Funcionario(){
    const navegacao = useNavigate();
    const { id } = useParams();
    const [nomefuncionario, setNomeFuncionario] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [salario, setSalario] = useState('');
    const [contratacao, setContratacao] = useState('');
    const [demissao, setDemissao] = useState('');
    const [ativo, setAtivo] = useState('');
    const [senha, setSenha] = useState('');
    const [token, setToken] = useState('');


    const voltar = () => {
        navegacao('/listafuncionario')
    };

    const selecionar = async () => {
      let { data } = await axios.get(`http://localhost:4000/funcionario/${id}`);
      setNomeFuncionario(data.nomefuncionario);
      setCpf(data.cpf);
      setEmail(data.email);
      setTelefone(data.telefone);
      setNascimento(data.nascimento);
      setSalario(data.salario);
      setContratacao(data.contratacao);
      setDemissao(data.demissao);
      setAtivo(data.ativo); 
      setSenha(data.senha);
      setToken(data.token);
    }

    const alterar = async () => {
      let body = {
          "nomefuncionario": nomefuncionario,
          "cpf": cpf,
          "email": email,
          "telefone": telefone,
          "nascimento": nascimento,
          "salario": salario,
          "contratacao":contratacao,
          "demissao": demissao,
          "ativo": ativo,
          "senha": senha,
          "token": token
          
      }

      await axios.put(`http://localhost:4000/funcionario/${id}`, body);
      voltar();
    }

    const inserir = async () => {
      let body = {
          "nomefuncionario": nomefuncionario,
          "cpf": cpf,
          "email": email,
          "telefone": telefone,
          "nascimento": nascimento,
          "salario": salario,
          "contratacao":contratacao,
          "demissao": demissao,
          "ativo": ativo,
          "senha": senha,
          "token": token
      }

      await axios.post(`http://localhost:4000/funcionario`, body);
      voltar();
    }

    const salvar = async () => {
      if(id){
        alterar();
      }
      else{
        inserir();
      }
    }

    const excluir = async () => {
      await axios.delete(`http://localhost:4000/funcionario/${id}`);
      voltar();
    }

    useEffect(() => {
        if(id){
          selecionar();
        }
    }, []);

    return (
        <>
         <TituloCadastro id={id} titulo ="f uncionario"/>   
        <form>
  <div className="mb-3">
    <label className="form-label">
      Código
    </label>
    <input
      type="text"
      className="form-control"
      value = {id}
    />
  </div>
  <div className="mb-3">
    <label className="form-label">
      Nome Funcionario
    </label>
    <input
      type="text"
      className="form-control"  
      value = {nomefuncionario}
      onChange={(evento) =>setNomeFuncionario(evento.target.value)}    
    />
  </div>
  <div className="mb-3">
    <label className="form-label">
      CPF
    </label>
    <input
      type="text"
      className="form-control"  
      value = {cpf}
      onChange={(evento) =>setCpf(evento.target.value)}    
    />
  </div>
<div className="mb-3">
    <label className="form-label">
      E-mail
    </label>
    <input
      type="text"
      className="form-control"  
      value = {email}
      onChange={(evento) =>setEmail(evento.target.value)}    
    />
  </div>

  <div className="mb-3">
    <label className="form-label">
      Telefone
    </label>
    <input
      type="text"
      className="form-control"  
      value = {telefone}
      onChange={(evento) =>setTelefone(evento.target.value)}    
    />
  </div>
  <div className="mb-3">
    <label className="form-label">
      Nascimento
    </label>
    <input
      type="text"
      className="form-control"  
      value = {nascimento}
      onChange={(evento) =>setNascimento(evento.target.value)}    
    />
  </div>
  <div className="mb-3">
    <label className="form-label">
      Salario
    </label>
    <input
      type="text"
      className="form-control"  
      value = {salario}
      onChange={(evento) =>setSalario(evento.target.value)}    
    />
  </div>
  <div className="mb-3">
    <label className="form-label">
      Contratação
    </label>
    <input
      type="text"
      className="form-control"  
      value = {contratacao}
      onChange={(evento) =>setContratacao(evento.target.value)}    
    />
  </div>
  
    <div className="mb-3">
    <label className="form-label">
      Demissão
    </label>
    <input
      type="text"
      className="form-control"  
      value = {demissao}
      onChange={(evento) =>setDemissao(evento.target.value)}    
    />
  </div>

   <div className="mb-3">
    <label className="form-label">
      Ativo
    </label>
    <input
      type="text"
      className="form-control"  
      value = {ativo}
      onChange={(evento) =>setAtivo(evento.target.value)}    
    />
  </div>
   <div className="mb-3">
    <label className="form-label">
      Senha
    </label>
    <input
      type="text"
      className="form-control"  
      value = {senha}
      onChange={(evento) =>setSenha(evento.target.value)}    
    />
  </div>
   <div className="mb-3">
    <label className="form-label">
      Token
    </label>
    <input
      type="text"
      className="form-control"  
      value = {token}
      onChange={(evento) =>setToken(evento.target.value)}    
    />
  </div>

  <button type="button" className="btn btn-primary" onClick={() => salvar()}>
    Salvar
  </button>
  <button type="button" className="btn btn-secondary" 
  onClick={() => voltar()}>
    Cancelar
  </button>
  { id && (
  <button type="button" className="btn btn-danger" onClick={() => excluir()}>
    Excluir
  </button>
  )}
</form>

        </>
    );
};
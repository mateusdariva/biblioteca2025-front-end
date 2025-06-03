import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import TituloCadastro from "../componentes/TituloCadastro";

export default function FormLivro(){
    const navegacao = useNavigate();
    const { id } = useParams();
    //Declarar um useState para cada campo da tabela ( exceto para o id)
    const [titulo, setTitulo] = useState(''); 
    const [publicacao, setPublicacao] = useState(''); 
    const [categoria, setCategoria] = useState(''); 
    const [ideditora, setEditora] = useState(''); 
    const [edicao, setEdicao] = useState(''); 
    const [paginas, setPaginas] = useState(''); 
    const [foto, setFoto] = useState(''); 
    const [localizacao, setLocalizacao] = useState(''); 
    const [resumo, SetResumo] = useState(''); 
    const [ativo, setAtivo] = useState('');
    const [condicaofisica, setCondicaofisica] = useState('');
    const [emprestado, setEmprestado] = useState(''); 

    const voltar = () => {
        navegacao('/listalivro')
    };

    const selecionar = async () => {
      let { data } = await axios.get(`http://localhost:4000/livro/${id}`);
      //carregar cada campo na sua respectivel variavel
      setTitulo(data.titulo);
      setPublicacao(data.publicacao);
      setCategoria(data.categoria);
      setEditora(data.ideditora);
      setEdicao(data.edicao);
      setPaginas(data.paginas);
      setFoto(data.foto);
      setLocalizacao(data.localizacao);
      SetResumo(data.resumo);
      setAtivo(data.ativo);
      setCondicaofisica(data.condicaofisica);
      setEmprestado(data.emprestado);
    }

    const alterar = async () => {
      //montar o json do body com todos os campos que precisam ser enviados
      let body = {
          "titulo": titulo,
          "publicacao": publicacao,
          "categoria": categoria,
          "ideditora": ideditora,
          "edicao": edicao,
          "paginas": paginas,
          "foto": foto,
          "localizacao": localizacao,
          "resumo": resumo,
          "ativo": ativo,
          "condicaofisica": condicaofisica,
          "emprestado": emprestado
      }

      await axios.put(`http://localhost:4000/livro/${id}`, body);
      voltar();
    }

    const inserir = async () => {
      let body = {
          "titulo": titulo,
          "publicacao": publicacao,
          "categoria": categoria,
          "ideditora": ideditora,
          "edicao": edicao,
          "paginas": paginas,
          "foto": foto,
          "localizacao": localizacao,
          "resumo": resumo,
          "ativo": ativo,
          "condicaofisica": condicaofisica,
          "emprestado": emprestado
      }

      await axios.post(`http://localhost:4000/livro`, body);
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
      await axios.delete(`http://localhost:4000/livro/${id}`);
      voltar();
    }

    useEffect(() => {
        if(id){
          selecionar();
        }
    }, []);

    return (
        <>
         <TituloCadastro id={id} titulo ="livro"/>   
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
      Título
    </label>
    <input
      type="text"
      className="form-control"  
      value = {titulo}
      onChange={(evento) =>setTitulo(evento.target.value)}    
    />
  </div>

  <div className="mb-3">
    <label className="form-label">
      Publicação
    </label>
    <input
      type="text"
      className="form-control"  
      value = {publicacao}
      onChange={(evento) =>setPublicacao(evento.target.value)}    
    />
  </div>

  <div className="mb-3">
    <label className="form-label">
      Categoria
    </label>
    <input
      type="text"
      className="form-control"  
      value = {categoria}
      onChange={(evento) =>setCategoria(evento.target.value)}    
    />
  </div>

  <div className="mb-3">
    <label className="form-label">
      Editora
    </label>
    <input
      type="text"
      className="form-control"  
      value = {ideditora}
      onChange={(evento) =>setEditora(evento.target.value)}    
    />
  </div>

  <div className="mb-3">
    <label className="form-label">
      Edição
    </label>
    <input
      type="text"
      className="form-control"  
      value = {edicao}
      onChange={(evento) =>setEdicao(evento.target.value)}    
    />
  </div>
  <div className="mb-3">
    <label className="form-label">
      Paginas
    </label>
    <input
      type="text"
      className="form-control"  
      value = {paginas}
      onChange={(evento) =>setPaginas(evento.target.value)}    
    />
  </div>
<div className="mb-3">
    <label className="form-label">
      Foto
    </label>
    <input
      type="text"
      className="form-control"  
      value = {foto}
      onChange={(evento) =>setFoto(evento.target.value)}    
    />
  </div>

  <div className="mb-3">
    <label className="form-label">
      Localização
    </label>
    <input
      type="text"
      className="form-control"  
      value = {localizacao}
      onChange={(evento) =>setLocalizacao(evento.target.value)}    
    />
  </div>
  <div className="mb-3">
    <label className="form-label">
      Resumo
    </label>
    <input
      type="text"
      className="form-control"  
      value = {resumo}
      onChange={(evento) =>SetResumo(evento.target.value)}    
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
      Condição Física
    </label>
    <input
      type="text"
      className="form-control"  
      value = {condicaofisica}
      onChange={(evento) =>setCondicaofisica(evento.target.value)}    
    />
  </div>
  
    <div className="mb-3">
    <label className="form-label">
      Empréstimo
    </label>
    <input
      type="text"
      className="form-control"  
      value = {emprestado}
      onChange={(evento) =>setEmprestado(evento.target.value)}    
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
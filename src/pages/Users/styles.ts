import styled from "styled-components";

export const Busca = styled.div`
    width: 100%;
    height:auto;
    background-color: #f5f5f5;
    border-radius: 99999px;
    padding: 7px 30px 7px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;

    .form-busca{
        display: flex;
        align-items: center;
    }

    .resultados-encontrados{
        color: #241058;
        font-size: 1.2em;
    }

    select{
        color: #9187AB;
        min-width: 180px;
        padding: 7px 15px;
        border-radius: 9999px 0 0 9999px;
        outline: none;
        border: none;
        border: thin solid #efe9ff;
        border-right: none;
    }

    input{
        min-width: 270px;
        color: #9187AB;
        padding: 8px 15px;
        border-radius: 0;
        outline: none;
        border: thin solid #efe9ff;
    }

    button{
        height: auto !important;
        padding: 8px 15px;
        border-radius: 0 12px 12px 0;
        line-height: 0;
        border: none;
        cursor: pointer;
        background-color: #C53364;
        color: #ffffff;
        font-size: 1.2em;
        border: none
    }
`



export const Tabela = styled.div`
    width: 100%;
    height:auto;
    box-sizing: border-box;

    .bg-light{
        background-color: #f5f5f5;
    }

    .tabela-labels{
        box-sizing: border-box;
        width: 100%;
        height:auto;
        display: flex;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 600;
        align-items: center;
        border-bottom: 1px solid #E9E7EE;
        padding: 24px 24px 16px 24px;
        font-style: normal;
        font-weight: bold;
        line-height: 100%;
        text-transform: uppercase;
        color: #241058;
    }


    .tabela-checkbox, .usuario-checkbox{width:5%;}
    .tabela-id, .usuario-id{width:10%;}
    .tabela-nome, .usuario-nome{width:30%;}
    .tabela-funcao, .usuario-funcao{width:15%;font-weight:bold;}
    .tabela-contato, .usuario-contato{width:20%;}
    .tabela-status, .usuario-status{width:15%;}
    .tabela-expandir, .usuario-expandir{width:5%;}


    .lista-usuarios{
        box-sizing: border-box;
        width: 100%;
        height: auto;
    }

    .usuario-item{
        box-sizing: border-box;
        width: 100%;
        height:auto;
        display: flex;
        font-size: 14px;
        font-weight: normal;
        align-items: center;
        color: #504079;
     
        padding: 16px 24px 16px 24px;
    }

    .usuario-ativo{
        width: 58px;
        height: auto;
        background: #71E083;
        border-radius: 50px;
        color:#ffffff;
        line-height: 22px;
        text-align:center;
    }

    .usuario-inativo{
        width: 58px;
        height: auto;
        line-height: 22px;
        background: #B62222;
        border-radius: 50px;
        color:#ffffff;
        text-align:center;
    }
`


export const UsuariosContainer = styled.div`
    background: #FFFFFF;
  border: 1px solid #F0F0F0;
  box-sizing: border-box;
  box-shadow: 0px 18px 33px rgba(108, 93, 211, 0.1);
  border-radius: 23px;
  height: 100%; 
  position: relative;
  width: 100%;
  padding:0;
`
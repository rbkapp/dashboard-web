import styled from "styled-components";

export const MobileHead = styled.html`
  width: 100%;
  text-align: center;
`;

export const PageLoader = styled.html`
  width: 100%;
  height:100vh;
  padding-top: 49vh ;
  text-align: center;
  font-size: 18px;
  font-family: 'Kumbh Sans', sans-serif;
  color: #fff;
  position:relative;
  background: linear-gradient(271.81deg, #663590 0%, #933e97 100%);
`;

export const Pagina = styled.html`
  width: 100%;
  height:100vh;
  padding: 25px 25px 25px 0 ;
  margin: 0;
  position:relative;
  background: linear-gradient(271.81deg, #663590 0%, #933e97 100%);
  font-family: 'Kumbh Sans', sans-serif;

  @media(max-width:800px){
    padding: 10px;
  }

  .MobileHead {
    width: 100%;
    text-align: center;
    padding:10px 0 20px 0;
    display: none;

    @media(max-width:800px){
      display: block;
    }

    .botao {
      float: left;
      margin-left: 5px;

      button {
        position: absolute;
        padding:10px 12px !important;
        height: auto !important;
        border-radius: 12px !important;
      }
    }
    
    .logo {
        padding-top: 5px;
        max-width: 45%;
      }
  }

  button {
    float: left;
    padding: 10px 35px;
    color:#ffffff;
    background: #572562;
    border: none;
    border-radius: 22px;
    cursor:pointer;
    transition: 200ms;
    font-weight: bold;
  }

  button:hover {
    background-color: #66588A;
  }
  
  .btn-aux {
      color:#572562;
      background: #ffffff;
      border: 2px solid #572562;
    }
  .btn-aux: hover {
      color:#fff;
      background: #572562;
      border: 2px solid #572562;
    }
`;

export const Conteudo = styled.div`
  box-sizing: border-box;
  width: calc(100% - 300px);
  height:100%;
  overflow:auto;
  background-color:#ffffff;
  position: relative;
  left: 300px;
  padding: 34px;
  border-radius: 23px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media(max-width:800px){
    width: 100%;
    left:0;
    padding: 18px;

    height: calc(100% - 80px);
  }

`;

export const ConteudoFixo = styled.div`
  box-sizing: border-box;
  width: calc(100% - 300px);
  height:100%;
  overflow: hidden;
  background-color:#ffffff;
  position: relative;
  left: 300px;
  padding: 34px;
  border-radius: 23px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media(max-width:800px){
    width: 100%;
    left:0;
    padding: 18px;

    height: calc(100% - 80px);
  }

`;


export const TopFiltros = styled.div`
box-sizing: border-box;
  width:100%;
  height:46px;
  background: #F6F6F6;
  border-radius: 23px;
  padding: 4px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 25px;
  color: #241058;

  .botao-filtro{
    background-color: #504079;
    width: 24px;
    height:24px;
    display:flex;
    justify-content:center;
    align-items:center;
    color: #ffffff;
    border-radius: 50%;
    padding: 2px;
    font-size:.8em;
  }
  .botao-filtro:hover {
        background-color: #ffffff;
        color: #504079;
    }
`






export const SolicitacaoConteudo = styled.div`

  box-sizing: border-box;
  background: #FFFFFF;
  border-radius: 23px;
  padding: 30px;
  height: 100vh;
  width: calc(100% - 300px);
  float: right;

  @media(max-width:800px){
    padding: 18px;
  }

`

export const SolicitacaoMenu = styled.div`
  
  width: 300px;
  height:100vh;
  position: absolute;

`


export const ListagemCards = styled.div`
  display: flex;
  gap: 30px;

  @media(max-width:800px){
    flex-direction: column;
  }
`




export const BtnRoxo = styled.button`
  box-sizing: border-box;
  box-shadow: 0px 3px 20px rgba(212, 0, 80, 0.1);
  border-radius: 22px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  width: 150px;
  height: 38px;
  background-color: #504079;
  border: 2px solid #66588A;
  color: #ffffff;
  transition: 200ms;

  :hover{
    background-color: #5d4a8c;
  }

`


export const BtnBranco = styled.button`
  box-sizing: border-box;
  box-shadow: 0px 3px 20px rgba(212, 0, 80, 0.1);
  border-radius: 22px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  width: 150px;
  height: 38px;
  background-color: #ffffff;
  border: 2px solid #66588A;
  color: #241058;
  transition: 200ms;

  :hover{
    background-color: #66588A;
    color:#ffffff;
  }

`


export const BtnRemover = styled.button`
  box-sizing: border-box;
  box-shadow: 0px 3px 20px rgba(212, 0, 80, 0.1);
  border-radius: 22px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  width: 150px;
  height: 38px;
  background-color: #ffffff;
  border: 2px solid #EA7373;
  color: #EA7373;
  transition: 200ms;

  :hover{
    background-color: #EA7373;
    color:#ffffff;
  }

`



export const Formulario = styled.form`
  width: 100%;
  padding-right:24px;
  padding-left:24px;
  height:auto;
  box-sizing:border-box;
  display:flex;
  flex-direction:column;
  gap:12px;
  *{
    outline:none;
  }
  .titulo-form{
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 25px;
      color: #241058;
    }
`

export const Campo = styled.div`
  width: 100%;
  height:auto;
  box-sizing:border-box;
  display:flex;
  align-items:center;
  position: relative;
  .icone{
    position: absolute;
    left:18px;
    font-size:1.4em;
    color:#A79FBC;
    line-height:20px;
  }
  input[type=text]{
    width: 100%;
    height:auto;
    border: 2px solid #D3CFDE;
    box-sizing: border-box;
    border-radius: 9999px;
    padding:12px 20px 12px 50px;
    font-size:1em;
    line-height:0;
    transition:200ms;
  }
  select{
    width: 100%;
    height:auto;
    border: 2px solid #D3CFDE;
    box-sizing: border-box;
    border-radius: 9999px;
    padding:12px 20px 12px 50px;
    font-size:1em;
    line-height:0;
    transition:200ms;
    color:#A79FBC;
  }
  input[type=text]:focus{
    border: 2px solid #66588A;
  }
  input::placeholder {
      color: #A79FBC;
      opacity: 1; /* Firefox */
    }
    
    input:-ms-input-placeholder {
      color: #A79FBC;
    }
    
    input::-ms-input-placeholder {
      color: #A79FBC;
    }
    
    
`
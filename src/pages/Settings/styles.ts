import styled from "styled-components";

export const ConfiguracoesContainer = styled.div`
    background: #ffffff;
  border: 1px solid #F0F0F0;
  box-sizing: border-box;
  box-shadow: 0px 18px 33px rgba(108, 93, 211, 0.1);
  border-radius: 23px;
  height: 100%; 
  position: relative;
  width: 100%;
  padding:30px;
  display:flex;
  flex-direction:column;
  gap:30px;
  @media(min-width:800px){
    flex-direction:row;
  }
`

export const ColunaInfos = styled.div`
  width: 100%;
  height:auto;
  @media(min-width:800px){
    width: 50%;
  }
`

export const Preview = styled.div`
  background: #FFFFFF;
  border: 1px solid #F0F0F0;
  box-sizing: border-box;
  box-shadow: 0px 18px 33px rgba(108, 93, 211, 0.1);
  border-radius: 23px;
  margin-bottom: 30px;
  padding:8px;
  width: 100%;
  height:auto;
  display:flex;
  line-height:0;
  box-sizing:border-box;
  position: relative;
    .logo-loja{
      margin-right:15px;
    }
    .logo-loja img{
      max-height:100px;
      border-radius:12px;
    }
    .infos-preview{
      width: auto;
      padding:8px;
      display:flex;
      justify-content:center;
      flex-direction:column;
    }
    .nome-loja{
      font-style: normal;
      font-weight: 500;
      font-size: 22px;
      line-height: 27px;
      color: #241058;
      margin-bottom:15px;
    }
    .botoes{
      display:flex;
      gap:15px;
    }
`

export const Dados = styled.div`
  background: #FFFFFF;
  border: 1px solid #F0F0F0;
  box-sizing: border-box;
  box-shadow: 0px 18px 33px rgba(108, 93, 211, 0.1);
  border-radius: 23px;
  padding:21px 0 0 0;
`

export const DadosFooter = styled.div`
  width: 100%;
  height:auto;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:30px 0;
  border-top: 1px solid #E9E7EE;
  margin-top:30px;
`

export const Endereco = styled.div`
  background: #FFFFFF;
  border: 1px solid #F0F0F0;
  box-sizing: border-box;
  box-shadow: 0px 18px 33px rgba(108, 93, 211, 0.1);
  border-radius: 23px;
  padding: 21px 0 0 0;
`
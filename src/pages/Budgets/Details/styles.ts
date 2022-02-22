import styled from "styled-components";

export const DadosOrcamento = styled.div`
  width: 100%;
  height:auto;
  display:flex;
  justify-content:space-between;
  color:#241058;
  font-size:1.2em;

  a.botaoVoltar{
    cursor:pointer;
    color:#241058;
    font-weight:bold;
    text-decoration:none;
  }

`

export const ChatContainer = styled.div`
  background: #FFFFFF;
  border: 1px solid #F0F0F0;
  box-sizing: border-box;
  box-shadow: 0px 18px 33px rgba(108, 93, 211, 0.1);
  border-radius: 23px;
  height: calc(100% - 40px); 
  position: relative;
  width: 100%;
`

export const EscreverMensagem = styled.div`
  box-sizing:border-box;
  width: 100%;
  height:auto;
  position: absolute;
  bottom:0;
  padding:20px;
  display:flex;
  align-items:center;

  input{
    box-sizing:border-box;
    background: #FFFFFF;
    border: 1px solid #E2DDF8;
    border-radius: 99999px;
    width: 100%;
    padding:20px 170px 20px 32px;
    font-size:1em;
  }

  button.botaoEnviar{
    background: #D40050;
    border-radius: 23px;
    right:50px;
    position: absolute;
    color:#ffffff;
    font-size:1em;
    padding: 6px 20px;
    cursor:pointer;
    border:none;
  }

  button.botaoAnexar{
    position: absolute;
    right:150px;
    background: #FFFFFF;
    border: 1px solid #504079;
    box-sizing: border-box;
    font-size:1.2em;
    line-height:0;
    padding:4px;
    border-radius:50%;
    color:#504079;
    cursor:pointer;
  }

`

export const ResumoOrcamento = styled.div`
  background: #F6F6F6;
  border: 1px solid #C2B9DA;
  box-sizing: border-box;
  box-shadow: 0px 18px 33px rgba(108, 93, 211, 0.1);
  border-radius: 18px;
  padding:14px 20px;
  display:flex;
  align-items:center;
  position: relative;

  .foto{
    margin-right:20px;
  }

  .foto img{
    border-radius:50%;
  }

  .infos{
  }

  .tipo{
    color:#241058;
    font-size:1em;
  }

  .titulo{
    font-style: normal;
    font-weight: bold;
    font-size: 1.25em;
    line-height: 21px;
    color: #000000;
  }

  .caracteristicas{
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 15px;
    color: #1F1F1F;
    font-size:1em;
  }

  .botao{
    position: absolute;
    right:20px;
  }

`

export const TimelineMensagens = styled.div`
  box-sizing:border-box;
  overflow: auto;
  width: 100%;
  height: calc(100% - 160px);
  display:flex;
  flex-direction:column;
  padding:24px;
  padding-top:60px;
  gap:30px;

`
export const LinhaMensagem = styled.div`
  width: 100%;
  height:auto;
  position: relative;
  display:flex;
`

export const LinhaMensagem_Admin = styled.div`
  width: 100%;
  height:auto;
  position: relative;
  display:flex;
  justify-content:flex-end;
`
export const BoxMensagem_Admin = styled.div`
  max-width:440px;
  height:auto;
  display:flex;
  
  .mensagem{
    //width: 100%;
    background: #FFFFFF;
    border: 1px solid #F0F0F0;
    box-sizing: border-box;
    box-shadow: 0px 18px 33px rgba(108, 93, 211, 0.1);
    border-radius: 14px;
    padding:15px 20px;
  }
  .usuario{
    width: 100%;
    height:auto;
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:4px;
    color:#504079;
    font-weight:bold;
    font-size:1em
  }
  .horario{
    font-weight:normal;
    font-size:.6em;
    margin-left: 10px;
  }
  .texto{
    font-style: normal;
    font-weight: normal;
    font-size: 1em;
    line-height: 18px;
    color: #888996;
  }
  .resumo-orcamento{
    //width: 100%;
    height:auto;
    display:flex;
    gap:2px;
    flex-direction:column;
    margin-top:12px;
    div{
      display:flex;
    }
    .titulo{
      width: 50%;
      font-style: normal;
      font-weight: normal;
      font-size: 1em;
      line-height: 26px;
      color: #888996;
    }
    .valor{
      width:50%;
      font-style: normal;
      font-weight: 600;
      font-size: 1em;
      line-height: 26px;
      color: #11142D;
    }
    .gratis{
      color: #00b400;
    }
  }
`
export const BoxMensagem = styled.div`
  max-width:60%;
  height:auto;
  display:flex;
  .avatar{
    margin-right:16px;
  }
  .avatar img{
    border-radius:50%;
  }
  .mensagem{
    //width: calc(100% - 70px);
    background: #FFFFFF;
    border: 1px solid #F0F0F0;
    box-sizing: border-box;
    box-shadow: 0px 18px 33px rgba(108, 93, 211, 0.1);
    border-radius: 14px;
    padding:15px 20px;
  }
  .usuario{
    width: 100%;
    height:auto;
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:4px;
    color:#504079;
    font-weight:bold;
    font-size:1em
  }
  .horario{
    font-weight:normal;
    font-size:.6em;
    margin-left: 10px;
  }
  .texto{
    font-style: normal;
    font-weight: normal;
    font-size: 1em;
    line-height: 18px;
    color: #888996;
  }
`
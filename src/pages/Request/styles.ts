import styled from "styled-components";


export const SolicitacaoCard = styled.div`
  width: 325px;
  background: #FDFDFD;
  border: 2px solid #f0f0f0;
  box-sizing: border-box;
  box-shadow: 0px 12px 12px rgba(36, 16, 88, 0.12);
  border-radius: 12px;
  position: relative;

  font-family: 'Kumbh Sans', sans-serif;

  @media(max-width:800px){
    width: 100%;
  }

  .header{
    box-sizing: border-box;
    width: 100%;
    height: 49px;
    left: calc(50% - 325px/2 - 252.5px);
    top: 110px;
    background: #F6F6F6;
    border: 1px solid #F0F0F0;
    border-radius: 12px 12px 0px 0px;
    display: flex;
    align-items: center;
    padding-left: 21px;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 24px;
    color: #636363;
  }

  .body{
    font-family: 'Kumbh Sans', sans-serif;
    box-sizing: border-box;
    width:100%;
    height:auto;
    background-color: #ffffff;
    display:flex;
    padding: 21px;
    justify-content: space-between;
    align-items: center;
  }

  .infos{
    display:flex;
    gap:.5em;
    flex-direction:column;
  }

  .busco{
    font-family: 'Kumbh Sans', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    color: #241058;
  }

  .titulo{
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 18px;
    color: #11142D;
    padding: 5px 0;
  }

  .modelo{
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    color: #212121;
  }

  span.caracteristicas{
    font-weight: normal;
  }

  .footer{
      float: left;
    width:100%;
    padding: 20px;
    display:flex;
    justify-content:center;
    align-items: center;
    border-top:1px solid #f0f0f0;
    position:relative;
  }
`

export const Overlay = styled.div`
  width: 100%;
  height:100vh;
  position:fixed;
  top:0;
  left:0;
  background-color:rgba(0, 0, 0, .3);
  z-index: 999999;
`

export const EnviarOrcamento = styled.div`
  box-sizing: border-box;
  width:100%;
  position: absolute;
  max-width: 601px;
  height: auto;
  background: #FFFFFF;
  box-shadow: 4px 8px 40px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);
  font-family: 'Cairo', sans-serif;

  input[type=text], input[type=number], textarea, select{
    background: #FFFFFF;
    border: 1px solid #E2DDF8;
    box-sizing: border-box;
    border-radius: 23px;
    height: 48px;
    box-sizing: border-box;
    padding-left:22px;
    padding-right: 22px;
    outline: none;
    transition: 200ms;
    max-width: 100%;
    font-family: 'Cairo', sans-serif;

    :focus{
      border: 1px solid #b7ade4;
    }

  }

  .titulo{
    width: 100%;
    height:auto;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 24px;
    text-align: center;
    color: #241058;
    padding: 30px 0 35px 0;
    font-family: 'Cairo', sans-serif;
  }

  .fechar{
    font-size: 2.1em;
    top:20px;
    right:20px;
    position: absolute;
    color:#a5a5a5;
    cursor: pointer;
    transition: 200ms;
  }

  .pos-rel{
    position: relative;
  }

  .prod{
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: auto;
    background-color: #f6f6f6;
    border: 1px solid #F0F0F0;
    border-radius: 0px;
    display: flex;
    justify-content: space-between;
    gap: 50px;
    padding: 10px 30px 8px 30px;
    align-items: center;
  }

  .titulo-produto{
    font-family: 'Cairo', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 22px;
    color: #11142D;
  }

  .modelo{
    font-family: 'Cairo', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #212121;
  }

  .tempo-publicacao{
    font-family: 'Cairo', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 22px;

    color: #636363;
  }

  .caracteristicas{
    font-weight: 600;
  }

  .btn-zoom-foto{
    position: absolute;
    top:3px;
    right:3px;
    z-index: 99999;
    font-size: 1.5em;
    color: #241058;
    cursor: pointer;
  }

  .busco{
    font-family: 'Cairo', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    color: #241058;
  }

  .formulario{
    box-sizing: border-box;
    width: 100%;
    height:auto;
    padding: 0 30px 0 30px;
    display: flex;
    flex-direction: column;
  }

  .formulario_item{
    border-bottom: thin solid #E9E7EE;
    padding-bottom: 14px;
    padding-top: 10px;
    box-sizing: border-box;
  }

  .formulario_item:last-child{
    border-bottom: none;
  }

  .label{
    
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 26px;
    color: #241058;
  }

  .footer{
    box-sizing: border-box;
    width: 100%;
    padding: 30px;
    border-top: thin solid #E9E7EE;
    display: flex;
    justify-content: center;
    gap:24px;
  }

  .radios{
    display: flex;
    gap: 15px;
    color: #212121;
  }

  .radios div{
    display: flex;
    align-items: center;
    width: 25%;
    position: relative;
  }

  .radios label{
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    color: #212121;
  }

  .radios label:checked{
    color: #ff00ff;
  }

  .radios input[type=radio], .radios input[type=check]{
    height: auto; 
    cursor: pointer;
    
  }

  .detalhes {
    width: 100%;
    position:relative;
  }

  .detalhes input{
    width: 100%;
  }

  .detalhes .icone{
    border:thin solid #66588A;
    padding: 4px;
    border-radius: 9999px;
  }

  .detalhes .icone{
    position: absolute;
    right: 12px;
    top:50%;
    transform: translateY(-50%);
    font-size: .85em;
    line-height: 0;
    color: #66588A;
  }





  .opcoesDisponibilidade{
    display: flex;
    align-items: center;
    gap: 20px;
  }

.opcoesEntrega{
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.radio-opcao-item{
  display: flex;
  align-items: center;
  position: relative;
}

.iconeChecked{
  position: absolute;
  top: 2px;
  left: 2px;
  font-size: 14px;
}


input[type=radio]{
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  margin: 0;
  width: 18px;
  height: 18px;
  border: thin solid #333333;
  border-radius: 50%;
  margin-right: 6px;
}

input[type="radio"]::after {
  content: "";
  width: 10px;
  height: 10px;
  border-radius: 50%;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em #333333;
}

/*input[type="radio"]:checked::before {
  transform: scale(1);
}*/

input[type="radio"]:focus {
  background-color: #d40050;
  border-color:#d40050;
}

input[type="radio"]:checked + label{
  color: #d40050;
}

input[type="radio"]:checked + .iconeChecked svg{
  color: #ffffff !important;
}

.div-input-radio{
  display: flex;
  align-items: center;
}
`;
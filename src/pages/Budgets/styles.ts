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
    padding: 20px 0;
    display:flex;
    justify-content:center;
    align-items: center;
    border-top:1px solid #f0f0f0;
    position:relative;
  }
`;
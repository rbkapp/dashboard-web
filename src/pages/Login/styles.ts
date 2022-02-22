import styled from "styled-components";

export const LoginArea = styled.div`
  display:flex;
  width:100%;
  height:calc(100vh);
  justify-content:center;
  background: linear-gradient(271.81deg, #663590 0%, #933e97 100%);
`;

export const LoginBox = styled.div`
    position: absolute;
    outline:none;
    border:none;
    width: 340px;
    height: auto;    
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    
    font-family: 'Kumbh Sans', sans-serif;

    .titulo-area{
      text-align:center;
      padding-bottom:30px;
      .logo {
        width: 200px;
      }
    }

    *{
      outline:none;
    }

    .login-cont {
      outline:none;
      border:none;
      background: #FFFFFF;
      display:flex;
      flex-direction:column;
      justify-content:space-between;
      box-shadow: 4px 8px 40px rgba(0, 0, 0, 0.25);
      border-radius: 20px;
      padding-top:30px;
      padding-bottom:30px;
    }

    .header{
      width:100%;
      height:auto;
      margin-bottom:2.2em;
    }

    .body{
      width:100%;
      box-sizing:border-box;
      height:auto;
      display:flex;
      flex-direction:column;
      gap:1em;
      padding-right:30px;
      padding-left:30px;
    }

    .footer{
      width:100%;
      height:auto;
      display:flex;
      justify-content:center;
      margin-top:2.2em;
      padding-top:30px;
      border-top:1px solid #E9E7EE

    }

    .campo{
      width:100%;
      height:auto;
      display:flex;
      align-items:center;
      position:relative;
    }

    .campo svg{
      position:absolute;
      left:16px;
      color:#A79FBC;
      font-size:1.2em;
    }

    .titulo{
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 24px;
      text-align: center;
      color: #572562;
    }

    .showPass{
      position:absolute;
      right:55px;
      top:12px;
      font-size:1.1em;
    }

    input{
      width: 100%;
      height: 44px;
      padding:8px 15px 8px 50px;
      border: 2px solid #D3CFDE;
      box-sizing: border-box;
      border-radius: 18px;
      transition:200ms;
    }

    input:focus{
      border: none !important;
    }

    button{
      width: 150px;
      height: 44px;
      left: calc(50% - 150px/2);
      top: 510px;
      color:#ffffff;
      background: #572562;
      border: none !important;
      border-radius: 22px;
      font-weight: bold;
      cursor:pointer;
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

    .esqueci-lembrar{
      display:flex;
      align-items:center;
      justify-content:space-between;
      font-size:.9em;
    }

    .esqueci-lembrar div{
      display:flex;
      align-items:center;
    }

    .esqueci-lembrar label{
      cursor:pointer;
    }
    
    .esqueci-lembrar input{
      width:16px;
      height:16px;
      border-radius: 8px;
      cursor:pointer;
      margin-right: 10px;
    }
    
    .lembrar{
      font-style: normal;
      font-weight: normal;
      font-size: 11px;
      line-height: 24px;
      /* identical to box height, or 218% */
      /* Preto */
      color: #11142D;
    }

    .esqueci a{
      font-style: normal;
      font-weight: normal;
      font-size: 11px;
      line-height: 24px;
      text-decoration-line: none;
      color: #663590;
    }

    .esqueci a:hover{
      text-decoration-line: underline;
    }


`;
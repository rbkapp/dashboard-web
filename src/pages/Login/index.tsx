import {
  LoginArea,
  LoginBox,
} from "./styles";

import {
  AiOutlineUser,
  AiFillLock,
  AiOutlineEye
} from "react-icons/ai";

export default function Login() {
  return (
    <LoginArea>
      <LoginBox>
        <div className="titulo-area">
          <img className="logo" src="https://rebimboka-public.nyc3.digitaloceanspaces.com/webapp/logo_white.png" />
        </div>
        <div className="login-cont">
          <div className="header">
            <div className="titulo">LOGIN</div>
          </div>
          <div className="body">
            <div className="campo">
              <AiOutlineUser />
              <input type="text" placeholder="E-mail" />
            </div>
            <div className="campo">
              <AiFillLock />
              <div className="showPass"><AiOutlineEye /></div>
              <input type="password" placeholder="Senha" />
            </div>
            <div className="esqueci-lembrar">
              <div className="lembrar">
                <input id="lembrar" type="checkbox" />
                <label htmlFor="lembrar"> Lembrar de mim</label>
              </div>
              <div className="esqueci">
                <a href="#">Esqueci minha senha</a>
              </div>
            </div>
          </div>
          <div className="footer">
            <button>entrar</button>
          </div>
        </div>
      </LoginBox>

    </LoginArea>
  )
}
import { useState, useEffect } from "react";
import { Col, Divider, Row, Space, Steps } from "antd";
import Form from "antd/lib/form/Form";

import { FormItem } from "components/Form/FormItem";
import { Input } from "components/Form/Input";
import { Checkbox } from "components/Form/Checkbox";
import { PrimaryButton } from "components/Form/Button";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth';

import {
  LoginArea,
  LoginBox,
} from "./styles";

import { useAuth } from "contexts/AuthContext";

export default function Login() {
  const authentication = getAuth();
  const { isAuthenticated, signIn } = useAuth();

  const [formEditable, setFormEditable] = useState<boolean>(true);
  const [formRemember, setFormRemember] = useState<boolean>(false);
  const [formEmail, setFormEmail] = useState<string>('');
  const [formPassword, setFormPassword] = useState<string>('');
  const [formPasswordView, setFormPasswordView] = useState<boolean>(false);

  const checkLogin = async (values: any) => {
    const loginFormValues = values;
    const email = loginFormValues.email || '';
    const password = loginFormValues.password || '';

    if(password.length < 6){
      alert('Sua senha deve ter 6 caracteres ou mais, verifique!');
    } else {
      checkUser(email, password);
    }
  }

  const checkUser = async (email: string, password: string) => {
    setFormEditable(false);

    try {
      await signInWithEmailAndPassword(authentication, email, password)
      .then((response: any) => {
          //console.log('user: '+JSON.stringify(response.user));

          localStorage.setItem("userId", response.user.uid);
          localStorage.setItem("userName", response.user.providerData.displayName);
          localStorage.setItem("userEmail", response.user.email);
          localStorage.setItem("userPhoneNumber", response.user.providerData.phoneNumber);
          localStorage.setItem("userPhoto", response.user.providerData.photoURL);
          localStorage.setItem("token", response.user.stsTokenManager.refreshToken);
          
          window.open('/partner/request', '_self')?.focus();
          setFormEditable(true);
      });

    } catch (err: any) {
      //console.error(err);
      createUser(email, password);
    }
  };

  const createUser = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(authentication, email, password)
        .then((response: any) => {
          //localstorageconsole.log('user: '+JSON.stringify(response.user));

          localStorage.setItem("userId", response.user.uid || '');
          localStorage.setItem("userName", response.user.providerData.displayName || '');
          localStorage.setItem("userEmail", response.user.email || '');
          localStorage.setItem("userPhoneNumber", response.user.providerData.phoneNumber || '');
          localStorage.setItem("userPhoto", response.user.providerData.photoURL || '' );
          localStorage.setItem("token", response.user.stsTokenManager.refreshToken || '');

          window.open('/partner/request', '_self')?.focus();
          setFormEditable(true);
        });

    } catch (err: any) {
      //console.error(err);
      alert(err.message);
      setFormEditable(true);
    }
  };

  useEffect(() => {
    //localStorage.getItem("token") ? alert('token: '+ localStorage.getItem("token")) : alert('no token');
  }, []);

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
            <Form
              name="formLogin"
              onFinish={checkLogin}
              layout="vertical"
              scrollToFirstError style={{ width: "100%" }}
              initialValues={{
                email: formEmail,
                password: formPassword,
              }}
            >
              <Row>
                <Col lg={24} xs={24}>
                  <FormItem
                    name="email"
                    required
                    rules={[
                      {
                        required: true,
                        message: "Por favor, insira o seu e-mail.",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Seu e-mail"
                    />
                  </FormItem>
                  <FormItem
                    name="password"
                    required
                    rules={[
                      {
                        required: true,
                        message: "Por favor, insira o sua senha.",
                      },
                    ]}
                  >
                    <Input type="password" placeholder="*********" />
                  </FormItem>
                </Col>
              </Row>
              <div className="footer">
                <PrimaryButton
                  htmlType="submit"
                  loading={!formEditable}
                >entrar</PrimaryButton>
              </div>
            </Form>
          </div>
        </div>
      </LoginBox>

    </LoginArea>
  )
}
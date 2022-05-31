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
import db from 'config/firebase';

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

    if (password.length < 6) {
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

          checkPartnerAdmin(response.user.uid)
        });

    } catch (err: any) {
      alert(err);
      setFormEditable(true);
      //createUser(email, password);
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
          localStorage.setItem("userPhoto", response.user.providerData.photoURL || '');
          localStorage.setItem("token", response.user.stsTokenManager.refreshToken || '');

          checkPartnerAdmin(response.user.uid);
        });

    } catch (err: any) {
      //console.error(err);
      alert(err.message);
      setFormEditable(true);
    }
  };

  const checkPartnerAdmin = (userId: string) => {
    const loadDataPartnerAdmins = db
      .collection("partners_admins")
      .where("user_id", '==', userId)
      .onSnapshot(snap2 => {
        const data2: any = snap2.docs.map(doc2 => ({
          id: doc2.id,
          ...doc2.data(),
        }))

        if (data2.length > 0) {
          //alert('data2[0]: '+JSON.stringify(data2[0].partner_id))
          const loadDataPartner = db
            .collection("partners")
            .doc(data2[0].partner_id)
            .onSnapshot((doc: { data: () => any; }) => {
              //alert('doc.data(): '+JSON.stringify(doc.data()))
              if (doc.data().status) {
                localStorage.setItem("partnerId", data2[0].partner_id || '');
                localStorage.setItem("partnerName", doc.data().name || '');
                localStorage.setItem("partnerCity", doc.data().city || '');
                localStorage.setItem("partnerType", doc.data().type || '');
                localStorage.setItem("partnerDocument", doc.data().document || '');
                localStorage.setItem("partnerPhone", doc.data().phone || '');

                window.open('/partner/request', '_self')?.focus();
              } else {
                alert('Sua loja está inativa, faça contato com suporte.');
                window.open('/logout', '_self')?.focus();
              }
              setFormEditable(true);
            });
        } else {
          alert('Você ainda não é admin, cadastre sua empresa.');
          setFormEditable(true);
        }
      });
  }

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
        <div className="register">
          <a href="/sejaparceiro">Cadastre-se sua empresa</a>
        </div>
      </LoginBox>
    </LoginArea>
  )
}
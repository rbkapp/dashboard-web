import { useState, useEffect } from "react";
import { Col, Divider, Row, Space, Steps } from "antd";
import Form from "antd/lib/form/Form";
import { MaskedInput } from "antd-mask-input";

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
} from "../Login/styles";

import { useAuth } from "contexts/AuthContext";
import db from 'config/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

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
            checkUser(values);
        }
    }

    const checkUser = async (values: any) => {
        const loginFormValues = values;
        const email = loginFormValues.email || '';
        const password = loginFormValues.password || '';

        setFormEditable(false);

        try {
            await signInWithEmailAndPassword(authentication, email, password)
                .then((response: any) => {
                    insertPartner(values, response.user.uid);
                });

        } catch (err: any) {
            //console.error(err);
            createUser(values);
        }
    };

    const createUser = async (values: any) => {
        const loginFormValues = values;
        const email = loginFormValues.email || '';
        const password = loginFormValues.password || '';

        try {
            await createUserWithEmailAndPassword(authentication, email, password)
                .then((response: any) => {
                    insertPartner(values, response.user.uid);
                });

        } catch (err: any) {
            //console.error(err);
            alert(err.message);
            setFormEditable(true);
        }
    };

    async function insertPartner(values: any, userId: string) {
        const loginFormValues = values;
        const partnerName = loginFormValues.partnerName || '';
        const partnerCity = loginFormValues.partnerCity || '';
        const partnerType = loginFormValues.partnerType || '';
        const partnerDocument = loginFormValues.partnerDocument || '';
        const partnerPhone = loginFormValues.partnerPhone || '';

        try {
            const refDoc = await addDoc(collection(db, 'partners'), {
                user_id: userId,
                name: partnerName,
                city: partnerCity,
                type: partnerType,
                document: partnerDocument,
                phone: partnerPhone,
                status: true,
                created_at: Timestamp.now()
            })

            insertPartnerAdmin(userId, refDoc.id);

        } catch (err) {
            alert(err);
            setFormEditable(true);
        }
    }

    async function insertPartnerAdmin(userId: string, partnerId: string) {

        try {
            const refDoc = await addDoc(collection(db, 'partners_admins'), {
                user_id: userId,
                partner_id: partnerId,
                type: 1,
                status: true,
                created_at: Timestamp.now()
            })

            window.open('/', '_self')?.focus();
            alert('Cadastro realizado, em breve entreremos em contato.');

        } catch (err) {
            alert(err);
            setFormEditable(true);
        }
    }

    useEffect(() => {
        //localStorage.getItem("token") ? alert('token: '+ localStorage.getItem("token")) : alert('no token');
    }, []);

    return (
        <LoginArea
            style={{ height: 'calc(180vh)' }}
        >
            <LoginBox
                style={{ overflow: 'visible' }}
            >
                <div className="titulo-area"
                    style={{ paddingTop: '18rem' }}
                >
                    <img className="logo" src="https://rebimboka-public.nyc3.digitaloceanspaces.com/webapp/logo_white.png" />
                </div>
                <div className="login-cont">
                    <div className="header">
                        <div className="titulo">Torne-se parceiro</div>
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
                                        name="partnerName"
                                        required
                                        rules={[
                                            {
                                                required: true,
                                                message: "Por favor, insira a razão social.",
                                            },
                                        ]}
                                    >
                                        <Input
                                            placeholder="Razão social"
                                        />
                                    </FormItem>
                                    <FormItem
                                        name="partnerDocument"
                                        required
                                        rules={[
                                            {
                                                required: true,
                                                message: "Por favor, insira o CPNJ.",
                                            },
                                        ]}
                                    >
                                        <MaskedInput
                                            style={{ height: '40px', borderRadius: '1rem' }}
                                            className="masked-input"
                                            mask="11.111.111/1111-11"
                                            maxLength={14}
                                            placeholder="XX.XXX.XXX/0001-XX"
                                        />
                                    </FormItem>
                                    <FormItem
                                        name="partnerCity"
                                        required
                                        rules={[
                                            {
                                                required: true,
                                                message: "Por favor, selecione sua cidade.",
                                            },
                                        ]}
                                    >
                                        <select
                                            style={{ width: '100%', height: '40px', borderRadius: '1rem' }}
                                        >
                                            <option value="">Cidade</option>
                                            <option value="Porto Velho">Porto Velho - RO</option>
                                            <option value="Outra">Outra cidade</option>
                                        </select>
                                    </FormItem>
                                    <FormItem
                                        name="partnerType"
                                        required
                                        rules={[
                                            {
                                                required: true,
                                                message: "Por favor, selecione a categoria.",
                                            },
                                        ]}
                                    >
                                        <select
                                            style={{
                                                width: '100%',
                                                height: '40px',
                                                borderRadius: '1rem'
                                            }}
                                        >
                                            <option value="">Categoria</option>
                                            <option value="1">Motos</option>
                                            <option value="2">Veículos leves</option>
                                            <option value="3">Veículos pesados</option>
                                        </select>
                                    </FormItem>
                                    <FormItem
                                        name="phone"
                                        required
                                        rules={[
                                            {
                                                required: true,
                                                message: "Por favor, insira o seu telefone.",
                                            },
                                        ]}
                                    >
                                        <MaskedInput
                                            style={{ height: '40px', borderRadius: '1rem' }}
                                            className="masked-input"
                                            mask="(11) 1 1111-1111"
                                            maxLength={11}
                                            placeholder="(00) 0 0000-0000"
                                        />
                                    </FormItem>
                                    <div className="line"></div>
                                    <FormItem
                                        name="name"
                                        required
                                        rules={[
                                            {
                                                required: true,
                                                message: "Por favor, insira o nome do responsável.",
                                            },
                                        ]}
                                    >
                                        <Input
                                            placeholder="Responsável"
                                        />
                                    </FormItem>
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
                                            placeholder="Seu e-mail de acesso"
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
                                        <Input type="password" placeholder="Senha acesso" />
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
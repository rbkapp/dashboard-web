import React, { useState, useEffect, useRef } from "react";

import { RiMenuLine } from "react-icons/ri";
import { IoDuplicate } from "react-icons/io5";

import {
    PageLoader,
    Pagina,
    ConteudoFixo,
} from "../../../styles";

import {
    BoxMensagem, BoxMensagem_Admin, ChatContainer, DadosOrcamento, EscreverMensagem, LinhaMensagem_Admin, LinhaMensagem, ResumoOrcamento, TimelineMensagens,
} from "./styles";

import fotoSolicitacao from '../../../assets/img/image1.png';
import SideMenu from "../../../components/SideMenu";

import db from '../../../config/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import Datas from '../../../constants/Datas';

const Sessions = Datas.Sessions;
const Months = Datas.Months;

const RequestDetails: React.FC = (props) => {
    const { match } = props as any;
    const { params } = match;
    const { id } = params;

    const messagesEndRef = useRef(null);

    const userId = localStorage.getItem("userId") || '';
    const partnerId = localStorage.getItem("partnerId") || '';
    const partnerType = localStorage.getItem("partnerType") || '';

    const [formLoad, setFormLoad] = useState<boolean>(true);
    const [budgetsData, setBudgetsData] = useState<any>([]);
    const [userData, setUserData] = useState<any>([]);
    const [partnerData, setPartnerData] = useState<any>([]);
    const [dataBudgetOfers, setDataBudgetOfers] = useState<any>([]);
    const [dataBudgetOfersChats, setDataBudgetOfersChats] = useState<any>([]);
    const [menuDisplay, setMenuDisplay] = useState<boolean>(true);

    const [formMessage, setFormMessage] = useState('');
    const [formSendLoad, setFormSendLoad] = useState(false);

    const ref: any = React.useRef(null);

    const changeMenuDisplay = (e: { preventDefault: () => void; }) => {
        setMenuDisplay(!menuDisplay);
    }

    function handleFormMessage(event: { target: { value: any; }; }) {
        setFormMessage(event.target.value);
    }

    const checkSendChat = () => {
        if (formMessage === '') {
            alert('Digite algo para enviar!')
        } else {
            insertBudgetOfferChatItem();
        }
    }

    async function insertBudgetOfferChatItem() {
        setFormSendLoad(true);
        try {
            const refDoc = addDoc(collection(db, 'budgets_offers_chats'), {
                budgets_offer_id: dataBudgetOfers[0]?.id,
                partner_id: partnerId,
                type: 3,
                description: formMessage,
                created_at: Timestamp.now()
            });
            setFormMessage('');
            setFormSendLoad(false);

        } catch (err) {
            alert(err);
            setFormSendLoad(false);
        }
    }

    useEffect(() => {
        const loadDataBudgetItem = db
            .collection("budgets")
            .doc(id)
            .onSnapshot((doc: { data: () => any; }) => {
                if (doc) {
                    setBudgetsData(doc.data());
                    console.log('doc.data()[0].user_id : ' + doc.data()[0].user_id)
                    const loadDataUserItem = db
                        .collection("users")
                        .doc(doc.data()[0].user_id)
                        .onSnapshot((doc: { data: () => any; }) => {
                            if (doc) {
                                setUserData(doc.data());
                            }
                        });
                }
            });

        const loadDataPartnerItem = db
            .collection("partners")
            .doc(partnerId)
            .onSnapshot((doc: { data: () => any; }) => {
                if (doc) {
                    setPartnerData(doc.data());
                }
            });

        const loadDataBudgetOfferItem = db
            .collection("budgets_offers")
            .where("budget_id", '==', id)
            .where("partner_id", '==', partnerId)
            .onSnapshot((snapshot: { docs: any[]; }) => {
                const listItems: any = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }))
                setDataBudgetOfers(listItems);
                console.log('listItems[0].id : ' + listItems[0].id);
                const loadDataBudgetOferChats =
                    db
                        .collection("budgets_offers_chats")
                        .where("budgets_offer_id", '==', listItems[0].id)
                        .orderBy("created_at", "asc")
                        .onSnapshot((snapshot: { docs: any[]; }) => {
                            const listItems: any = snapshot.docs.map(doc => ({
                                id: doc.id,
                                ...doc.data(),
                            }))
                            setDataBudgetOfersChats(listItems);
                            setFormLoad(false);
                        });
            });

        return () => {
            loadDataBudgetItem();
            loadDataPartnerItem();
            loadDataBudgetOfferItem();
        }
    }, []);

    return (<>
        {
            !formLoad ? (
                <Pagina>
                    <div className="MobileHead">
                        <div className="botao">
                            <button
                                onClick={changeMenuDisplay}
                            >
                                <RiMenuLine />
                            </button>
                        </div>
                        <img
                            className="logo"
                            src="https://rebimboka-public.nyc3.digitaloceanspaces.com/webapp/logo_v_white.png"
                        />
                    </div>
                    <SideMenu
                        opend='budgets'
                        displayMenu={menuDisplay}
                    />
                    <ConteudoFixo
                        ref={ref}
                    >
                        <DadosOrcamento>
                            <div>Orçamento { budgetsData?.status == 1 ? 'em ABERTO por ' : 'ENCERRADO por '} -  <span>{userData?.name}</span> <span>(#{id})</span></div>
                            <div><a href="/partner/budgets" className="botaoVoltar">voltar</a></div>
                        </DadosOrcamento>
                        <ChatContainer>
                            <ResumoOrcamento>
                                {
                                    budgetsData?.avatar ? (
                                        <div className="foto">
                                            <img
                                                src={budgetsData?.avatar}
                                                alt="foto"
                                                width={50}
                                                height={50}
                                            />
                                        </div>
                                    ) : null
                                }
                                <div className="infos">
                                    <div className="tipo">Busco {Sessions[budgetsData?.session].label.toLocaleUpperCase()}</div>
                                    <div className="titulo">{budgetsData?.description}</div>
                                    <div className="caracteristicas">para {budgetsData?.brand} {budgetsData?.model} - {budgetsData?.year}, {budgetsData?.color}</div>
                                </div>
                                {
                                    budgetsData?.status == 'dfd' ? (
                                        <div className="botao">
                                            <button>encerrar</button>
                                        </div>
                                    ) : null
                                }
                            </ResumoOrcamento>
                            <TimelineMensagens
                                style={{ height: budgetsData?.status == 2 ? 'calc(100% - 100px)' : 'calc(100% - 160px)' }}
                            >
                                {
                                    dataBudgetOfersChats.map((dataBudgetOfer: any, index: number) => {
                                        if (dataBudgetOfer.type == 1) {
                                            return (
                                                <LinhaMensagem_Admin
                                                    key={index}
                                                >
                                                    <BoxMensagem_Admin>
                                                        <div className="mensagem">
                                                            <div className="usuario">
                                                                <div>{partnerData?.name}</div>
                                                                <div className="horario">
                                                                    ({dataBudgetOfer?.created_at.toDate().getHours()}:{dataBudgetOfer?.created_at.toDate().getMinutes()}:{dataBudgetOfer?.created_at.toDate().getSeconds()})
                                                                </div>
                                                            </div>
                                                            <div className="texto">
                                                                {dataBudgetOfer?.description}
                                                            </div>
                                                            <div className="resumo-orcamento">
                                                                <div>
                                                                    <div className="titulo">Valor:</div>
                                                                    <div className="valor">R$ {dataBudgetOfer?.value}</div>
                                                                </div>
                                                                <div>
                                                                    <div className="titulo">Entrega:</div>
                                                                    <div className="valor">
                                                                        {
                                                                            dataBudgetOfer?.delivery ?
                                                                                dataBudgetOfer?.delivery_value == 0 ?
                                                                                    'GRATIS' : 'R$ ' + dataBudgetOfer?.delivery_value
                                                                                : 'NÃO'
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className="titulo">Retirada:</div>
                                                                    <div className="valor">{dataBudgetOfer?.withdrawal ? 'SIM' : 'NÃO'}</div>
                                                                </div>
                                                                {
                                                                    dataBudgetOfer?.delivery ? (
                                                                        <div>
                                                                            <div className="titulo">Tempo de entrega:</div>
                                                                            <div className="valor">{dataBudgetOfer?.delivery_time} horas</div>
                                                                        </div>
                                                                    ) : null
                                                                }
                                                            </div>
                                                        </div>
                                                    </BoxMensagem_Admin>
                                                </LinhaMensagem_Admin>
                                            )
                                        } else if (dataBudgetOfer.type == 2) {
                                            return (
                                                <LinhaMensagem
                                                    key={index}
                                                >
                                                    <BoxMensagem>
                                                        <div className="avatar">
                                                            <img
                                                                src={fotoSolicitacao}
                                                                alt="foto"
                                                                width={35}
                                                                height={35}
                                                            />
                                                        </div>
                                                        <div className="mensagem">
                                                            <div className="usuario">
                                                                <div>{userData?.name}</div>
                                                                <div className="horario">
                                                                    ({dataBudgetOfer?.created_at.toDate().getHours()}:{dataBudgetOfer?.created_at.toDate().getMinutes()}:{dataBudgetOfer?.created_at.toDate().getSeconds()})
                                                                </div>
                                                            </div>
                                                            <div className="texto">
                                                                {dataBudgetOfer?.description}
                                                            </div>
                                                        </div>
                                                    </BoxMensagem>
                                                </LinhaMensagem>
                                            )
                                        } else if (dataBudgetOfer.type == 3) {
                                            return (
                                                <LinhaMensagem_Admin
                                                    key={index}
                                                >
                                                    <BoxMensagem_Admin>
                                                        <div className="mensagem">
                                                            <div className="usuario">
                                                                <div>{partnerData?.name} </div>
                                                                <div className="horario">
                                                                    ({dataBudgetOfer?.created_at.toDate().getHours()}:{dataBudgetOfer?.created_at.toDate().getMinutes()}:{dataBudgetOfer?.created_at.toDate().getSeconds()})
                                                                </div>
                                                            </div>
                                                            <div className="texto">
                                                                {dataBudgetOfer?.description}
                                                            </div>

                                                        </div>
                                                    </BoxMensagem_Admin>
                                                </LinhaMensagem_Admin>
                                            )
                                        }

                                        if(budgetsData?.status == 2 ){
                                            return (
                                                <LinhaMensagem
                                                    key={index}
                                                >
                                                    <BoxMensagem>
                                                        <div className="avatar">
                                                            <img
                                                                src={fotoSolicitacao}
                                                                alt="foto"
                                                                width={35}
                                                                height={35}
                                                            />
                                                        </div>
                                                        <div className="mensagem">
                                                            <div className="usuario">
                                                                <div>{userData?.name}</div>
                                                            </div>
                                                            <div className="texto">
                                                                Orçamento encerrado
                                                            </div>
                                                        </div>
                                                    </BoxMensagem>
                                                </LinhaMensagem>
                                            )
                                        }
                                    })
                                }
                            </TimelineMensagens>
                            {
                                budgetsData?.status == 1 ? (
                                    <EscreverMensagem>
                                        <input
                                            id="message"
                                            value={formMessage}
                                            onChange={handleFormMessage}
                                            type="text"
                                            placeholder="Escreva algo..."
                                            disabled={formSendLoad}
                                        />
                                        <button className="botaoAnexar">
                                            <IoDuplicate />
                                        </button>
                                        <button
                                            className="botaoEnviar"
                                            onClick={checkSendChat}
                                        >{formSendLoad ? '...' : 'enviar'}</button>
                                    </EscreverMensagem>
                                ) : null
                            }
                        </ChatContainer>
                    </ConteudoFixo>
                </Pagina>
            ) : (
                <PageLoader>
                    <span>carregando...</span>
                </PageLoader>
            )
        }</>
    )
};

export default RequestDetails;
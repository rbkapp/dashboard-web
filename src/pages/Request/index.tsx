import React, { useState, useEffect } from "react";
import { RiMenuLine } from "react-icons/ri";
import { FaSlidersH } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoExpand, IoDuplicate, IoCheckmarkSharp } from "react-icons/io5";

import {
    PageLoader,
    Pagina,
    Conteudo,
    ListagemCards,
    TopFiltros,
} from "../../styles";

import {
    Overlay, EnviarOrcamento,
} from "./styles";

import SideMenu from "../../components/SideMenu";
import RequestItem from './RequestItem';

import db from '../../config/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import Datas from '../../constants/Datas';

const Months = Datas.Months;

export default function Request() {
    const [formLoad, setFormLoad] = useState<boolean>(true);
    const [offerModal, setOfferModal] = useState<boolean>(false);
    const [budgetDataModal, setBudgetDataModal] = useState<any>([]);

    const [menuDisplay, setMenuDisplay] = useState<boolean>(true);
    const [budgetsData, setBudgetsData] = useState<any>([]);

    const [formValue, setFormValue] = useState<string>('');
    const [formWithdrawal, setFormWithdrawal] = useState<boolean>(true);
    const [formDelivery, setFormDelivery] = useState<boolean>(true);
    const [formDeliveryValue, setFormDeliveryValue] = useState<string>('');
    const [formDeliveryTime, setFormDeliveryTime] = useState<string>('');
    const [formDescription, setFormDescription] = useState<string>('');
    const [formSendLoad, setFormSendLoad] = useState<boolean>(false);

    const changeMenuDisplay = (e: { preventDefault: () => void; }) => {
        setMenuDisplay(!menuDisplay);
    }

    const openOfferModal = (budgetData: any) => {
        setBudgetDataModal(budgetData);
        setOfferModal(true);
    }

    function handleFormValue(event: { target: { value: any; }; }) {
        setFormValue(event.target.value);
    }
    function handleFormDeliveryValue(event: { target: { value: any; }; }) {
        setFormDeliveryValue(event.target.value);
    }
    function handleFormDeliveryTime(event: { target: { value: any; }; }) {
        setFormDeliveryTime(event.target.value);
    }
    function handleFormDescription(event: { target: { value: any; }; }) {
        setFormDescription(event.target.value);
    }

    const checkSendOffer = () => {
        if (formLoad) {
        } else if (formValue === '') {
            alert('Por favor, informe o valor do seu orçamento!');
        } else if (formDelivery && formDeliveryValue === '') {
            alert('Por favor, informe o valor da entrega!');
        } else if (formDelivery && formDeliveryTime === '') {
            alert('Por favor, informe o tempo da entrega!');
        } else {
            insertBudgetOfferItem();
        }
    }

    async function insertBudgetOfferItem() {
        setFormSendLoad(true);
        try {
            const refDoc = await addDoc(collection(db, 'budgets_offers'), {
                budget_id: budgetDataModal.id,
                partner_id: 'EIje2O927UGDe6mBo2ZK',
                created_at: Timestamp.now()
            })
            insertBudgetOfferChatItem(refDoc.id);
        } catch (err) {
            alert(err);
            setFormSendLoad(false);
        }
    }

    async function insertBudgetOfferChatItem(budgets_offer_id: string) {
        try {
            const refDoc = await addDoc(collection(db, 'budgets_offers_chats'), {
                budgets_offer_id: budgets_offer_id,
                partner_id: 'EIje2O927UGDe6mBo2ZK',
                type: 1,
                value: formValue,
                withdrawal: formWithdrawal,
                delivery: formDelivery,
                delivery_value: formDeliveryValue,
                delivery_time: formDeliveryTime,
                description: formDescription,
                created_at: Timestamp.now()
            })
            setOfferModal(false);
            window.open('/budgets/details/'+budgetDataModal.id, '_self')?.focus();
        } catch (err) {
            alert(err);
            setFormSendLoad(false);
        }
    }

    useEffect(() => {
        const loadDataBudgets = db
            .collection("budgets")
            .where("status", '==', 1)
            .orderBy("created_at", "desc")
            .onSnapshot(snap => {
                const data: any = snap.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }))
                if (data.length > 0) {
                    const loadDataBudgetOfferItem = db
                        .collection("budgets_offers")
                        .where("budget_id", '==', data[0].id)
                        .where("partner_id", '==', 'EIje2O927UGDe6mBo2ZK')
                        .onSnapshot(snap2 => {
                            const data2 = snap2.docs.map(doc2 => ({
                                id: doc2.id,
                                ...doc2.data(),
                            }))

                            if (data2.length == 0) {
                                setBudgetsData([]);
                                setBudgetsData(data);
                            }
                        });
                }
                setFormLoad(false);
            });
        return () => {
            loadDataBudgets();
        }
    }, []);

    return (<>
        {
            !formLoad ? (
                <Pagina>
                    {
                        offerModal ? (
                            <Overlay>
                                <EnviarOrcamento>
                                    <div
                                        className="fechar"
                                        onClick={() => setOfferModal(false)}
                                    ><AiOutlineCloseCircle /></div>

                                    <div className="titulo">Enviar Orçamento</div>
                                    <div className="prod">
                                        <div>
                                            <div className="busco">Busco {budgetDataModal?.session}, para RETIRADA ou ENTREGA</div>
                                            <div className="titulo-produto">{budgetDataModal?.description}</div>
                                            <div className="modelo">{budgetDataModal?.brand} {budgetDataModal?.model} - <span className="caracteristicas">{budgetDataModal?.year}, {budgetDataModal?.color}</span></div>
                                            <div className="tempo-publicacao">{budgetDataModal?.created_at.toDate().getDay() - 1} de {Months[budgetDataModal?.created_at.toDate().getMonth()].label} às {budgetDataModal?.created_at.toDate().getHours()}:{budgetDataModal?.created_at.toDate().getMinutes()}</div>
                                        </div>
                                        {
                                            budgetDataModal?.avatar ? (
                                                <div className="pos-rel">
                                                    <div className="btn-zoom-foto">
                                                        <IoExpand />
                                                    </div>
                                                    <img
                                                        src={budgetDataModal?.avatar}
                                                        alt="Sem foto"
                                                        width={100}
                                                        height={100}
                                                    />
                                                </div>
                                            ) : null
                                        }
                                    </div>
                                    <div className="formulario">
                                        <div className="formulario_item">
                                            <div className="label">Valor:</div>
                                            <div>
                                                <input
                                                    id="value"
                                                    type="number"
                                                    placeholder="Valor"
                                                    onChange={handleFormValue}
                                                    disabled={formSendLoad}
                                                />
                                            </div>
                                        </div>

                                        <div className="formulario_item">
                                            <div className="label">Retirada e entrega:</div>

                                            <div className="opcoesEntrega">
                                                <div className="radio-opcao-item">
                                                    <div className="iconeChecked"><IoCheckmarkSharp /></div>
                                                    <input id="retirada" name="entrega" type="checkbox" disabled={formSendLoad} />
                                                    <label htmlFor="retirada">Retirada</label>
                                                </div>

                                                <div className="radio-opcao-item">
                                                    <div className="iconeChecked"><IoCheckmarkSharp /></div>
                                                    <input id="entrega" name="entrega" type="checkbox" disabled={formSendLoad} />
                                                    <label htmlFor="entrega">Entrega</label>
                                                </div>

                                                <div>
                                                    <input
                                                        id="delivery_value"
                                                        type="number"
                                                        placeholder="Valor"
                                                        onChange={handleFormDeliveryValue}
                                                        disabled={formSendLoad}
                                                    />
                                                </div>

                                                <div>
                                                    <select
                                                        name=""
                                                        id="delivery_time"
                                                        onChange={handleFormDeliveryTime}
                                                        disabled={formSendLoad}
                                                    >
                                                        <option value="">Selecione</option>
                                                        <option value="1">1 hora</option>
                                                        <option value="2">2 horas</option>
                                                        <option value="3">3 horas</option>
                                                        <option value="5">5 horas</option>
                                                        <option value="8">8 horas</option>
                                                        <option value="12">12 horas</option>
                                                        <option value="24">24 horas</option>
                                                        <option value="48">48 horas</option>
                                                        <option value="72">72 horas</option>
                                                    </select>
                                                </div>

                                            </div>

                                        </div>
                                        <div className="formulario_item">
                                            <div className="label">Detalhes:</div>
                                            <div className="detalhes">
                                                <input
                                                    type="text"
                                                    placeholder="(Opcional)"
                                                    onChange={handleFormDescription}
                                                    disabled={formSendLoad}
                                                />
                                                <div className="icone"><IoDuplicate /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="footer">
                                        <button
                                            onClick={checkSendOffer}
                                        >{formSendLoad ? 'enviando...' : 'enviar orçamento'}</button>
                                    </div>
                                </EnviarOrcamento>
                            </Overlay>
                        ) : null
                    }
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
                        opend='request'
                        displayMenu={menuDisplay}
                    />
                    <Conteudo>
                        <TopFiltros>
                            <div>Solicitações de orçamentos</div>
                            <div className="botao-filtro">
                                <FaSlidersH />
                            </div>
                        </TopFiltros>

                        <ListagemCards>
                            {
                                budgetsData.length === 0 ? (
                                    <div>Nenhuma solicitação no momento.</div>
                                ) : null
                            }
                            {
                                budgetsData.map((budgetItem: any, index: number) => {
                                    return (<RequestItem
                                        key={index}
                                        budgetData={budgetItem}
                                        offerModalCallBack={openOfferModal}
                                    />)
                                })
                            }
                        </ListagemCards>

                    </Conteudo>
                </Pagina>
            ) : (
                <PageLoader>
                    <span>carregando...</span>
                </PageLoader>
            )
        }</>
    )
};
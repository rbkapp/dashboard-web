import React, { useState, useEffect } from "react";
import { RiMenuLine } from "react-icons/ri";
import { FaSlidersH } from "react-icons/fa";

import {
    PageLoader,
    Pagina,
    Conteudo,
    ListagemCards,
    TopFiltros,
} from "../../styles";

import SideMenu from "../../components/SideMenu";
import RequestItem from './BudgetsItem';

import db from '../../config/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import Datas from '../../constants/Datas';

const Months = Datas.Months;

export default function Request() {
    const userId = localStorage.getItem("userId") || '';
    const partnerId = localStorage.getItem("partnerId") || '';
    const partnerType = localStorage.getItem("partnerType") || '';

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
    const [formSendLoad, setFormSendLoad] = useState<boolean>(true);

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
        setFormLoad(true);
        try {
            const refDoc = await addDoc(collection(db, 'budgets_offers'), {
                budget_id: budgetDataModal.id,
                partner_id: partnerId,
                created_at: Timestamp.now()
            })
            insertBudgetOfferChatItem(refDoc.id);
        } catch (err) {
            alert(err);
            setFormLoad(false);
        }
    }

    async function insertBudgetOfferChatItem(budgets_offer_id: string) {
        setFormSendLoad(true);
        try {
            const refDoc = await addDoc(collection(db, 'budgets_offers_chats'), {
                budgets_offer_id: budgets_offer_id,
                partner_id: partnerId,
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
            setFormSendLoad(false);
            setFormValue('');
            setFormDeliveryValue('');
            setFormDeliveryTime('');
            setFormDescription('');
        } catch (err) {
            alert(err);
            setFormSendLoad(false);
        }
    }

    useEffect(() => {
        db.collection('budgets')
        .where("type", '==', partnerType)
        .orderBy("created_at", "desc")
        .get().then((snapshot) => {
            let data: any = [];
            snapshot.forEach(doc => {
                if (doc.exists) {
                    console.log( doc.data() )

                    data.push({
                        id: doc.id,
                    ...doc.data(),
                    });
                    
                } else {
                }
            })
            setBudgetsData(data);
            setFormLoad(false);
        });
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
                    <Conteudo>
                        <TopFiltros>
                            <div>Orçamentos enviados</div>
                            <div className="botao-filtro">
                                <FaSlidersH />
                            </div>
                        </TopFiltros>

                        <ListagemCards>
                            {
                                budgetsData.length === 0 ? (
                                    <div>Nenhuma orçamento ainda, envie novos em <a href="/partner/request">solicitações</a>.</div>
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
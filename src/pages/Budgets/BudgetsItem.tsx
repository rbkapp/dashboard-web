import React, { useState, useEffect } from "react";

import db from '../../config/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

import {
    SolicitacaoCard,
} from "../Request/styles";


import Datas from '../../constants/Datas';

interface ItemBudGetOfferParamList {
    budgetData: any;
    offerModalCallBack: any;
}

const Months = Datas.Months;
const Sessions = Datas.Sessions;
const Types = Datas.Types;

const RequestItem: React.FC<ItemBudGetOfferParamList> = (props: ItemBudGetOfferParamList) => {
    const userId = localStorage.getItem("userId") || '';
    const partnerId = localStorage.getItem("partnerId") || '';
    const partnerType = localStorage.getItem("partnerType") || '';

    const [budgetData, setBudgetData] = useState(props.budgetData);

    const [dataPartner, setDataPartner] = useState<any>([]);
    const [dataBudgetOfers, setDataBudgetOfers] = useState<any>([]);

    const openOfferModal = (e: { preventDefault: () => void; }) => {
        props.offerModalCallBack(budgetData);
    }

    const openLink = (url: string) => window.open(url, '_blank')?.focus();

    useEffect(() => {
        db.collection("budgets_offers")
            .where("budget_id", '==', budgetData.id)
            .where("partner_id", '==', partnerId)
            .get().then((snapshot) => {
                let data: any = [];
                snapshot.forEach(doc => {
                    if (doc.exists) {
                        data.push({
                            id: doc.id,
                            ...doc.data(),
                        });
                    }
                })
                setDataBudgetOfers(data);
            });
    }, []);

    return (<>
        {
            dataBudgetOfers.length != 0 ? (
                <SolicitacaoCard>
                    <div className="header">
                        {budgetData?.created_at.toDate().getDay() - 1} de {Months[budgetData?.created_at.toDate().getMonth()].label} às {budgetData?.created_at.toDate().getHours()}:{budgetData?.created_at.toDate().getMinutes()}
                    </div>
                    <div className="body">
                        <div className="infos">
                            <div className="busco">{Sessions[budgetData?.session - 1].label}</div>
                            <div className="titulo">{budgetData?.description}</div>
                            <div className="modelo">{budgetData?.brand} {budgetData?.model} - <span className="caracteristicas">{budgetData?.year}, {budgetData?.color}</span></div>
                        </div>
                        {
                            budgetData?.avatar ? (
                                <div>
                                    <img
                                        src={budgetData?.avatar}
                                        alt="Sem foto"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                            ) : null
                        }

                    </div>
                    <div className="footer">
                        <button
                            onClick={() => window.open('/partner/budgets/details/' + budgetData?.id, '_self')?.focus()}
                        >abrir orçamento</button>
                    </div>
                </SolicitacaoCard>
            ) : null
        }
    </>)
}

export default RequestItem;
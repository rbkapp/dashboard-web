import { useState, useRef, useEffect } from "react";

import { FaSlidersH } from "react-icons/fa";
import { RiMenuLine } from "react-icons/ri";
import { RiBuilding4Line, RiContactsLine, RiSmartphoneLine, RiMapPinAddLine, RiCommunityLine } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";

import useWindowDimensions from '../../utils/windowDimensions';
import {
    MobileHead,
    Pagina,
    Conteudo,
    TopFiltros,
    BtnBranco,
    BtnRemover,
    Formulario,
    Campo,
} from "../../styles";

import {
    ConfiguracoesContainer, Preview, Dados, Endereco, DadosFooter, ColunaInfos,
} from "./styles";

import SideMenu from "../../components/SideMenu";

export default function Request() {
    const { height, width } = useWindowDimensions();
    const [menuDisplay, setMenuDisplay] = useState<boolean>(true);
    const ref = useRef(null)

    const changeMenuDisplay = (e: { preventDefault: () => void; }) => {
        setMenuDisplay(!menuDisplay);
    }

    useEffect(() => {
        setMenuDisplay(width > 800 ? true : true)
    }, []);

    return (
        <Pagina
            ref={ref}
        >
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
                opend='settings'
                displayMenu={menuDisplay}
            />
            <Conteudo>
                <TopFiltros>
                    <div>configurações</div>
                    <div className="botao-filtro">
                        <FaSlidersH />
                    </div>
                </TopFiltros>
                <ConfiguracoesContainer>
                    <ColunaInfos>
                        <Preview>
                            <div className="logo-loja">
                            </div>
                            <div className="infos-preview">
                                <div className="nome-loja">{localStorage.getItem("partnerName") || ''}</div>
                                <div className="botoes">
                                    <BtnBranco>editar foto</BtnBranco>
                                    <BtnRemover>remover</BtnRemover>
                                </div>
                            </div>
                        </Preview>
                        <Dados>
                            <Formulario>
                                <div className="titulo-form">Dados da Loja</div>
                                <Campo>
                                    <div className="icone"><AiOutlineUser /></div>
                                    <input type="text" value={localStorage.getItem("partnerName") || ''} placeholder="Nome Fantasia" />
                                </Campo>
                                <Campo>
                                    <div className="icone"><BiCategory /></div>
                                    <select 
                                    name="" 
                                    id=""
                                    value={localStorage.getItem("partnerType") || ''}
                                    >
                                        <option value="">Categoria</option>
                                        <option value="1">Motos peças e serviços</option>
                                        <option value="2">Veículos leves peças e serviços</option>
                                        <option value="3">Veículos pesados peças e serviços</option>
                                    </select>
                                </Campo>
                                <Campo>
                                    <div className="icone"><RiBuilding4Line /></div>
                                    <input type="text" placeholder="Razão Social" />
                                </Campo>
                                <Campo>
                                    <div className="icone"><RiContactsLine /></div>
                                    <input type="text" value={localStorage.getItem("partnerDocument") || ''} placeholder="CNPJ" />
                                </Campo>
                                <Campo>
                                    <div className="icone"><AiOutlineUser /></div>
                                    <input type="text" placeholder="Nome do Responsável" />
                                </Campo>
                                <Campo>
                                    <div className="icone"><RiContactsLine /></div>
                                    <input type="text" placeholder="CPF do Responsável" />
                                </Campo>
                                <Campo>
                                    <div className="icone"><RiSmartphoneLine /></div>
                                    <input type="text" value={localStorage.getItem("partnerPhone") || ''} placeholder="Telefone" />
                                </Campo>
                            </Formulario>
                            <DadosFooter>
                                <BtnBranco>editar</BtnBranco>
                            </DadosFooter>
                        </Dados>
                    </ColunaInfos>
                    <ColunaInfos>
                        <Endereco>
                            <Formulario>
                                <div className="titulo-form">Endereço</div>
                                <Campo>
                                    <div className="icone"><RiMapPinAddLine /></div>
                                    <input type="text" placeholder="CEP" />
                                </Campo>
                                <Campo>
                                    <div className="icone"><RiCommunityLine /></div>
                                    <input type="text" placeholder="Endereço" />
                                </Campo>
                                <Campo>
                                    <div className="icone"><RiCommunityLine /></div>
                                    <input  type="text" placeholder="Número" />
                                </Campo>
                                <Campo>
                                    <div className="icone"><RiCommunityLine /></div>
                                    <input type="text" placeholder="Complemento" />
                                </Campo>
                                <Campo>
                                    <div className="icone"><RiCommunityLine /></div>
                                    <input type="text" placeholder="Bairro" />
                                </Campo>
                                <Campo>
                                    <div className="icone"><RiMapPinAddLine /></div>
                                    <input value={localStorage.getItem("partnerCity") || ''} type="text" placeholder="Cidade" />
                                </Campo>
                                <Campo>
                                    <div className="icone"><RiMapPinAddLine /></div>
                                    <input type="text" placeholder="Estado" />
                                </Campo>
                            </Formulario>
                            <DadosFooter>
                                <BtnBranco>editar</BtnBranco>
                            </DadosFooter>
                        </Endereco>
                    </ColunaInfos>
                </ConfiguracoesContainer>
            </Conteudo>
        </Pagina>
    )
}
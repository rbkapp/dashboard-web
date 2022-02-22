import React, { useState } from "react";

import { RiMenuLine } from "react-icons/ri";
import { FaSlidersH } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { IoChevronDownOutline } from "react-icons/io5";

import {
    Pagina,
    Conteudo,
    TopFiltros,
} from "../../styles";

import {
    Busca, Tabela, UsuariosContainer,
} from "./styles";

import SideMenu from "../../components/SideMenu";

export default function Request() {
    const [menuDisplay, setMenuDisplay] = useState<boolean>(true);

    const changeMenuDisplay = (e: { preventDefault: () => void; }) => {
        setMenuDisplay(!menuDisplay);
    }

    return (
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
                opend='users'
                displayMenu={menuDisplay}
            />
            <Conteudo>
                <TopFiltros>
                    <div>Usuários</div>
                    <div className="botao-filtro">
                        <FaSlidersH />
                    </div>
                </TopFiltros>

                <Busca>
                    <div className="form-busca">
                        <div>
                            <select name="" id="">
                                <option value="1">Buscar por usuário</option>
                                <option value="2">Buscar por CPF</option>
                                <option value="3">Buscar por e-mail</option>
                            </select>
                        </div>
                        <div>
                            <input type="text" placeholder="Nome, CPF ou Email do cliente" />
                        </div>
                        <div>
                            <button><AiOutlineSearch /></button>
                        </div>
                    </div>

                    <div className="resultados-encontrados">
                        <b>1</b> resultado encontrado
                    </div>
                </Busca>

                <UsuariosContainer>
                    <Tabela>
                        <div className="tabela-labels">
                            <div className="tabela-checkbox"><input type="checkbox" /></div>
                            <div className="tabela-id">id</div>
                            <div className="tabela-nome">Nome</div>
                            <div className="tabela-funcao">Função</div>
                            <div className="tabela-contato">Contato</div>
                            <div className="tabela-status">Status</div>
                            <div></div>
                        </div>

                        <div className="lista-usuarios">

                            <div className="usuario-item">
                                <div className="usuario-checkbox"><input type="checkbox" /></div>
                                <div className="usuario-id">53</div>
                                <div className="usuario-nome">Ricado Silva</div>
                                <div className="usuario-funcao">Administrador</div>
                                <div className="usuario-contato">
                                    <div>(00) 9 0000 - 0000</div>
                                    <div>ricardosilva@teste.com</div>
                                </div>
                                <div className="usuario-status">
                                    <div className="usuario-ativo">
                                        Ativo
                                    </div>
                                </div>
                                <div className="usuario-expandir">
                                    <IoChevronDownOutline />
                                </div>
                            </div>
                        </div>
                    </Tabela>
                </UsuariosContainer>

            </Conteudo>
        </Pagina>
    )
}
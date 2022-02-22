import React, { useState, useEffect } from "react";

import {
  AiOutlineBell,
  AiOutlineFileText,
  AiOutlineArrowLeft
} from "react-icons/ai";

import {
  IoChatbubblesOutline,
  IoPeopleOutline,
  IoSettingsOutline
} from "react-icons/io5";

import { MenuLateral } from './style';

import usuarioAvatar from '../../assets/img/avatar.png';

interface SideMenuProps {
  opend?: string;
  displayMenu?: boolean;
}

const SideMenu: React.FC<SideMenuProps> = ({ opend, displayMenu }) => {
  return (
    <MenuLateral
      style={{ display: displayMenu ? 'block' : 'none' }}
    >

      <div className="rebimboka">
        <img className="logo" src="https://rebimboka-public.nyc3.digitaloceanspaces.com/webapp/logo_white.png" />
      </div>
      
      <nav>
        <ul>
          <li>
            <a href="#">
              <div className="icone"><AiOutlineBell /></div>
              Notificações
            </a>
          </li>
          <li>
            <div
              className="top_bg"
              style={{ display: opend == 'request' ? 'block' : 'none' }}
            >
              <img className="bg" src="https://rebimboka-public.nyc3.digitaloceanspaces.com/webapp/menu_top.png" />
            </div>
            <a
              href="/request"
              className={opend == 'request' ? 'menu-opend' : ''}
            >
              <div className="icone"><AiOutlineFileText /></div>
              Solicitações
            </a>
            <div
              className="bottom_bg"
              style={{ display: opend == 'request' ? 'block' : 'none' }}
            >
              <img className="bg" src="https://rebimboka-public.nyc3.digitaloceanspaces.com/webapp/menu_bottom.png" />
            </div>
          </li>
          <li>
          <div
              className="top_bg"
              style={{ display: opend == 'budgets' ? 'block' : 'none' }}
            >
              <img className="bg" src="https://rebimboka-public.nyc3.digitaloceanspaces.com/webapp/menu_top.png" />
            </div>
            <a
              href="/budgets"
              className={opend == 'budgets' ? 'menu-opend' : ''}
            >
              <div className="icone"><IoChatbubblesOutline /></div>
              Orçamentos
            </a>
            <div
              className="bottom_bg"
              style={{ display: opend == 'budgets' ? 'block' : 'none' }}
            >
              <img className="bg" src="https://rebimboka-public.nyc3.digitaloceanspaces.com/webapp/menu_bottom.png" />
            </div>
          </li>
          <li>
          <div
              className="top_bg"
              style={{ display: opend == 'users' ? 'block' : 'none' }}
            >
              <img className="bg" src="https://rebimboka-public.nyc3.digitaloceanspaces.com/webapp/menu_top.png" />
            </div>
            <a
              href="/users"
              className={opend == 'users' ? 'menu-opend' : ''}
            >
              <div className="icone"><IoPeopleOutline /></div>
              Usuários
            </a>
            <div
              className="bottom_bg"
              style={{ display: opend == 'users' ? 'block' : 'none' }}
            >
              <img className="bg" src="https://rebimboka-public.nyc3.digitaloceanspaces.com/webapp/menu_bottom.png" />
            </div>
          </li>
          <li>
          <div
              className="top_bg"
              style={{ display: opend == 'settings' ? 'block' : 'none' }}
            >
              <img className="bg" src="https://rebimboka-public.nyc3.digitaloceanspaces.com/webapp/menu_top.png" />
            </div>
            <a
              href="/settings"
              className={opend == 'settings' ? 'menu-opend' : ''}
            >
              <div className="icone"><IoSettingsOutline /></div>
              Configurações
            </a>
            <div
              className="bottom_bg"
              style={{ display: opend == 'settings' ? 'block' : 'none' }}
            >
              <img className="bg" src="https://rebimboka-public.nyc3.digitaloceanspaces.com/webapp/menu_bottom.png" />
            </div>
          </li>
        </ul>
      </nav>

      <div className="usuario-card">
        <div className="avatar">
          <img
            className="status-normal"
            src={usuarioAvatar}
            alt="avatar"
          />
        </div>
        <div className="infos">
          <div className="nome">Ricardo Silva</div>
          <div className="email">ricardosilva@teste.com</div>
          <div className="botoes">
            <a href="#">
              <div><AiOutlineBell /></div>
              <div>Opções</div>
            </a>
            <a href="#">
              <div><AiOutlineBell /></div>
              <div>Sair</div>
            </a>
          </div>
        </div>
      </div>

    </MenuLateral>
  )
};

export default SideMenu;
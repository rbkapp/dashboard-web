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

import { useAuth } from "contexts/AuthContext";
interface SideMenuProps {
  opend?: string;
  displayMenu?: boolean;
}

const SideMenu: React.FC<SideMenuProps> = ({ opend, displayMenu }) => {
  const { user } = useAuth();

  return (
    <MenuLateral
      style={{ display: displayMenu ? 'block' : 'none' }}
    >

      <div className="rebimboka">
        <a href="/partner/request">
          <img className="logo" src="https://rebimboka-public.nyc3.digitaloceanspaces.com/webapp/logo_white.png" />
        </a>
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
              href="/partner/request"
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
              href="/partner/budgets"
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
              href="/partner/users"
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
              href="/partner/settings"
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
        {localStorage.getItem("userPhoto") != '' && localStorage.getItem("userPhoto") != 'undefined' ? (
          <div className="avatar">
            <img
              className="status-normal"
              src={localStorage.getItem("userPhoto") || ''}
              alt="avatar"
            />
          </div>
        ) : null}
        <div className="infos">
          {localStorage.getItem("userName") != '' && localStorage.getItem("userName") != 'undefined' ? (
            <div className="nome">{localStorage.getItem("userName")}</div>
          ) : null}
          <div className="email">{localStorage.getItem("userEmail")}</div>
          <div className="botoes">
            <a href="/partner/settings">
              <div><AiOutlineBell /></div>
              <div>Opções</div>
            </a>
            <a href="/logout">
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
// components/defaultNavItems.tsx
import React from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { RiListSettingsLine } from "react-icons/ri";
import { FaUserCog } from "react-icons/fa";

import { FaBuildingUser } from "react-icons/fa6";
import { TbBuildingBroadcastTowerFilled } from "react-icons/tb";
import { BsSendArrowDownFill } from "react-icons/bs";
import { HiMiniCommandLine } from "react-icons/hi2";
import { FaBook } from "react-icons/fa";
import { GoCommandPalette } from "react-icons/go";
import { BsFileEarmarkCodeFill } from "react-icons/bs";
import { GrCode } from "react-icons/gr";
import { ImDatabase } from "react-icons/im";
import { AiFillDatabase } from "react-icons/ai";
import { FaCodeMerge } from "react-icons/fa6";
import { MdNotificationsActive } from "react-icons/md";
import { FaFlag } from "react-icons/fa";
import { TbAlertOctagonFilled } from "react-icons/tb";




// define a NavItem prop
export type NavItem = {
  label: string;
  href: string;
  colapsable?: boolean;
  icon: React.ReactNode;
  children?: NavItem[];
};

export const defaultNavItems: NavItem[] = [
  {
    label: "Clientes",
    href: "/",
    icon: <FaBuildingUser  size={18} />,
  },
  {
    label: "Equipamentos",
    href: "/pt/equipamentos",
    icon: <TbBuildingBroadcastTowerFilled  size={18} />,
  },
  {
    label: "Requisições",
    href: "/pt/teste",
    icon: <BsSendArrowDownFill size={18} />,
  },
  {
    label: "Logs de Câmeras",
    href: "/",
    icon: <HiMiniCommandLine size={18} />,
  },
  {
    label: "Dicionário de Eventos",
    href: "/",
    icon: <FaBook size={18} />,
  },
  {
    label: "Comandos",
    icon: <GoCommandPalette size={18} />,
    href: '/',
    colapsable: true,
    children: [
        {
            label: "Em Massa",
            href: "/",
            icon: <BsFileEarmarkCodeFill size={18} />,
        },
        {
            label: "Virloc",
            href: "/",
            icon: <GrCode size={18} />,
        }
    ],
  },
  {
    label: "Dado Bruto",
    icon: <ImDatabase size={18} />,
    href: '/',
    colapsable: true,
    children: [
        {
            label: "VL",
            href: "/",
            icon: <AiFillDatabase size={18} />,
        },
        {
            label: "IoT Hub",
            href: "/",
            icon: <FaCodeMerge size={18} />,
        }
    ],
  },
  {
    label: "Notificações",
    icon: <MdNotificationsActive size={18} />,
    href: '/',
    colapsable: true,
    children: [
        {
            label: "Banner",
            href: "/",
            icon: <FaFlag size={18} />,
        },
        {
            label: "Notificação",
            href: "/",
            icon: <TbAlertOctagonFilled size={18} />,
        }
    ],
  },
  {
    label: "Configurações",
    icon: <IoSettingsSharp size={18} />,
    href: '/',
    colapsable: true,
    children: [
        {
            label: "Geral",
            href: "/",
            icon: <RiListSettingsLine size={18} />,
        },
        {
            label: "Perfil",
            href: "/",
            icon: <FaUserCog size={18} />,
        }
    ],

  }
];
import React from "react";
import {SvgIcon} from "@mui/material";
import {UsersIcon} from "@heroicons/react/24/solid";

export interface NavItem {
    title: string;
    path: string;
    icon: React.ReactElement;
    disabled?: boolean;
    external?: boolean;
}

export const items: NavItem[] = [
    {
        title: 'Customers',
        path: '/customers',
        icon: (
            <SvgIcon fontSize="small">
                <UsersIcon />
            </SvgIcon>
        )
    },
    /*    {
            title: 'Gestion des utilisateurs',
            path: 'users.index',
            icon: (
                <SvgIcon fontSize="small">
                    <UsersIcon/>
                </SvgIcon>
            ),
        },*/
    /*    {
            title: 'Statistiques et graphiques',
            path: 'statistics.index',
            icon: (
                <SvgIcon fontSize="small">
                    <ShoppingBagIcon/>
                </SvgIcon>
            ),
        },*/

];
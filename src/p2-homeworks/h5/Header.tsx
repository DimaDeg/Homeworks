import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routes";
import s from './Header.module.css'


function Header() {
    return (
        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={t=>t.isActive ? s.active : s.item}>PreJunior</NavLink>
            <NavLink to={PATH.JUNIOR} className={t=>t.isActive ? s.active : s.item}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={t=>t.isActive ? s.active : s.item}>JuniorPlus</NavLink>
        </div>
    )
}

export default Header

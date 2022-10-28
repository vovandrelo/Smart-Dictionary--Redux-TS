import { NavLink } from "react-router-dom";
import classNames from "classnames";

import style from "./style-header.module.sass";

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.logo}>
                <NavLink to="/" className={({isActive}) => classNames(style.item, {[style.active]: isActive})}>W</NavLink>
            </div>

            <nav className={style.navigate}>
                <NavLink to="/posts" className={({isActive}) => classNames(style.item, {[style.active]: isActive})}>Учить</NavLink>
                <NavLink to="/albums" className={({isActive}) => classNames(style.item, {[style.active]: isActive})}>Словарь</NavLink>
                <NavLink to="/todos" className={({isActive}) => classNames(style.item, {[style.active]: isActive})}>Повторить</NavLink>
            </nav>

            <div className={style.icons}>
                <NavLink to="/auth" className={({isActive}) => classNames(style.item, {[style.active]: isActive})}>Войти</NavLink>
            </div>
        </header>
    )
}

export default Header;
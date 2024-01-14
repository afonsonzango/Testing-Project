import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../../assets/styles/components/navbar/Navbar.module.css";
import { Outlet } from "react-router-dom";

import GetIcons from "./partials/IconsFields";
import "../../assets/styles/components/general/General.module.css";
import logedUserData from "../data/logedUserData";

const Navbar = () => {
    const [navbarStatus, setNavbarStatus] = useState(false);

    document.addEventListener('keydown', function (event) {
        if ((event.key === 'P' && (event.ctrlKey || event.metaKey)) || (event.key === 'p' && (event.ctrlKey || event.metaKey))) {
            event.preventDefault();
            setFocusSearchInput();
        }
    });

    const setFocusSearchInput = () => {
        const element: any = document.querySelector('[data-search]');
        element.focus();
    }

    const menuActions = () => {
        if (navbarStatus) setNavbarStatus(false); else setNavbarStatus(true);
    }

    useEffect(() => {
        const systemSettingDark:any = window.matchMedia("(prefers-color-scheme: dark)");
        const htmlElementPage:any = document.querySelector("html");

        if (localStorage.getItem('theme-color') == 'dark') {
            htmlElementPage.setAttribute("data-theme", 'dark');
        } else if (localStorage.getItem('theme-color') == 'light') {
            htmlElementPage.setAttribute("data-theme", 'light');
        } else if (systemSettingDark.matches) {
            htmlElementPage.setAttribute("data-theme", 'dark');
        }

        const button:any = document.querySelector("[data-theme-toggle]");
        const htmlElect:any = document.querySelector("html");
        var actualtheme = htmlElect.getAttribute("data-theme");

        if (actualtheme == 'dark') {
            button.setAttribute("checked", "");
        } else {
            button.removeAttribute("checked", "");
        }

        button.addEventListener('click', function () {
            var actualtheme = htmlElect.getAttribute("data-theme");

            if (actualtheme == 'dark') {
                localStorage.setItem('theme-color', 'light');
                htmlElect.setAttribute("data-theme", 'light');
            } else {
                localStorage.setItem('theme-color', 'dark');
                htmlElect.setAttribute("data-theme", 'dark');
            }
        });
    }, []);

    return (
        <section className={styles.generalClassName}>
            <aside className={styles.asideMaterial} data-navigation={navbarStatus}>
                <div className={styles.logoBlanket}>
                    <div className={styles.logofk}></div>
                    <div className={styles.logoname}>userhub</div>
                </div>
                <nav className={styles.navContainer}>
                    <NavLink className={styles.navlink} to={'/application/dashboard'} onClick={menuActions}>
                        <GetIcons.dashboard /> Dashboard
                    </NavLink>

                    <NavLink className={styles.navlink} to={'/application/users'} onClick={menuActions}>
                        <GetIcons.users /> Usuários
                    </NavLink>

                    <NavLink className={styles.navlink} to={'/application/configuration'} onClick={menuActions}>
                        <GetIcons.configurations /> Configuration
                    </NavLink>
                </nav>

                <div className={styles.themeTransform}>
                    <div className={styles.leftIcon}><GetIcons.moon /></div>
                    <div className={styles.middleText}>Dark Mode</div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" data-theme-toggle />
                    </div>
                </div>
            </aside>

            <div className={styles.bandRender}>
                <div className={styles.upperMenu}>
                    <div className={styles.searchbar}>
                        <div className={styles.inputcontainer}>
                            <div className={styles.searchicon} onClick={setFocusSearchInput}>
                                <GetIcons.search />
                            </div>
                            <input type="text" className={styles.searchbarinput} placeholder={'Ctrl+P para pesquisar'} data-search />
                            <div className={styles.keyway}>
                                <div className={styles.keyalt}>
                                    <div className={styles.controllIcon}>
                                        <GetIcons.control />
                                    </div>
                                    <div className={styles.tstx}>P</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.useroptions}>
                        <div className="btn-group">
                            <button className={styles.notifications} type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" data-notification-status='true'>
                                <GetIcons.notifications />
                            </button>
                            <div className="dropdown-menu dropdown-menu-end" data-notifications>
                                <div className={styles.blockTitle}>
                                    Notificações
                                </div>
                                <div className={styles.notificationitem} data-new>
                                    <div className={styles.iconstatus}></div>
                                    <div className={styles.notificationtxt}>
                                        <div className={styles.title}>We got here a title</div>
                                        <div className={styles.desc}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio distinctio aperiam consequatur ipsum iusto
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.notificationitem}>
                                    <div className={styles.iconstatus}></div>
                                    <div className={styles.notificationtxt}>
                                        <div className={styles.title}>We got here a title</div>
                                        <div className={styles.desc}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio distinctio aperiam consequatur ipsum iusto
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.notificationitem}>
                                    <div className={styles.iconstatus}></div>
                                    <div className={styles.notificationtxt}>
                                        <div className={styles.title}>We got here a title</div>
                                        <div className={styles.desc}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio distinctio aperiam consequatur ipsum iusto
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="btn-group">
                            <div className={styles.userprofileitens} data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                <div className={styles.photo}>
                                    <img src={logedUserData.foto} alt="Profile foto" />
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.name}>{logedUserData.nome}</div>
                                    <div className={styles.role}>{logedUserData.role}</div>
                                </div>
                            </div>
                            <div className="dropdown-menu dropdown-menu-end" data-user-dropdown>
                                <div className={styles.blockTitle}>
                                    <div className={styles.centerprofile}>
                                        <div className={styles.photoc}>
                                            <img src={logedUserData.foto} alt={logedUserData.nome} />
                                        </div>
                                        <div className={styles.name}>{logedUserData.nome}</div>
                                        <div className={styles.role}>{logedUserData.role}</div>
                                    </div>

                                    <ul>
                                        <li>
                                            <a href="">
                                                <div className="icon">
                                                    <GetIcons.setting />
                                                </div>
                                                Definições de conta
                                            </a>
                                        </li>

                                        <li>
                                            <a href="">
                                                <div className="icon">
                                                    <GetIcons.logOut />
                                                </div>
                                                Terminar Sessão
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <button className={styles.mobilemenu} onClick={menuActions}>
                            <GetIcons.hamburguer />
                        </button>
                    </div>
                </div>
                <div className={styles.pageContent}>
                    <Outlet />
                </div>
            </div>
        </section>
    );
};

export default Navbar;
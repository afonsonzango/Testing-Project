import styles from "../../assets/styles/components/configuration/Configuration.module.css"
import { useEffect, useState } from "react";

import Preferences from "../components/peaces/configuration_peaces/preferences";
import AccountSettings from "../components/peaces/configuration_peaces/account_definitions";
import GeneralSettings from "../components/peaces/configuration_peaces/general_settings";

const Configurations = () => {
  const [page, setPage] = useState(<></>);

  var localpath = window.location.pathname;
  var splitedPath = localpath.split("/");
  var confgurePath = "";

  useEffect(() => {
    const verifyPath = (path: any) => {
      switch (path) {
        case "/": {
          window.history.pushState("", "", localpath + "general-configurations");
          setPage(GeneralSettings);
        } break;

        case "": {
          window.history.pushState("", "", localpath + "/general-configurations");
          setPage(GeneralSettings);
        } break;

        case "/general-configurations": {
          setPage(GeneralSettings);
        } break;

        case "/general-configurations/": {
          setPage(GeneralSettings);
        } break;

        case "/account-settings": {
          setPage(AccountSettings);
        } break;

        case "/account-settings/": {
          setPage(AccountSettings);
        } break;

        case "/preferences": {
          setPage(Preferences);
        } break;

        case "/preferences/": {
          setPage(Preferences);
        } break;

        default: {

        } break;
      }
    }

    for (let i = 0; i < splitedPath.length; i++) {
      if (i > 2) {
        confgurePath += '/' + splitedPath[i];
      }

      if (i == splitedPath.length - 1) {
        verifyPath(confgurePath);
      }
    }
  }, []);

  var prevConfPagePath = "/application/configuration/"

  const handleclick = (page: any, path: string) => {
    setPage(page);
    window.history.pushState("", "", prevConfPagePath + path);
  }

  return (
    <>
      <h1 className={styles.title}>Configurações</h1>

      <section className={styles.settingsMenu}>
        <aside className={styles.listMenu}>
          <button onClick={() => handleclick(GeneralSettings, "general-configurations")}>Definições Gerais</button>
          <button onClick={() => handleclick(AccountSettings, "account-settings")}>Definições de conta</button>
          <button onClick={() => handleclick(Preferences, "preferences")}>Preferências</button>
        </aside>
        <div className={styles.loadedContent}>{page}</div>
      </section>
    </>
  );
};

export default Configurations;
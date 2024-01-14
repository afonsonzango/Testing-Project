import styles from "../../../../assets/styles/components/configuration/Configuration.module.css";
import logedUserData from "../../../data/logedUserData";

export default function AccountDefinitions() {
    return (
        <>
            <section className={styles.accountsetting}>
                <div className="mb-5">
                    <h1 className={styles.title}>Definições de conta</h1>

                    <div className={[styles.photocontainer, "mb-4", "mt-4"].join(' ')}>
                        <div className={styles.ball}>
                            <img src={logedUserData.foto} alt={logedUserData.nome} />
                        </div>
                        <div className={styles.informations}>
                            <div className={styles.name}>{logedUserData.nome}</div>
                            <div className={styles.username}>{logedUserData.role}</div>
                        </div>
                    </div>
                </div>

                <div className="mb-4" style={{marginBottom: 20}}>
                    <h1 className={styles.title}>Actualizar dados pessoais</h1>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eius ullam, totam voluptatem non doloremque labore, vero saepe nesciunt ducimus quae esse eum, deserunt assumenda ea repellendus accusantium illum sed!</p>

                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Primeiro Nome</label>
                            <input type="text" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">Segundo Nome</label>
                            <input type="text" className="form-control" id="inputPassword4" />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">E-mail</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">Telefone</label>
                            <input type="tel" className="form-control" id="inputPassword4" />
                        </div>

                        <h1 className={styles.title} style={{fontSize: 16, marginTop: 50, marginBottom: -10}}>Palavra-passe</h1>

                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Escreva a primeira senha</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">Escreva novamente</label>
                            <input type="tel" className="form-control" id="inputPassword4" />
                        </div>

                        <div className="mb-4">
                            <input type="submit" className={[styles.sumitbutton, ''].join(' ')} style={{color: '#fff !importante'}} value="Actualizar informações" />
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
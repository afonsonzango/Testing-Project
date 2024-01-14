import styles from "../../assets/styles/components/users/Users.module.css"
import GetIcons from "../components/partials/IconsFields";
import users from "../data/users";
import { useEffect, useState } from "react";
import NewUserModal from "../components/peaces/NewUserModal";

const Users = () => {
  const data: any = users;

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPagesLength, setTotalPagesLength] = useState(0);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    if (indexOfLastItem >= data.length) {
      alert('Esta é a última página');
    } else {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };
  
  const handlePrevPage = () => {
    if (indexOfFirstItem <= 0) {
      alert('Esta é a primeira página');
    } else {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  }

  useEffect(() => {
    const total = Math.ceil(data.length / itemsPerPage);
    setTotalPagesLength(total);
  }, [data]);

  return (
    <>
      <section className={styles.headersection}>
        <div className={styles.title}>Lista de usuários</div>

        <div className={styles.cotrollers}>
          <div className={styles.leftctrls}>
            <button type={'button'} className={styles.newuser} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              <GetIcons.users />
              Novo usuário
            </button>
          </div>

          <div className={styles.rightctrls}>
            {/* <div className={styles.search}></div> */}

            <div className={styles.filters}>
              <button type={'button'}>
                <GetIcons.filter />
                Sort by
              </button>

              <button type={'button'}>
                <GetIcons.dots />
                Collection Type
              </button>
            </div>
          </div>
        </div>
      </section>

      <NewUserModal />      

      <section className={styles.userslist}>
        <div className={styles.tablecontent}>
          <table>
            <thead>
              <tr>
                <td>Usuário</td>
                <td>Usuário</td>
                <td>Status</td>
                <td>Identificação</td>
                <td>Montante</td>
                <td></td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((element: any) => {
                return (
                  <tr key={element.id}>
                    <td className={styles.user}>
                      <div className={styles.photo}></div>
                      <div className={styles.infos}>
                        <div className={styles.name}>{element.nome}</div>
                        <div className={styles.email}>{element.email}</div>
                      </div>
                    </td>
                    <td className={styles.level}>{element.nivel}</td>
                    <td><div className={styles.status}>{element.status}</div></td>
                    <td className={styles.ident}>{element.id}</td>
                    <td className={styles.ident}><span className={styles.ident_money}>AOA</span> {element.montante}</td>
                    <td className={styles.actions}>
                      <div className="dropdown">
                        <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <GetIcons.dots />
                        </button>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Editar</a></li>
                          <li><a className="dropdown-item" href="#">Eliminar</a></li>
                        </ul>
                      </div>
                    </td>
                    <td className={styles.marker} data-sponser={element.module ? 'good' : 'bad'}></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className={styles.controlls}>
          <button onClick={handlePrevPage}>
            <GetIcons.left />
            {/* {leftState ? 'True' : 'False'} */}
          </button>
          <div className={styles.steps}>Página {currentPage} de {totalPagesLength}</div>
          <button onClick={handleNextPage}>
            <GetIcons.right />
            {/* {rightState ? 'True' : 'False'} */}
          </button>
        </div>
      </section>
    </>
  );
};

export default Users;
import styles from "../../assets/styles/components/dashboard/Dashboard.module.css";
import GetIcons from "../components/partials/IconsFields";
import ChartBar from "../components/charts/ChartBar";
import DonutChart from "../components/charts/DonutChart";

const Dashboard = () => {
  return (
    <>
      <section className={styles.headercontainer}>
        <div className={styles.introtitle}>
          <div className={styles.dashtitle}>Dashboard</div>
          <div className={styles.dashdescr}>Tens aqui os seus dados analíticos</div>
        </div>
        <div className={styles.controls}>
          <button className={styles.filter}>
            <GetIcons.filter /> Filtrar por
          </button>
          <button className={styles.exports}>
            <GetIcons.documents /> Exports
          </button>
        </div>
      </section>

      <section className={styles.dashboard}>
        <div className={styles.leftDivRow}>
          <div className={styles.lrBlock}>
            <div className={styles.boxchart}>
              <div className={styles.barTop}>
                <div className={styles.mainTitle}>Total Sales</div>
                <div className={styles.rightIcon}><GetIcons.dots /></div>
              </div>
              <div className={styles.middleInfor}>
                <div>
                  <div className={styles.balance}><span className={styles.moneyType}>AOA</span>110.784,02</div>
                  <div className={styles.details}>
                    <div className={styles.increase} data-status={'up'}>
                      <GetIcons.downArrow />
                      <span className={styles.valueable}>15,2%</span>
                    </div>

                    <div className={styles.strategy}>
                      +955.45,01
                      <span className={styles.monthly}>Mês</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.viewReport}>
                <div className={styles.mainTitle}>Vêr Reportagem</div>
                <div className={styles.rightIcon}><GetIcons.right /></div>
              </div>
            </div>
          </div>

          <div className={styles.lrBlock}>
            <div className={styles.boxchart}>
              <div className={styles.barTop}>
                <div className={styles.mainTitle}>Total Sales</div>
                <div className={styles.rightIcon}><GetIcons.dots /></div>
              </div>
              <div className={styles.middleInfor}>
                <div>
                  <div className={styles.balance}><span className={styles.moneyType}>AOA</span>1.007,02</div>
                  <div className={styles.details}>
                    <div className={styles.increase} data-status={'down'}>
                      <GetIcons.downArrow />
                      <span className={styles.valueable}>12,2%</span>
                    </div>

                    <div className={styles.strategy}>
                      +4.117,12
                      <span className={styles.monthly}>Mês</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.viewReport}>
                <div className={styles.mainTitle}>Vêr Reportagem</div>
                <div className={styles.rightIcon}><GetIcons.right /></div>
              </div>
            </div>
          </div>

          <div className={styles.lrBlock}>
            <div className={styles.boxchart}>
              <div className={styles.barTop}>
                <div className={styles.mainTitle}>Total Sales</div>
                <div className={styles.rightIcon}><GetIcons.dots /></div>
              </div>
              <div className={styles.middleInfor}>
                <div>
                  <div className={styles.balance}><span className={styles.moneyType}>AOA</span>122.784,02</div>
                  <div className={styles.details}>
                    <div className={styles.increase} data-status={'down'}>
                      <GetIcons.downArrow />
                      <span className={styles.valueable}>17,2%</span>
                    </div>

                    <div className={styles.strategy}>
                      +23.039,00
                      <span className={styles.monthly}>Mês</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.viewReport}>
                <div className={styles.mainTitle}>Vêr Reportagem</div>
                <div className={styles.rightIcon}><GetIcons.right /></div>
              </div>
            </div>
          </div>

          <div className={styles.lrBlock}>
            <div className={styles.boxchart}>
              <div className={styles.barTop}>
                <div className={styles.mainTitle}>Total Sales</div>
                <div className={styles.rightIcon}><GetIcons.dots /></div>
              </div>
              <div className={styles.middleInfor}>
                <div>
                  <div className={styles.balance}><span className={styles.moneyType}>AOA</span>120.784,02</div>
                  <div className={styles.details}>
                    <div className={styles.increase} data-status={'up'}>
                      <GetIcons.downArrow />
                      <span className={styles.valueable}>32,2%</span>
                    </div>

                    <div className={styles.strategy}>
                      +5.977.45,12
                      <span className={styles.monthly}>Mês</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.viewReport}>
                <div className={styles.mainTitle}>Vêr Reportagem</div>
                <div className={styles.rightIcon}><GetIcons.right /></div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.rightDivRow}>
          <div className={styles.masuretitle}>Resumo anual</div>

          <div className={styles.lineEnsure}>
            <div className={styles.lftMoney}>
              <span className={styles.money}>AOA</span>
              <span className={styles.number}>32.904,02</span>
              <div className={styles.increase} data-status={'down'}>
                <GetIcons.downArrow />
                <span className={styles.valueable}>12,2%</span>
              </div>
            </div>
            <div className={styles.bundleSignal}>
              <div className={styles.signal} data-fill={true}>
                Ganhos
              </div>
              <div className={styles.signal} data-fill={false}>
                Perdas
              </div>
            </div>
          </div>

          <ChartBar />
        </div>
      </section>

      <section className={styles.activities}>
        <div className={styles.lfblock}>
          <div className={styles.topbar}>
            <div className={styles.title}>Traffic Channel</div>
            <div className={styles.select}>
              <select name="" id="">
                <option  defaultValue={''}>Kialanda-2022</option>
                <option value="">Kialanda-2022</option>
                <option value="">Kialanda-2023</option>
                <option value="">Kialanda-2024</option>
              </select>
            </div>
          </div>

          <div className={styles.tablecontent}>
            <table>
              <thead>
                <tr>
                  <td>Usuário</td>
                  <td>Status</td>
                  <td>Identificação</td>
                  <td>Montante</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.user}>
                    <div className={styles.photo}></div>
                    <div className={styles.infos}>
                      <div className={styles.name}>Afonso Nzango</div>
                      <div className={styles.email}>afonso1.nzango·@gmail.com</div>
                    </div>
                  </td>
                  <td><div className={styles.status}>Active</div></td>
                  <td className={styles.ident}>203803ID248</td>
                  <td className={styles.ident}><span className={styles.ident_money}>AOA</span> 984.903,02</td>
                  <td className={styles.marker} data-sponser='good'></td>
                </tr>

                <tr>
                  <td className={styles.user}>
                    <div className={styles.photo}></div>
                    <div className={styles.infos}>
                      <div className={styles.name}>Afonso Nzango</div>
                      <div className={styles.email}>afonso1.nzango·@gmail.com</div>
                    </div>
                  </td>
                  <td><div className={styles.status}>Active</div></td>
                  <td className={styles.ident}>203803ID248</td>
                  <td className={styles.ident}><span className={styles.ident_money}>AOA</span> 984.903,02</td>
                  <td className={styles.marker} data-sponser='normal'></td>
                </tr>

                <tr>
                  <td className={styles.user}>
                    <div className={styles.photo}></div>
                    <div className={styles.infos}>
                      <div className={styles.name}>Afonso Nzango</div>
                      <div className={styles.email}>afonso1.nzango·@gmail.com</div>
                    </div>
                  </td>
                  <td><div className={styles.status}>Active</div></td>
                  <td className={styles.ident}>203803ID248</td>
                  <td className={styles.ident}><span className={styles.ident_money}>AOA</span> 984.903,02</td>
                  <td className={styles.marker} data-sponser='bad'></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className={styles.rtblock}>
          <div className={styles.topbar}>
            <div className={styles.title}>Traffic Channel</div>
            <div className={styles.select}>
              <select name="" id="">
                <option  defaultValue={''}>Kialanda-2022</option>
                <option value="">Kialanda-2023</option>
                <option value="">Kialanda-2024</option>
              </select>
            </div>
          </div>

          <div className={styles.donutchart}>
            <DonutChart />
          </div>

          <div className={styles.singnalsstructure}>
            <div className={styles.struct} data-color='2'>
              Selecionado
            </div>
            <div className={styles.struct} data-color='1'>
              Grafico
            </div>
            <div className={styles.struct} data-color='0'>
              Direct
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
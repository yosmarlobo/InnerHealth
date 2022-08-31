import React from "react";

const IndexPacient = () => {
  return (
    <div id="main">
      <header className="mb-3">
        <a href="#" className="burger-btn d-block d-xl-none">
          <i className="bi bi-justify fs-3"></i>
        </a>
      </header>

      <div className="page-heading">
        <h3>Bienvenida Dra.Maria Verucci</h3>
      </div>
      <div className="page-content">
        <section className="row">
          <div className="col-12 col-lg-9">
            <div className="row">
              <div className="col-6 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body px-3 py-4-5">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="stats-icon purple">
                          <i className="iconly-boldShow"></i>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <h6 className="text-muted font-semibold">
                          Total de pacientes
                        </h6>
                        <h6 className="font-extrabold mb-0">15000</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body px-3 py-4-5">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="stats-icon blue">
                          <i className="iconly-boldProfile"></i>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <h6 className="text-muted font-semibold">
                          Pacientes en espera
                        </h6>
                        <h6 className="font-extrabold mb-0">10</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-6 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body px-3 py-4-5">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="stats-icon red">
                          <i className="iconly-boldBookmark"></i>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <h6 className="text-muted font-semibold">
                          Consultas Realizadas
                        </h6>
                        <h6 className="font-extrabold mb-0">112</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4>Pacientes en la Temporada</h4>
                  </div>
                  <div className="card-body">
                    <div id="chart-profile-visit"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-xl-4">
                <div className="card">
                  <div className="card-header">
                    <h4>Casos mas comunes en tus pacientes</h4>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          {/* <svg
                            className="bi text-primary"
                            width="32"
                            height="32"
                            fill="blue"
                            // style="width: 10px"
                          >
                            <use xlink:href="assets/vendors/bootstrap-icons/bootstrap-icons.svg#circle-fill" />
                          </svg> */}
                          <h5 className="mb-0 ms-3">Fibro adenomas</h5>
                        </div>
                      </div>
                      <div className="col-6">
                        <h5 className="mb-0">57</h5>
                      </div>
                      <div className="col-12">
                        <div id="chart-europe"></div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          {/* <svg
                            className="bi text-success"
                            width="32"
                            height="32"
                            fill="blue"
                            style="width: 10px"
                          >
                            <use xlink:href="assets/vendors/bootstrap-icons/bootstrap-icons.svg#circle-fill" />
                          </svg> */}
                          <h5 className="mb-0 ms-3">Cancer de Mama</h5>
                        </div>
                      </div>
                      <div className="col-6">
                        <h5 className="mb-0">320</h5>
                      </div>
                      <div className="col-12">
                        <div id="chart-america"></div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          {/* <svg
                            className="bi text-danger"
                            width="32"
                            height="32"
                            fill="blue"
                            style="width: 10px"
                          >
                            <use xlink:href="assets/vendors/bootstrap-icons/bootstrap-icons.svg#circle-fill" />
                          </svg> */}
                          <h5 className="mb-0 ms-3">Embarazo Precoz</h5>
                        </div>
                      </div>
                      <div className="col-6">
                        <h5 className="mb-0">120</h5>
                      </div>
                      <div className="col-12">
                        <div id="chart-indonesia"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-8">
                <div className="card">
                  <div className="card-header">
                    <h4>Solicitudes Nuevas</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-hover table-lg">
                        <thead>
                          <tr>
                            <th>Paciente</th>
                            <th>Caso</th>
                            <th>Respuesta</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="col-3">
                              <div className="d-flex align-items-center">
                                <div className="avatar avatar-md">
                                  <img src="assets/images/faces/5.jpg" />
                                </div>
                                <p className="font-bold ms-3 mb-0">
                                  Daniela Moretti
                                </p>
                              </div>
                            </td>
                            <td>
                              <p className="mb-0">
                                Doctora Maria Verucci llevo 7 meses de embarazo
                                pero presento mucho dolores me gustaria una cita
                                con usted.
                              </p>
                            </td>
                            {/* <td className="col-auto">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-check-lg"
                                viewBox="0 0 16 16"
                                id="check"
                              >
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-x-lg"
                                viewBox="0 0 16 16 "
                                id="false"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                                />
                                <path
                                  fill-rule="evenodd"
                                  d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                                />
                              </svg>
                            </td> */}
                          </tr>

                          <tr>
                            <td className="col-3">
                              <div className="d-flex align-items-center">
                                <div className="avatar avatar-md">
                                  <img src="assets/images/faces/7.jpg" />
                                </div>
                                <p className="font-bold ms-3 mb-0">
                                  Juana Maria
                                </p>
                              </div>
                            </td>
                            <td>
                              <p className="mb-0">
                                Doctora Maria Verucci,Presento problemas al
                                orinar...Me gustaria una cita con usted.
                              </p>
                            </td>
                            {/* <td className="col-auto">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-check-lg"
                                viewBox="0 0 16 16"
                                id="check"
                              >
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-x-lg"
                                viewBox="0 0 16 16"
                                id="false"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                                />
                                <path
                                  fill-rule="evenodd"
                                  d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                                />
                              </svg>
                            </td> */}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div className="card">
              <div className="card-body py-4 px-5">
                <div className="d-flex align-items-center">
                  <div className="avatar avatar-xl">
                    <img src="assets/images/faces/3.jpg" alt="Face 1" />
                  </div>
                  <div className="ms-3 name">
                    <h5 className="font-bold">Dra Maria Verucci</h5>
                    <h6 className="text-muted mb-0">Ginecòloga</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4>Citas Pendientes</h4>
              </div>
              <div className="card-content pb-4">
                <div className="recent-message d-flex px-4 py-3">
                  <div className="avatar avatar-lg">
                    <img src="assets/images/faces/5.jpg" />
                  </div>
                  <div className="name ms-4">
                    <h5 className="mb-1">Naida Quispe</h5>
                    <h6 className="text-muted mb-0">
                      Consultas de medicamento
                    </h6>
                    <button
                      type="button"
                      className="btn btn-outline-danger wid"
                    >
                      Contactarse
                    </button>
                  </div>
                </div>
                <div className="recent-message d-flex px-4 py-3">
                  <div className="avatar avatar-lg">
                    <img src="assets/images/faces/6.jpg" />
                  </div>
                  <div className="name ms-4">
                    <h5 className="mb-1">Arely Alcantara</h5>
                    <h6 className="text-muted mb-0">Chequeo Preventivo</h6>
                    <button
                      type="button"
                      className="btn btn-outline-danger wid"
                    >
                      Contactarse
                    </button>
                  </div>
                </div>
                <div className="recent-message d-flex px-4 py-3">
                  <div className="avatar avatar-lg">
                    <img src="assets/images/faces/1.jpg" />
                  </div>
                  <div className="name ms-4">
                    <h5 className="mb-1">Nayeli Galan</h5>
                    <h6 className="text-muted mb-0">Infeccion De Urina</h6>
                    <button
                      type="button"
                      className="btn btn-outline-danger wid"
                    >
                      Contactarse
                    </button>
                  </div>
                </div>
                <div className="px-4">
                  <button className="btn btn-block btn-xl btn-light-primary font-bold mt-3">
                    Ver mas
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default IndexPacient;

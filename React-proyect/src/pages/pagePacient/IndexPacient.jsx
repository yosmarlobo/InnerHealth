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
        <h3>Bienvenida Daniela Moretti</h3>
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
                        <div className="stats-icon red">
                          <i className="iconly-boldBookmark"></i>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <h6 className="text-muted font-semibold">
                          Pruebas Pendientes
                        </h6>
                        <h6 className="font-extrabold mb-0">2</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-xl-4">
                <div className="card">
                  <div className="card-header">
                    <h4>Estadisticas de Gestantes En el Peru</h4>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <svg
                            className="bi text-primary wid"
                            width="32"
                            height="32"
                            fill="blue"
                          >
                            {/* <use xlink:href="/vendors/bootstrap-icons/bootstrap-icons.svg#circle-fill" /> */}
                          </svg>
                          <h5 className="mb-0 ms-3">Gestantes</h5>
                        </div>
                      </div>
                      <div className="col-6">
                        <h5 className="mb-0">862</h5>
                      </div>
                      <div className="col-12">
                        <div id="chart-europe"></div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <svg
                            className="bi text-success wid"
                            width="32"
                            height="32"
                            fill="blue"
                          >
                            {/* <use xlink:href="assets/vendors/bootstrap-icons/bootstrap-icons.svg#circle-fill" /> */}
                          </svg>
                          <h5 className="mb-0 ms-3">Lima</h5>
                        </div>
                      </div>
                      <div className="col-6">
                        <h5 className="mb-0">375</h5>
                      </div>
                      <div className="col-12">
                        <div id="chart-america"></div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <svg
                            className="bi text-danger wid"
                            width="32"
                            height="32"
                            fill="blue"
                          >
                            {/* <use xlink:href="assets/vendors/bootstrap-icons/bootstrap-icons.svg#circle-fill" /> */}
                          </svg>
                          <h5 className="mb-0 ms-3">Provincias</h5>
                        </div>
                      </div>
                      <div className="col-6">
                        <h5 className="mb-0">1025</h5>
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
                    <h4>Experiencias De otras Madres</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-hover table-lg tabla">
                        <thead>
                          <tr>
                            <th>Nombre</th>
                            <th>Experiencia</th>
                            <th>Calificacion dada</th>
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
                                  Perla Zapata
                                </p>
                              </div>
                            </td>
                            <td className="col-auto">
                              <p className="mb-0">
                                Super exelente... Pude encontrar mi posta mas
                                cercana muy grata atencion, Muchas Gracias
                                @InnerHealth
                              </p>
                            </td>
                            <i className="bi bi-star"></i>
                            <i className="bi bi-star-fill"></i>
                            <td>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                            </td>
                          </tr>
                          <tr>
                            <td className="col-3">
                              <div className="d-flex align-items-center">
                                <div className="avatar avatar-md">
                                  <img src="assets/images/faces/2.jpg" />
                                </div>
                                <p className="font-bold ms-3 mb-0">
                                  Maria Vargas
                                </p>
                              </div>
                            </td>
                            <td className="col-auto">
                              <p className="mb-0">
                                Me encanto mucho el servicio que te dan...son
                                muy atentos y se preocupan por uno,Pude resolvir
                                todas mis dudas y ya me recupere gracias a la
                                doctora Josefa Valencia
                              </p>
                            </td>
                            <td>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-half"></i>
                            </td>
                          </tr>
                          <tr>
                            <td className="col-3">
                              <div className="d-flex align-items-center">
                                <div className="avatar avatar-md">
                                  <img src="assets/images/faces/2.jpg" />
                                </div>
                                <p className="font-bold ms-3 mb-0">
                                  Juana Vera
                                </p>
                              </div>
                            </td>
                            <td className="col-auto">
                              <p className="mb-0">
                                Super @InnerHealth Me ha ayudado mucho creo que
                                le hacen falta algunas modifaciones pero de
                                resto exelente plataforma😊
                              </p>
                            </td>
                            <td>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-half"></i>
                              <i className="bi bi-star"></i>
                            </td>
                          </tr>
                          <tr>
                            <td className="col-3">
                              <div className="d-flex align-items-center">
                                <div className="avatar avatar-md">
                                  <img src="assets/images/faces/2.jpg" />
                                </div>
                                <p className="font-bold ms-3 mb-0">
                                  Marible Bencomo
                                </p>
                              </div>
                            </td>
                            <td className="col-auto">
                              <p className="mb-0">
                                La mejor Plataforma de salud que he visto😍,
                                tienen unas doctoras super atentas... Me encanta
                                @innerhealth
                              </p>
                            </td>
                            <td>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                            </td>
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
                    <img src="assets/images/faces/5.jpg" alt="Face 1" />
                  </div>
                  <div className="ms-3 name">
                    <h5 className="font-bold">Daniela Moretti</h5>
                    <h6 className="text-muted mb-0">Daniela@example.com</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4>Solicitudes de Citas Hechas</h4>
              </div>
              <div className="card-content pb-4">
                <div className="recent-message d-flex px-4 py-3">
                  <div className="avatar avatar-lg">
                    <img src="assets/images/faces/5.jpg" />
                  </div>
                  <div className="name ms-4">
                    <h5 className="mb-1">A : Maria Verucci</h5>
                    <h6 className="text-muted mb-0">
                      Doctora Maria Verucci llevo 7 meses de embarazo pero
                      presento mucho dolores me gustaria una cita con usted.
                    </h6>
                  </div>
                </div>

                <div className="px-4">
                  <button className="btn btn-block btn-xl btn-light-primary font-bold mt-3">
                    <a href="cita.html">Crear Solicitud</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <div className="footer clearfix mb-0 text-muted">
          <div className="float-start">
            <p>2021 &copy InnerHealth</p>
          </div>
          <div className="float-end"></div>
        </div>
      </footer>
    </div>
  );
};

export default IndexPacient;

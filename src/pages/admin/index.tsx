import {Container, Row} from "react-bootstrap";
import SideBar from "pages/admin/components/sideBar";
import {Route} from "react-router-dom";

const Admin = () => {
  return(
      <div className="d-flex flex-column flex-lg-row">
          <SideBar/>
          <Container fluid className="pt-3 px-5">
              <switch>
                  <Route path="/admin/produtos">
                      <Row className="mb-3">
                          <h1 className="h1 fw-bold">Produtos</h1>
                      </Row>
                  </Route>
                  <Route path="/admin/categorias">
                      <Row className="mb-3">
                          <h1 className="h1 fw-bold">Categorias</h1>
                      </Row>
                  </Route>
                  <Route path="/admin/usuarios">
                      <Row className="mb-3">
                          <h1 className="h1 fw-bold">Usuarios</h1>
                      </Row>
                  </Route>
              </switch>

          </Container>
      </div>
  )
}

export default Admin;
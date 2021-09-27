import {Container, Row} from "react-bootstrap";
import SideBar from "pages/admin/components/sideBar";
import Users from "pages/admin/user";
import PrivateRoute from "components/PrivateRoute";
import {Switch} from "react-router-dom";

const Admin = () => {
  return(
      <div className="d-flex flex-column flex-lg-row">
          <SideBar/>
          <Container fluid className="pt-3 px-5">
              <Switch>
                  <PrivateRoute path="/admin/produtos" >
                      <Row className="mb-3">
                          <h1 className="h1 fw-bold">Produtos</h1>
                      </Row>
                  </PrivateRoute>
                  <PrivateRoute path="/admin/categorias">
                      <Row className="mb-3">
                          <h1 className="h1 fw-bold">Categorias</h1>
                      </Row>
                  </PrivateRoute>
                  <PrivateRoute path="/admin/usuarios" roles={['ROLE_ADMIN']}>
                     <Users />
                  </PrivateRoute>
              </Switch>
          </Container>
      </div>
  )
}

export default Admin;
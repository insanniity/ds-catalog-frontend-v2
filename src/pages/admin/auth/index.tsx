import {Card, Col, Container, Row} from "react-bootstrap";
import {ReactComponent as AuthImage} from "assets/images/auth.svg";
import {Route, Switch} from "react-router-dom";
import Login from "pages/admin/auth/login";

const Auth = () => {
  return(
      <Container fluid className="px-3">
          <Card className="my-3 px-0 p-lg-5 rounded-3 bg-body border-0">
              <Row>
                  <Col lg={6} className="d-none d-lg-block">
                      <Row className="ps-0 ps-lg-5">
                        <h1 className="fw-bold ps-5 h1">Divulgue seus produtos <br />no DS Catalog</h1>
                        <p className="px-5 fs-4 mt-3 text-black-50">Faça parte do nosso catálogo de divulgação e aumente a venda dos seus produtos.</p>
                      </Row>
                      <Row className="justify-content-center text-center">
                        <AuthImage/>
                      </Row>
                  </Col>
                  <Col lg={6} className="text-start p-0 p-lg-5">
                      <Switch>
                          <Route path="/admin/auth/login">
                            <Login />
                          </Route>
                      </Switch>
                  </Col>
              </Row>
          </Card>
      </Container>
  )
}

export default Auth;
import {Card, Col, Container, Row} from "react-bootstrap";
import {ReactComponent as MainImage} from "assets/images/main.svg";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <Container fluid className="px-3">
            <Card className="my-3 shadow-lg px-5 p-lg-5 rounded-3 min-vh-100 justify-content-center">
                <Row className="flex-lg-row-reverse">
                    <Col lg={6}>
                        <MainImage className="img-fluid mb-lg-0 mb-3" />
                    </Col>
                    <Col lg={6} className="text-start p-0 p-lg-5">
                        <h1 className="fw-bold pt-5">Conheça o melhor catálogo de produtos</h1>
                        <p className="text-gray">Ajudaremos você a encontrar os melhores produtos disponíveis no mercado.</p>
                        <Row className="m-auto">
                            <Link to="/catalogo" className="btn btn-lg btn-primary text-white m-0 mt-lg-5"> INICIE AGORA A SUA BUSCA </Link>
                        </Row>
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}

export default Home;
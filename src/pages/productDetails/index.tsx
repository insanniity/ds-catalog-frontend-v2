import {Card, Col, Container, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Product} from "types/product";
import ProductPrice from "components/ProductPrice";


const ProductDetails = () => {
  const product: Product = {
    "id": 1,
    "name": "The Lord of the Rings",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "price": "91.5",
    "imgUrl": "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/1-big.jpg",
    "categories": [
      {
        "id": 2,
        "name": "Electronics"
      }
    ]
  }

    return (
        <Container fluid className="px-3">
            <Card className="my-3 shadow-lg px-5 p-lg-5 rounded-3">
                <Row>
                    <Row className="text-start my-3">
                      <Link to="/catalogo" className="fw-bold h3 text-decoration-none">
                        <i className="fa fa-arrow-left" /> <span className="bg-dark">VOLTAR</span>
                      </Link>
                    </Row>
                    <Col lg={6}>
                        <Row className="text-center mx-auto border rounded-3 border-2">
                          <div>
                            <Image src={product.imgUrl} className="p-4 img-fluid w-50" alt={product.name} />
                          </div>
                          <div>
                            <span className="fw-bold text-dark fs-2">{product.name}</span>
                          </div>
                          <div>
                            <ProductPrice price={product.price} />
                          </div>
                        </Row>
                    </Col>
                    <Col lg={6} className="text-start text-black-50 mt-lg-0 mb-lg-0 mt-3 mb-5">
                      <div className="mx-auto border rounded-3 border-2 h-100 p-3 p-lg-5">
                        <Col lg={12}>
                          <span className="fs-3 lh-base fw-bold">Descrição do produto</span>
                        </Col>
                        <Col lg={12} className="mt-3">
                          <span>{product.description}</span>
                        </Col>
                      </div>
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}

export default ProductDetails;
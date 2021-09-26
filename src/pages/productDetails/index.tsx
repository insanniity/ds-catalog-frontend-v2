import {Card, Col, Container, Image, Row} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import {Product} from "types/product";
import ProductPrice from "components/ProductPrice";
import {useEffect, useState} from "react";
import axios from "axios";
import {BASE_URL} from "utils/requests";
import ProductDetailLoader from "components/Loader/productDetailLoader";

type Params = {
    id: string;
}

const ProductDetails = () => {
    const [product, setProduct] = useState<Product>();
    const { id } = useParams<Params>();
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        setIsloading(true);
        axios.get(`${BASE_URL}/products/${id}`)
            .then(res => setProduct(res.data))
            .finally(() => setIsloading(false))
    }, [id])

    return (
        <Container fluid className="px-3">
            {isLoading ? (<ProductDetailLoader />) : (
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
                                <Image src={product?.imgUrl} className="p-4 img-fluid w-50" alt={product?.name} />
                              </div>
                              <div>
                                <span className="fw-bold text-dark fs-2">{product?.name}</span>
                              </div>
                              <div>
                                  {product && <ProductPrice price={product.price} /> }
                              </div>
                            </Row>
                        </Col>
                        <Col lg={6} className="text-start text-black-50 mt-lg-0 mb-lg-0 mt-3 mb-5">
                          <div className="mx-auto border rounded-3 border-2 h-100 p-3 p-lg-5">
                            <Col lg={12}>
                              <span className="fs-3 lh-base fw-bold">Descrição do produto</span>
                            </Col>
                            <Col lg={12} className="mt-3">
                              <span>{product?.description}</span>
                            </Col>
                          </div>
                        </Col>
                    </Row>
                </Card>
            )}
        </Container>
    )
}

export default ProductDetails;
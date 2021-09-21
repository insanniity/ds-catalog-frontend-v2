import {Button, Card, Col, Row} from "react-bootstrap";
import ProductImg from 'assets/images/img-teste.png';
import ProductPrice from "components/ProductPrice";

const ProductCard = () => {
    return (
        <Col>
            <Card className="text-start shadow-sm">
                <Card.Img variant="top" src={ProductImg} className="p-4 img-fluid"/>
                <hr className="m-0"/>
                <Card.Body>
                    <Card.Title className="fw-bold fs-6" >Computador Desktop - Intel Core i7</Card.Title>
                    <Card.Text>
                            <ProductPrice price={"2.779,00"} />
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>

    )
}

export default ProductCard;
import {Card, Col} from "react-bootstrap";
import ProductPrice from "components/ProductPrice";
import {Product} from "types/product";

type Props = {
    product: Product;
}

const ProductCard = ({product}: Props) => {
    return (

        <Col>
            <Card className="text-start shadow-sm">
                <Card.Img variant="top" src={product.imgUrl} className="p-4 img-fluid" alt={product.name}/>
                <hr className="m-0"/>
                <Card.Body>
                    <Card.Title className="fw-bold fs-6">{product.name}</Card.Title>
                    <Card.Text>
                        <ProductPrice price={product.price}/>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>


    )
}

export default ProductCard;
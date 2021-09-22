import {Container, Row} from "react-bootstrap";
import ProductCard from "pages/catalogo/components/product-card";
import {Product} from "types/product";

const Catalogo = () => {

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

    return(
        <Container fluid className="pt-3 px-5">
            <Row lg={5} xs={1} md={3} className="g-4">
               <ProductCard product={product}/>
               <ProductCard product={product}/>
               <ProductCard product={product}/>
               <ProductCard product={product}/>
               <ProductCard product={product}/>
            </Row>
        </Container>
    )
}

export default Catalogo;
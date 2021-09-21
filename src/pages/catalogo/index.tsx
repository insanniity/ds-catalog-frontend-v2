import {Container, Row} from "react-bootstrap";
import ProductCard from "pages/catalogo/components/product-card";

const Catalogo = () => {
    return(
        <Container fluid className="pt-3 px-5">
            <Row lg={5} xs={1} md={3} className="g-4">
               <ProductCard />
               <ProductCard />
               <ProductCard />
               <ProductCard />
               <ProductCard />
            </Row>
        </Container>
    )
}

export default Catalogo;
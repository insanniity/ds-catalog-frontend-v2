import {Container, Row} from "react-bootstrap";
import ProductCard from "pages/catalogo/components/product-card";
import {Product} from "types/product";
import {Link} from "react-router-dom";
import Mypagination from "pages/catalogo/components/pagination";
import {useEffect, useState} from "react";
import {SpringPage} from "types/spring";
import {AxiosRequestConfig} from "axios";
import {makeRequest} from "utils/requests";
import CardLoader from "components/Loader/cardLoader";


const Catalogo = () => {
    const [page, setPage] = useState<SpringPage<Product>>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const params: AxiosRequestConfig = {
            method: "GET",
            url: `/products`,
            params: {
                page: 0,
                size: 10
            }
        }
        setIsLoading(true);
        makeRequest(params)
            .then(res => setPage(res.data))
            .finally(() => setIsLoading(false));
    }, [])

    return (
        <Container fluid className="pt-3 px-5">
            <Row className="mb-3">
                <h1 className="h1 fw-bold">Catalogo de produtos</h1>
            </Row>
            <Row lg={5} xs={1} md={3} className="g-4">
                {isLoading ? (<CardLoader />) :
                    (page?.content.map((product) => (
                    <Link to={`/produto/${product.id}`} key={product.id} className="text-decoration-none text-black-50">
                        <ProductCard product={product}/>
                    </Link>
                )))}
            </Row>
            {!isLoading &&
                <Row className="mt-3">
                    {page && <Mypagination qtd={page.totalPages}/>}
                </Row>
            }
        </Container>
    )
}

export default Catalogo;
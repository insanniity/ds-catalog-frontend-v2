import ContentLoader from "react-content-loader";
import {Col} from "react-bootstrap";

const CardLoader = () => {
    return (
        <Col lg={12}>
            <ContentLoader
                width={"100%"}
                height={"75vh"}
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="0vw" y="0" rx="2" ry="2" width="18vw" height="35vh"/>
                <rect x="19vw" y="0" rx="2" ry="2" width="18vw" height="35vh"/>
                <rect x="38vw" y="0" rx="2" ry="2" width="18vw" height="35vh"/>
                <rect x="57vw" y="0" rx="2" ry="2" width="18vw" height="35vh"/>
                <rect x="76vw" y="0" rx="2" ry="2" width="18vw" height="35vh"/>

                <rect x="0vw" y="38vh" rx="2" ry="2" width="18vw" height="35vh"/>
                <rect x="19vw" y="38vh" rx="2" ry="2" width="18vw" height="35vh"/>
                <rect x="38vw" y="38vh" rx="2" ry="2" width="18vw" height="35vh"/>
                <rect x="57vw" y="38vh" rx="2" ry="2" width="18vw" height="35vh"/>
                <rect x="76vw" y="38vh" rx="2" ry="2" width="18vw" height="35vh"/>
            </ContentLoader>
        </Col>
    )
}

export default CardLoader;
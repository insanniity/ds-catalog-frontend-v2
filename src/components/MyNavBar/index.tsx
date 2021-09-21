import {Container, Nav, Navbar} from "react-bootstrap";
import { NavLink } from "react-router-dom";


const MyNavBar = () => {
    return (
        <Navbar bg="primary" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home">Catalog </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto fw-bold text-uppercase">
                        <NavLink className="nav-link" to="/" exact>Home</NavLink>
                        <NavLink className="nav-link" to="/catalogo" exact>Catalogo</NavLink>
                        <NavLink className="nav-link" to="/admin" exact>Admin</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavBar;
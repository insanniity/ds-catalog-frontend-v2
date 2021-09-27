import {Container, Dropdown, Nav, Navbar} from "react-bootstrap";
import {NavLink, useHistory} from "react-router-dom";
import {useContext, useEffect} from "react";
import {AuthContext} from "utils/AuthContext";
import {removeAuthData} from "utils/storage";
import {getTokenData, isAuthenticated} from "utils/auth";


const MyNavBar = () => {
    const {authContextData, setAuthContextData} = useContext(AuthContext);
    const history = useHistory();

    const handleLogout = () =>{
        removeAuthData();
        setAuthContextData({authenticated: false});
        history.replace('/');
    }

    useEffect(() => {
        if(isAuthenticated()){
            setAuthContextData({
                authenticated: true,
                tokenData: getTokenData()
            })
        }else{
            setAuthContextData({
                authenticated: false,
            })
        }
    }, [setAuthContextData])

    return (
        <Navbar bg="primary" expand="lg" sticky="top">
            <Container fluid>
                <Navbar.Brand href="#home">Catalog </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto fw-bold text-uppercase">
                        <NavLink className="nav-link" to="/" exact>Home</NavLink>
                        <NavLink className="nav-link" to="/catalogo" exact>Catalogo</NavLink>
                        <NavLink className="nav-link" to="/admin" exact>Admin</NavLink>
                    </Nav>
                    {authContextData?.authenticated &&
                        <Nav>
                            <Dropdown>
                                <Dropdown.Toggle variant="light" id="dropdown-basic" className="me-2">
                                    {authContextData.tokenData?.user_name}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => handleLogout()}>Sair</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavBar;
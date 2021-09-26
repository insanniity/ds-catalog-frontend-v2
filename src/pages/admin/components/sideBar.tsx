import { NavLink } from "react-router-dom";


const SideBar = () => {
    return (
        <div className="d-flex flex-row flex-lg-column p-3 bg-white" style={{width: 280, height: "94vh"}}>
            <ul className="nav nav-pills flex-row flex-lg-column mb-auto">
                <li className="nav-item">
                    <NavLink to="/admin/produtos" className="nav-link">
                        Produtos
                    </NavLink>
                </li>
                <hr />
                <li>
                    <NavLink to="/admin/categorias" className="nav-link">
                        Categorias
                    </NavLink>
                </li>
                <hr />
                <li>
                    <NavLink to="/admin/usuarios" className="nav-link">
                        Usuarios
                    </NavLink>
                </li>
                <hr />
            </ul>
        </div>
    )
}

export default SideBar;
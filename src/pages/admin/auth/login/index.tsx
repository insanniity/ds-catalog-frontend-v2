import {Alert, Card, Col, Row} from "react-bootstrap";
import {Link, Redirect, useHistory, useLocation} from "react-router-dom";
import {useForm} from "react-hook-form";
import {requestLogin} from "utils/requests";
import {useContext, useState} from "react";
import {AuthContext} from "utils/AuthContext";
import {saveAuthData} from "utils/storage";
import {getTokenData, isAuthenticated} from "utils/auth";

type FormState = {
    username: string;
    password: string;
}

type LocationState = {
    from:string;
}

const Login = () => {
    const location = useLocation<LocationState>();
    const {from} = location.state || {from: {pathname: '/admin'}};
    const {setAuthContextData} = useContext(AuthContext);
    const {register, handleSubmit, formState: { errors }} = useForm<FormState>();
    const [hasError, setHasError] = useState(false);
    const history = useHistory();

    const onSubmit = (data: FormState) => {
        requestLogin(data)
            .then((res) => {
                saveAuthData(res.data);
                setHasError(false);
                setAuthContextData({
                    authenticated: true,
                    tokenData: getTokenData()
                })
                history.replace(from);
            })
            .catch((err) => {
                setHasError(true);
            })
    };

    return isAuthenticated() ? <Redirect from="/admin/auth/login" to="/admin/produtos" exact/> : (
        <Card className="m-3 m-lg-0 px-0 p-lg-5 shadow-lg h-100">
            <Row>
                <h1 className="pt-5 text-center">Login</h1>
            </Row>
            <Row className="my-3 mx-0 mx-lg-5">
                {hasError &&
                    <div className="px-5">
                        <Alert variant={'danger'}>
                            Login ou senha inválidos!
                        </Alert>
                    </div>}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Col lg={12} className="mb-3 px-5">
                        <input
                            type="email"
                            placeholder="Usuario"
                            className={`form-control w-100 bg-white fs-4 rounded-pill px-4 ${errors.username ? 'is-invalid' : ''}`}
                            {...register("username", {required: true})}
                        />
                        {errors.username?.type === 'required' &&
                            <div className="invalid-feedback d-block px-4">Campo obrigatorio</div>
                        }
                    </Col>
                    <Col lg={12} className="px-5">
                        <input
                            type="password"
                            placeholder="Senha"
                            className={`form-control w-100 bg-white fs-4 rounded-pill px-4 ${errors.password ? 'is-invalid' : ''}`}
                            {...register("password", {required: true})} />
                        {errors.password?.type === 'required' &&
                            <div className="invalid-feedback d-bloc px-4">Campo obrigatorio</div>
                        }
                    </Col>
                    <Col lg={12} className="mb-5 p-5 mt-3 text-center">
                        <input type="submit" className="btn btn-primary w-100 text-white btn-lg rounded-pill"/>
                    </Col>
                </form>
            </Row>
            <p className="fw-bold text-black-50 text-center">Não tem cadastro? <Link to="/cadastrar">CADASTRAR</Link>
            </p>
        </Card>
    )
}

export default Login;
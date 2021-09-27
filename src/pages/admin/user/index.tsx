import {useEffect, useState} from "react";
import {SpringPage} from "types/spring";
import {AxiosRequestConfig} from "axios";
import {User} from "types/user";
import {makeRequest} from "utils/requests";
import {Container} from "react-bootstrap";

const Users = () => {
    const [page, setPage] = useState<SpringPage<User>>();

    useEffect(() => {
        const params : AxiosRequestConfig = {
            url: '/users',
            withCredentials: true,
            params: {
                page: 0,
                size: 12,
            },
        };
        makeRequest(params)
            .then((response) => {
                setPage(response.data);
            });

    }, []);

    return (
        <Container fluid>
            {page?.content.map((item) => (
                <p key={item.id}>{item.email}</p>
            ))}
        </Container>
    );

}

export default Users;
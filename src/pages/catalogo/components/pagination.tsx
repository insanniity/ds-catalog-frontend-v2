import {Pagination} from "react-bootstrap";
import {useState} from "react";

type Props = {
    qtd: number;
}

const Mypagination = ({qtd}: Props) => {
    const [active, setActive] = useState(1)
    let items = [];
    for (let number = 1; number <= qtd; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    const handlePrev = () => {
        if(active > 1) setActive(active - 1);
    }

    const handleNext = () => {
        if(active < qtd) setActive(active + 1);
    }

    return (
        <div>
            <Pagination className="justify-content-center">
                <Pagination.Prev onClick={handlePrev}  />
                {items}
                <Pagination.Next onClick={handleNext}/>
            </Pagination>
        </div>
    )
}

export default Mypagination;
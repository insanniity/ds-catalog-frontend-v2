import {formatPrice} from "utils/formatters";

type Props = {
    price: string;
}

const ProductPrice = ({price}:Props) => {
    return(
        <>
            <span className="text-gray fs-6">R$</span>
            <span className="text-primary fw-bold fs-3 align-middle"> {formatPrice(price)}</span>
        </>
    )
}

export default ProductPrice;
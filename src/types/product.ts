import {Category} from "types/category";

export type Product = {
    id: number,
    name: string,
    description: string,
    price:string,
    imgUrl:string,
    categories: Category[],
}
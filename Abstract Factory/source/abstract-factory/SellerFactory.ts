import {ITelevision} from "../abstract-products/tv";
import {ILaptop} from "../abstract-products/laptop";

export interface ISellerFactory {
    sellTV(): ITelevision;
    sellLaptop(): ILaptop;
}
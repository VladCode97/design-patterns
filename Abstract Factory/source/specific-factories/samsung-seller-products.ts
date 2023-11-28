import {ISellerFactory} from "../abstract-factory/SellerFactory";
import {ILaptop} from "../abstract-products/laptop";
import {ITelevision} from "../abstract-products/tv";
import {SamsungGalaxyBook3} from "../specific-products/samsung-galaxy-book3";
import {SamsungOLED4K} from "../specific-products/samsung-o-l-e-d4-k";

export class SamsungSellerProducts implements ISellerFactory {
    sellLaptop(): ILaptop {
        return new SamsungGalaxyBook3();
    }

    sellTV(): ITelevision {
        return new SamsungOLED4K();
    }

}
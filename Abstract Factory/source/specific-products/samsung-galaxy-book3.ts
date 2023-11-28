import {ILaptop} from "../abstract-products/laptop";

export class SamsungGalaxyBook3 implements ILaptop {
    offLaptop(): string {
        return "You turned off on the  samsung laptop";
    }

    onLaptop(): string {
        return "You turned on the samsung laptop";
    }
}
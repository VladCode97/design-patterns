import {ITelevision} from "../abstract-products/tv";

export class SamsungOLED4K implements ITelevision {
    offTV(): string {
        return "You turned off on the  samsung television";
    }

    onTV(): string {
        return "You turned on the samsung television";
    }

}
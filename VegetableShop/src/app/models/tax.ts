import {AbsModel} from "./absmodel";
import {JsonModel} from "./jsonmodel";
import {JsonFile} from "../../assets/resources/jsonfile";

export class Tax extends AbsModel<Tax> {
    grams:number;
    tax:number;
    constructor(grams?: number, tax?: number) {
        super();
        this.grams = grams;
        this.tax = tax;
    }

     getInstance(item: Tax): Tax {
        return new Tax(
            this.parseStringToInt(item.grams),
            this.parseStringToInt(item.tax)
        );
    }

    isRightId(item: Tax, id: string): boolean {
        return item.grams.toString() == id.toString();
    }
    getJsonStorage(): JsonModel {
        return new JsonModel("taxs", JsonFile.TAXS);
    }

    toString(): string {
        return this.tax.toString();
    }
}

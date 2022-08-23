import {AbsModel} from "./absmodel";

export class OrderItem extends AbsModel<OrderItem> {
    idOr: number;
    idPr: number;
    note: string;

    constructor(idOr?: number, idPr?: number, note?: string) {
        super();
        this.idOr = idOr;
        this.idPr = idPr;
        this.note = note;
    }

    getInstance(item: OrderItem): OrderItem {
        return new OrderItem(
            super.parseStringToInt(item.idOr),
            super.parseStringToInt(item.idPr),
            item.note
        );
    }
}

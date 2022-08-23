import {AbsModel} from "./absmodel";

export class Order extends AbsModel<Order> {
    id: number;
    idAccount: number;
    date: Date;
    totalPrice: number;
    description: string;
    active: boolean;

    constructor(id?: number, idAccount?: number, date?: Date, totalPrice?: number, description?: string, active?: boolean) {
        super();
        this.id = id;
        this.idAccount = idAccount;
        this.date = date;
        this.totalPrice = totalPrice;
        this.description = description;
        this.active = active;
    }

    getInstance(item: Order): Order {
        return new Order(
            super.parseStringToInt(item.id),
            super.parseStringToInt(item.idAccount),
            new Date(item.date),
            super.parseStringToInt(item.totalPrice),
            item.description,
            item.active
        );
    }
}

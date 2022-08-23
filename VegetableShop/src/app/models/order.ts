import {AbsModel} from "./absmodel";

export class Order extends AbsModel<Order> {
    id: number;
    idAccount: number;
    date: Date;
    totalPrice: number;
    description: string;
    active: boolean;
}

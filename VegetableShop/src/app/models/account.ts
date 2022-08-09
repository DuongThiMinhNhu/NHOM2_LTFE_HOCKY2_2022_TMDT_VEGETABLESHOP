import {AbsModel} from "./absmodel";
import {JsonModel} from "./jsonmodel";
import {JsonFile} from "../../assets/resources/jsonfile";

export class Account extends AbsModel<Account>{
    id: number;
    name:string;
    username: string;
    password: string;
    roleId:number;
    avt:string;
    date:Date;
    phoneNumber:string;
    gmail:string;
    address:string;
    gender:string;
    active:boolean;

    constructor(id?: number, name?: string, username?: string, password?: string, roleId?: number, avt?: string, date?: Date, phoneNumber?: string, gmail?: string, address?: string, gender?: string, active?: boolean) {
        super();
        this.id = id;
        this.name = name;
        this.username = username;
        this.password = password;
        this.roleId = roleId;
        this.avt = avt;
        this.date = date;
        this.phoneNumber = phoneNumber;
        this.gmail = gmail;
        this.address = address;
        this.gender = gender;
        this.active = active;
    }

    getInstance(item: Account): Account {
        return super.getInstance(item);
    }

    getJsonStorage(): JsonModel {
        return new JsonModel ("accounts",JsonFile.ACCOUNTS);
    }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeartService {
  heartList: Map<number,number[]>;
  private static instance:HeartService;
  constructor() { this.heartList = new Map<number, number[]>();}
  static getInstance():HeartService{
    if(HeartService.instance==null) HeartService.instance = new HeartService();
    return HeartService.instance;
  }
  like(idAccount:number,idProduct:number){
    this.heartList.get(idAccount).push(idProduct);
  }
  unlike(idAccount:number,idProduct:number){
    this.heartList.set(idAccount,this.removeItem(this.heartList.get(idAccount), idProduct));
  }
  removeItem<T>(arr: Array<T>, value: T): Array<T> {
    const index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
}

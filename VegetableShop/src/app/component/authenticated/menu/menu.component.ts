import {Component, Inject, Injectable, Input, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../../../models/product";
import {ProductService} from "../../../services/product/product.service";
import {HttpClient} from "@angular/common/http";
import {CategoryService} from "../../../services/category/category.service";
import {Category} from "../../../models/category";
import {map, take} from "rxjs/operators";
import {IPagingation} from "../../interface/ipagingation";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
@Injectable({
  providedIn:"root"
})
export class MenuComponent implements OnInit,IPagingation {
  productServices: ProductService;
  categoryServices:CategoryService;
  productList: Observable<Product[]>;
  categories:Observable<Category[]>;
  current: number = 1;
  total: Observable<number>;
  limit: number = 16;
  @Input() tab;
  @Input() selected = "all";
  mapCategories: Map<string, Observable<Product[]>>;
  imageBg: any;
  namePage: any;
  constructor(private httpClient:HttpClient) {
    //initial
    this.productServices = ProductService.getInstance(httpClient);
    this.categoryServices = CategoryService.getInstance(httpClient);
    this.mapCategories = new Map<string, Observable<Product[]>>();
    //number of product
    this.loadProductsCount().then(re=>{
      this.total = re;
    });

    this.loadCategories().then(re=>{
      this.categories = re.pipe(
          map(value => {
            value.map(cate => {
              this.loadProductsByCategoryPaging(cate.id,this.current,this.limit).then(
                  r =>  this.mapCategories.set(cate.id,this.productList)
              )} )
            return value;
          })
      );
    });
      //get all product by category
    this.loadProductsPaging(this.current, this.limit).then(r => {
      this.mapCategories.set("all",this.productList);
    })

  }
  public async  loadCategories(){
    return await this.categoryServices.doGet();
  }
  public async loadProductsCount() {
    return this.productServices.count();
  }
  public async loadProductsPaging(page:number,limit:number) {
  this.productList = await this.productServices.doGetPaging(page,limit);
}
  public async loadProductsByCategoryPaging(categoryId:string,page:number,limit:number) {
    this.productList = await this.productServices.doGetCategoryPaging(categoryId,page,limit);
  }

  ngOnInit(): void {

  }

  onGoTo(page: number): void {
    this.current = page;
    this.loadProductsByCategoryPaging(this.selected,this.current,this.limit).then(r=>{
          this.mapCategories.set(this.selected,this.productList);
    })
  }

  onNext(page: number): void {
    this.current = page+1;
    this.loadProductsByCategoryPaging(this.selected,this.current,this.limit).then(r=>{
      this.mapCategories.set(this.selected,this.productList);
    })
  }

  onPrevious(page: number): void {
    this.current = page -1
    this.loadProductsByCategoryPaging(this.selected,this.current,this.limit).then(r=>{
      this.mapCategories.set(this.selected,this.productList);
    })
  }

  selectCategory(categoryId: string) {
    this.selected = categoryId;
    this.current = 1;
  }

  isActive(s: string):boolean {
    if(this.selected==s) return true;
    return false;
  }

  setActive(all: string) {
    if(this.isActive(all)){
      return true;
    }else return false;
  }
}

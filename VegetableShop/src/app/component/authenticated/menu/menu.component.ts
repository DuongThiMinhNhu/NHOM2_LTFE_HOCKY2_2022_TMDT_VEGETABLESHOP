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
  imageBg = "assets/images/bg_1.jpg";
  namePage = "PRODUCTS";
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
            value.map(async cate => {
              await this.loadProductsByCategoryPaging(cate.id, this.current, this.limit).then(r=>{
                this.mapCategories.set(cate.id, r)
              })
            } )
            return value;
          })
      );
    });
      //get all product by category
    this.loadProductsPaging(this.current, this.limit).then(r => {
      this.mapCategories.set("all",r);
    })

  }
  public async  loadCategories(){
    return await this.categoryServices.doGet();
  }
  public async loadProductsCount() {
    return this.productServices.count();
  }
  public loadProductsPaging(page:number,limit:number) {
   return this.productServices.doGetPaging(page,limit);
}
  public loadProductsByCategoryPaging(categoryId:string,page:number,limit:number) {
   return this.productServices.doGetCategoryPaging(categoryId,page,limit);
  }

  ngOnInit(): void {
  }

  onGoTo(page: number): void {
    this.current = page;
    this.loadProductsByCategoryPaging(this.selected,this.current,this.limit).then(r=>{
          this.mapCategories.set(this.selected,r);
    })
  }

  onNext(page: number): void {
    this.current = page+1;
    this.loadProductsByCategoryPaging(this.selected,this.current,this.limit).then(r=>{
      this.mapCategories.set(this.selected,r);
    })
  }

  onPrevious(page: number): void {
    this.current = page -1
    this.loadProductsByCategoryPaging(this.selected,this.current,this.limit).then(r=>{
      this.mapCategories.set(this.selected,r);
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

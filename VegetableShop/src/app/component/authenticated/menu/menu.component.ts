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
  products: Observable<Product[]>;
  productServices: ProductService;
  categoryServices:CategoryService;
  productList: Observable<Product[]>;
  categories:Observable<Category[]>;
  current: number = 1;
  total: Observable<number>;
  limit: number = 16;
  @Input() tab
  @Input() selected = "all"
  constructor(private httpClient:HttpClient) {
    this.productServices = ProductService.getInstance(httpClient);
    this.categoryServices = CategoryService.getInstance(httpClient);
    this.total = this.productServices.count();
     // this.products = this.productServices.doGet();
      this.categories = this.categoryServices.doGet();
    this.loadProductsPaging(this.current, this.limit).then(r => {
      this.products = this.productList;
    })
      // this.productServices.doGet().subscribe(value => console.log(value))
      // this.productServices.doGetByCategory("4").subscribe(value => console.log(value))
    // this.productServices.doGet().pipe(map(value => {
    //   return value.slice(0,5)
    // })).subscribe(value => console.log(value))
    //   this.categories.subscribe(value => console.log(value));
    //   //test get id
    //   this.productServices.doGetById("117731870").subscribe(value => console.log(value));
    // this.loadListProducts().then(r => {
    //     this.productList.subscribe(value => console.log(value));
    //     }
    // );
    // this.productServices.doGetByName("t").subscribe(value => console.log(value));
    // ('#pagination-demo').twbsPagination({
    //   totalPages: 35,
    //   visiblePages: 7,
    //   onPageClick: function (event, page) {
    //     ('#page-content').text('Page ' + page);
    //   }
    // });

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
          this.products = this.productList;
    })
  }

  onNext(page: number): void {
    this.current = page+1;
    this.loadProductsByCategoryPaging(this.selected,this.current,this.limit).then(r=>{
      this.products = this.productList;
    })
  }

  onPrevious(page: number): void {
    this.current = page -1
    this.loadProductsByCategoryPaging(this.selected,this.current,this.limit).then(r=>{
      this.products = this.productList;
    })
  }


  selectCategory(categoryId: string) {
    this.selected = categoryId;
    this.loadProductsByCategoryPaging(this.selected,1,this.limit).then(r=>{
      this.products = this.productList;
    })
  }


  isActive(s: string):boolean {
    if(this.selected==s) return true;
    return false;
  }
}

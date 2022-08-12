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
<<<<<<< Updated upstream
  products: Observable<Product[]>;
=======
<<<<<<< Updated upstream
=======
  products: Observable<Product[]>;
>>>>>>> Stashed changes
>>>>>>> Stashed changes
  productServices: ProductService;
  categoryServices:CategoryService;
  productList: Observable<Product[]>;
  categories:Observable<Category[]>;
  current: number = 1;
  total: Observable<number>;
  limit: number = 16;
<<<<<<< Updated upstream
  @Input() tab
  @Input() selected = "all"
=======
<<<<<<< Updated upstream
  @Input() tab;
  @Input() selected = "all";
  mapCategories: Map<string, Observable<Product[]>>;
  imageBg: any;
  namePage: any;
=======
  @Input() tab
  @Input() selected = "all"
>>>>>>> Stashed changes
>>>>>>> Stashed changes
  constructor(private httpClient:HttpClient) {
    this.productServices = ProductService.getInstance(httpClient);
    this.categoryServices = CategoryService.getInstance(httpClient);
<<<<<<< Updated upstream
    this.total = this.productServices.count();
     // this.products = this.productServices.doGet();
      this.categories = this.categoryServices.doGet();
=======
<<<<<<< Updated upstream
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
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream

=======
  public async  loadCategories(){
    return await this.categoryServices.doGet();
  }
  public async loadProductsCount() {
    return this.productServices.count();
  }
=======
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

>>>>>>> Stashed changes
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
          this.products = this.productList;
=======
<<<<<<< Updated upstream
          this.mapCategories.set(this.selected,this.productList);
=======
          this.products = this.productList;
>>>>>>> Stashed changes
>>>>>>> Stashed changes
    })
  }

  onNext(page: number): void {
    this.current = page+1;
    this.loadProductsByCategoryPaging(this.selected,this.current,this.limit).then(r=>{
<<<<<<< Updated upstream
      this.products = this.productList;
=======
<<<<<<< Updated upstream
      this.mapCategories.set(this.selected,this.productList);
=======
      this.products = this.productList;
>>>>>>> Stashed changes
>>>>>>> Stashed changes
    })
  }

  onPrevious(page: number): void {
    this.current = page -1
    this.loadProductsByCategoryPaging(this.selected,this.current,this.limit).then(r=>{
<<<<<<< Updated upstream
      this.products = this.productList;
=======
<<<<<<< Updated upstream
      this.mapCategories.set(this.selected,this.productList);
>>>>>>> Stashed changes
    })
  }


  selectCategory(categoryId: string) {
    this.selected = categoryId;
    this.loadProductsByCategoryPaging(this.selected,1,this.limit).then(r=>{
      this.products = this.productList;
    })
  }

<<<<<<< Updated upstream

=======
=======
      this.products = this.productList;
    })
  }


  selectCategory(categoryId: string) {
    this.selected = categoryId;
    this.loadProductsByCategoryPaging(this.selected,1,this.limit).then(r=>{
      this.products = this.productList;
    })
  }


>>>>>>> Stashed changes
>>>>>>> Stashed changes
  isActive(s: string):boolean {
    if(this.selected==s) return true;
    return false;
  }
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream

  setActive(all: string) {
    if(this.isActive(all)){
      return true;
    }else return false;
  }
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
}

import {Injectable} from '@angular/core';
import {IServices} from "../iservices";
import {Product} from "../../models/product";
import {lastValueFrom, Observable} from "rxjs";
import {HandleJsonService} from "../handlejson/handlejson.service";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService implements IServices<Product>{
  private static products: Observable<Product[]>;
  handleJson:HandleJsonService<Product>;
  private static instance:ProductService;
  constructor(private httpClient: HttpClient) {
    this.handleJson = new HandleJsonService(httpClient,new Product());
  }

  public static getInstance(httpClient: HttpClient):ProductService{
    if(this.instance==null) this.instance = new ProductService(httpClient);
    return this.instance;
  }

  public async doGet():Promise<Observable<Product[]>>{
    if(ProductService.products==null) ProductService.products = await this.handleJson.doGet();
    else return ProductService.products;
  }

   count(): Promise<Observable<number>> {
    return this.handleJson.count();
  }

   doGetById(id: string): Promise<Observable<Product>> {
    return this.handleJson.doGetById(id);
  }

  async doGetPaging(page: number, limit: number): Promise<Observable<Product[]>> {
      return await this.handleJson.doGetPaging(page, limit);
  }

   doInsert(t: Product): Promise<Observable<Product>> {
    return this.handleJson.doInsert(t);
  }

   doGetByName(name: string):  Promise<Observable<Product[]>> {
    return this.handleJson.doGetByName(name);
  }

   async doGetByCategory(categoryId: string): Promise<Observable<Product[]>> {
     return this.loadProducts().then(re=>{
         if(re==null) return null;
         else
         return re.pipe(
             map(value => {
                 return value.filter(prod => {
                     return prod.idCollection == categoryId
                 });
             }))
     })
   }

    private async loadProducts() {
       return await this.doGet();
   }
   async doGetCategoryPaging(categoryId: string, page: number, limit: number): Promise<Observable<Product[]>> {
       let countRow = await lastValueFrom(await this.count());
       let offset = Math.ceil((countRow / limit) * (page - 1));
       if (categoryId != "all") {
         return await this.loadCategoryPaging(categoryId).then(async re => {
                   if (re == null) return await this.doGetPaging(page, limit);
                   return re.pipe(
                       map(value => {
                           return value.slice(offset, offset + limit)
                       })
                   )
               }
           )
       } else {
           return await this.doGetPaging(page, limit)
       }
   }

  private async loadCategoryPaging(categoryId: string){
      return await this.doGetByCategory(categoryId);
  }

  doDelete(id: string): Promise<void> {
    return this.handleJson.doDelete(id);
  }

  public async searchProduct(txt: string): Promise<{}[]> {
    let products: Product[] = await lastValueFrom((this.doGetByName(txt)));
    return products.slice(0, 10).map(res => {
      return {id: res.id, name: res.name};
    });
    
  doUpdate(t: Product): Promise<void> {
    return this.handleJson.doUpdate(t);
  }

}

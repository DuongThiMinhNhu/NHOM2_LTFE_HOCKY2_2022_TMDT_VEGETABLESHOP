import {Injectable} from '@angular/core';
import {Product} from "../../models/product";
import {lastValueFrom, Observable} from "rxjs";
import {HandleJsonService} from "../handlejson/handlejson.service";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {IJsonServices} from "../ijson.services";

@Injectable({
    providedIn: 'root'
})
export class ProductService implements IJsonServices<Product> {
    private static products: Observable<Product[]>;
    handleJson: HandleJsonService<Product>;
    private static instance: ProductService;

    constructor(private httpClient: HttpClient) {
        this.handleJson = new HandleJsonService(httpClient, new Product());
    }

    public static getInstance(httpClient: HttpClient): ProductService {
        if (this.instance == null) this.instance = new ProductService(httpClient);
        return this.instance;
    }

    public async doGet(): Promise<Observable<Product[]>> {
        if (ProductService.products == null) ProductService.products = await this.handleJson.doGet();
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

    doGetByName(name: string): Promise<Observable<Product[]>> {
        return this.handleJson.doGetByName(name);
    }

    async doGetByCategory(categoryId: string): Promise<Observable<Product[]>> {
        if (categoryId == 'all') return this.doGet();
        return this.loadProducts().then(re => {
            if (re == null) return null;
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

    private async loadCategoryPaging(categoryId: string) {
        return await this.doGetByCategory(categoryId);
    }

    public async searchProduct(txt: string): Promise<{}[]> {
        let products: Product[] = await lastValueFrom((await this.doGetByName(txt)));
        return products.slice(0, 10).map(res => {
            return {id: res.id, name: res.name};
        });
    }

    public async familiarProduct(categoryId: string): Promise<Observable<Product[]>> {
        return this.doGetByCategory(categoryId).then(
            re => {
                if (re === null) return null;
                return re.pipe(
                    map(value => {
                        return value.slice(0, 8);
                    })
                )
            }
        )
    }

    public sortBy(name: string, type: string) {

    }


}

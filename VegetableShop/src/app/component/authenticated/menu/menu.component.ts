import {Component, Inject, Injectable, Input, OnInit, ViewChild} from '@angular/core';
import {lastValueFrom, Observable} from "rxjs";
import {Product} from "../../../models/product";
import {ProductService} from "../../../services/product/product.service";
import {HttpClient} from "@angular/common/http";
import {CategoryService} from "../../../services/category/category.service";
import {Category} from "../../../models/category";
import {filter, map, take} from "rxjs/operators";
import {IPagingation} from "../../interface/ipagingation";
import {ActivatedRoute, Router} from "@angular/router";
import {MdbModalRef, MdbModalService} from 'mdb-angular-ui-kit/modal';
import {ModalComponent} from "./modal/modal.component";
import {BannerStorage} from "../../../../assets/resources/bannerstorage";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
@Injectable({
    providedIn: "root"
})
export class MenuComponent implements OnInit, IPagingation {
    productServices: ProductService;
    modalRef: MdbModalRef<ModalComponent> | null = null;
    categoryServices: CategoryService;
    productList: Observable<Product[]>;
    categories: Observable<Category[]>;
    current: number = 1;
    total: Observable<number>;
    limit: number = 16;
    @Input() selected = "all";
    mapCategories: Map<string, Observable<Product[]>>;
    imageBg = BannerStorage.MENU.image;
    namePage = BannerStorage.MENU.name;
    selectedItemGrid: string;
    selectedMethodSort: string;

    constructor(private router: ActivatedRoute, private httpClient: HttpClient, private modalService: MdbModalService) {
        //initial
        this.productServices = ProductService.getInstance(httpClient);
        this.categoryServices = CategoryService.getInstance(httpClient);
        this.mapCategories = new Map<string, Observable<Product[]>>();
        //number of product
        this.loadProductsCount().then(re => {
            this.total = re;
        });

        this.loadCategories().then(re => {
            this.categories = re.pipe(
                map(value => {
                    value.map(async cate => {
                        await this.loadProductsByCategoryPaging(cate.id, this.current, this.limit).then(r => {
                            this.productList = r;
                            this.mapCategories.set(cate.id, r)
                        })
                    })
                    return value;
                })
            );
        });
        //get all product by category
        this.loadProductsPaging(this.current, this.limit).then(r => {
            this.productList = r;
            this.mapCategories.set("all", r);
        })
    }

    public async loadCategories() {
        return await this.categoryServices.doGet();
    }

    public async loadProductsCount() {
        return this.productServices.count();
    }

    public loadProductsPaging(page: number, limit: number) {
        return this.productServices.doGetPaging(page, limit);
    }

    public loadProductsByCategoryPaging(categoryId: string, page: number, limit: number) {
        return this.productServices.doGetCategoryPaging(categoryId, page, limit);
    }

    public loadProductsByCategory(categoryId: string) {
        let list = this.productServices.doGetByCategory(categoryId);
        list = list.then(re => {
            return re.pipe(map(result => {
                return result.sort((a, b) => {
                    if (this.selectedMethodSort == "default") {
                        return 1;
                    } else if (this.selectedMethodSort == "date") {
                        return a.isNewerThan(b) ? 1 : -1;
                    } else if (this.selectedMethodSort == "price") {
                        return a.price > b.price ? 1 : -1;
                    } else if (this.selectedMethodSort == "price-desc") {
                        return b.price > a.price ? 1 : -1;
                    } else if (this.selectedMethodSort == "default") {
                        return a.isNewerThan(b) ? 1 : -1;
                    }
                    return -1;
                });
            }));
        });
        return list;
    }

    ngOnInit(): void {
        let value = this.router.queryParams["_value"]["category-id"];
        if (value != null) {
            this.selected = value;
        }
    }

    async onGoTo(page: number): Promise<void> {
        this.current = page;
        let countRow = await lastValueFrom(await this.loadProductsCount());
        let offset = Math.ceil((countRow / this.limit) * (this.current - 1));
        this.loadProductsByCategory(this.selected).then(re => {
            this.mapCategories.set(this.selected, re.pipe(map(
                res => {
                    return res.slice(offset, offset + this.limit)
                }
            )))
        });
    }

    onNext(page: number): void {
        this.current = page + 1;
        this.onGoTo(this.current);
    }

    onPrevious(page: number): void {
        this.current = page - 1
        this.onGoTo(this.current);
    }

    selectCategory(categoryId: string) {
        this.selected = categoryId;
        this.current = 1;
    }

    isActive(s: string): boolean {
        if (this.selected == s) return true;
        return false;
    }

    setActive(all: string) {
        if (this.isActive(all)) {
            return true;
        } else return false;
    }

    openModal() {
        this.modalRef = this.modalService.open(ModalComponent, {
            modalClass: 'modal-xl'
        })
    }

    selectGrid(value: string) {
        this.selectedItemGrid = value;
        this.limit = parseInt(value, 10);
        this.onGoTo(1);
    }

    selectMethodSort(value: string) {
        this.selectedMethodSort = value;
        this.onGoTo(this.current)
    }

    async getSearchText($event) {
        let countRow = await lastValueFrom(await this.loadProductsCount());
        let offset = Math.ceil((countRow / this.limit) * (this.current - 1));
        this.loadProductsByCategory(this.selected).then(res => {
            this.mapCategories.set(this.selected, res.pipe(map((re) => {
                return re.filter(item => item.name.toLowerCase().includes($event.target.value.toLowerCase()))
            })).pipe(map(
                res => {
                    return res.slice(offset, offset + this.limit)
                }
            )));
        });
    }
}

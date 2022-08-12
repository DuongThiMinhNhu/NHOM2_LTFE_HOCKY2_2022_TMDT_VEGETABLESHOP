import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from "../../../../services/category/category.service";
import {Observable} from "rxjs";
import {Category} from "../../../../models/category";
import {HttpClient} from "@angular/common/http";
interface introduceCategory {
  id:string;
  imageSrc: string;
  name: string;
}
@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.scss']
})
export class IntroduceComponent implements OnInit {
  categoryService:CategoryService;
  categorys: Observable<Category []> ;
  constructor(private httpClient:HttpClient) {
    this.categoryService = CategoryService.getInstance(httpClient);
    this.loadCategories().then(re=>{
      this.categorys = re;
    });

  }

  public async loadCategories(){
    return await this.categoryService.doGet();
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  listaCategorias:any ;

  constructor(
    private categoryService:CategoriesService) {
      this.categoryService.ListCategories().then(
        (succes:any)=>{ this.listaCategorias = succes.data;},
        (error)=>{}
    )
  }

  ngOnInit() {
  }

}

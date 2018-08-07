import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CategoriesService {

  constructor(
    private http:HttpClient

  ) { }

  ListCategories(){
    return this.http.get('https://cevicheria-backend.herokuapp.com/categories').toPromise();
  }
}

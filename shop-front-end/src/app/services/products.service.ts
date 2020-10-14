import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {}
  products: any =[];
  category_products: any = [];

  getAllProducts() {
    this.http.get(`http://127.0.0.1:8000/api/home`).subscribe( (res: any )=> this.products  = res.dress);
  }

  getDetailProduct(id: string) {
    return this.http.get(`http://127.0.0.1:8000/api/home/dress/${id}`);
  }
}
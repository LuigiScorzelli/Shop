import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // @Output() search : EventEmitter<any> = new EventEmitter<any>();
  query : string = '';
  constructor( private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getAllProducts();
  }

  searchProduct(query: string) : void {
    console.log('input', query);
    // this.query = query;
    // this.search.emit(this.query);
    // this.a = this.productsService.products.filter( (product: any) =>  product.title.includes(query));
    // console.log(this.a);
  }
}

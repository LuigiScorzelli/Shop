import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() search : EventEmitter<any> = new EventEmitter<any>();
  res_filter : any = [];
 
  constructor(private productsService: ProductsService) { 
    
  }

  ngOnInit(): void {
  }

  searchProduct(query: any) {
    this.res_filter = this.productsService.products.filter( (product: any) =>  product.title.includes(query.value));
    this.search.emit(this.res_filter);
  }
}

import { Component, Input } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  results: any = [];
  // @Input() filter_prod : string;
  // filter_results: any = [];
  
  constructor(private productsService: ProductsService) { 
    this.results = this.productsService;
  }
  // filter(filter) {
  //   console.log('filter', filter);
  // }
}

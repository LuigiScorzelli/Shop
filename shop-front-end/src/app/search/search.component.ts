import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() filter_prod : any = '';
  
  constructor(private productsService: ProductsService) { 
    
  }

  ngOnInit(): void {
    // this.results = this.productsService.products;
    // console.log("search", this.results);
  }

}

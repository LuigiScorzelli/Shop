import { Component, OnInit} from '@angular/core';
import { AuthService } from './services/auth.service';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor( private productsService: ProductsService, public authService: AuthService) {}

  ngOnInit(): void {
    this.productsService.getAllProducts();
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id: string;
  detail: any;
  
  constructor(private route: ActivatedRoute, private productsService: ProductsService) { 

    this.route.params.subscribe( params => this.id = params.id);
    this.productsService.getDetailProduct(this.id).subscribe( (res: any )=> {
      this.detail = { 
        'id': res.dress_user.id, 
        'img': res.dress_user.image,
        'title': res.dress_user.title, 
        'desc': res.dress_user.description, 
        'price': res.dress_user.price, 
        'brand': res.dress_user.brand, 
        'info': res.dress_user.info, 
        'sizes': res.dress_user.sizes, 
        'dateOfCreated': res.dress_user.created_at, 
        'category': res.category_dress, 
      }
    });
  }

  ngOnInit(): void {
  }

}

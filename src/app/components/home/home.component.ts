import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product.entity';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'auction-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService:ProductService){
    this.products = this.productService.getProducts();
  }


  ngOnInit() {
  }

}

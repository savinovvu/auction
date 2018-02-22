import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../model/product.entity';

@Component({
  selector: 'auction-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  products: Array<Product> = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  ngOnInit() {
  }

}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {Review} from '../../model/review.entity';
import {Product} from '../../model/product.entity';

@Component({
  selector: 'auction-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  reviews: Review[];

  constructor(route: ActivatedRoute, productService: ProductService) {
    let prodId = route.snapshot.params['productId'];
    this.product = productService.getProductById(prodId);
    this.reviews = productService.getReviewsForProduct(this.product.id);
  }

  ngOnInit() {
  }

}

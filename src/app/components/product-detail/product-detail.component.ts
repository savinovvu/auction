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

  newComment: string;
  newRating: number;
  isReviewHidden: boolean = true;

  constructor(route: ActivatedRoute, productService: ProductService) {
    let prodId = route.snapshot.params['productId'];
    this.product = productService.getProductById(prodId);
    this.reviews = productService.getReviewsForProduct(this.product.id);
  }

  addReview(){
    let review = new Review(0, this.product.id, new Date(), 'Anonymous', this.newRating, this.newComment);
    console.log('Adding review ' + JSON.stringify(review));
    this.reviews = [...this.reviews, review];
    this.product.rating = this.averageRating(this.reviews);
    this.resetForm();
  }

  ngOnInit() {
  }

  private averageRating(reviews: Review[]) {
    let sum = reviews.reduce((average, review) => average + review.rating, 0);
    return sum / reviews.length;
  }

  private resetForm() {
    this.newRating = 0;
    this.isReviewHidden = true;
    this.isReviewHidden = true;
  }
}

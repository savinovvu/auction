import {Injectable} from '@angular/core';
import {Product} from '../model/product.entity';
import {Review} from '../model/review.entity';

@Injectable()
export class ProductService {
  getProducts(): Array<Product> {
    return products.map(product => new Product(product.id, product.title, product.price, product.rating, product.description, product.categories));
  }

  getProductById(productId: number): Product {
    return products.find(product => product.id == productId);
  }

  getReviewsForProduct(productId:number):Review[]{
    return reviews.filter(r => r.productId === productId)
      .map(r => new Review(r.id, r.productId, new Date(r.timestamp),r.user, r.rating, r.comment));
  }

  getAllCategories(){
    return ['Books', 'Electronics', 'HardWare'];
  }


}

var products = [
  {
    'id': 0,
    'title': 'First Product',
    'price': 24.99,
    'rating': 4.3,
    'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['electronics', 'hardware']
  },
  {
    'id': 1,
    'title': 'Second Product',
    'price': 64.99,
    'rating': 3.5,
    'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['books']
  },
  {
    'id': 2,
    'title': 'Third Product',
    'price': 74.99,
    'rating': 4.2,
    'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['electronics']
  },
  {
    'id': 3,
    'title': 'Fourth Product',
    'price': 84.99,
    'rating': 3.9,
    'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['hardware']
  },
  {
    'id': 4,
    'title': 'Fifth Product',
    'price': 94.99,
    'rating': 5,
    'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['electronics', 'hardware']
  },
  {
    'id': 5,
    'title': 'Sixth Product',
    'price': 54.99,
    'rating': 4.6,
    'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['books']
  }
];

var reviews = [
  {
    "id": 0,
    "productId": 0,
    "timestamp": "2014-05-20T02:17:00+00:00",
    "user": "User 1",
    "rating": 5,
    "comment": "Aenean vestibulum velit id placerat posuere. Praesent..."},
  {
    "id": 1,
    "productId": 0,
    "timestamp": "2014-05-20T02:53:00+00:00",
    "user": "User 2",
    "rating": 3,
    "comment": "Aenean vestibulum velit id placerat posuere. Praesent... "
  }];

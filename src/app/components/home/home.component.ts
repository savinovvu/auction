import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product.entity';
import {ProductService} from '../../services/product.service';
import {FormControl} from '@angular/forms';
import "rxjs/add/operator/debounceTime";

@Component({
  selector: 'auction-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  titleFilter: FormControl = new FormControl();
  filterCriteria: string;

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
    this.titleFilter.valueChanges.debounceTime(100)
      .subscribe(value => this.filterCriteria = value,
        error2 => console.error(error2));
  }


  ngOnInit() {
  }

}

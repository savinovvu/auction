import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../model/product.entity';

@Component({
  selector: 'auction-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css'],
  encapsulation:ViewEncapsulation.None

})
export class ApplicationComponent implements OnInit {


  ngOnInit() {
  }

}

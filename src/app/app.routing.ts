import {RouterModule, Routes} from '@angular/router';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';
import {HomeComponent} from './components/home/home.component';




const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'products/:prodTitle', component: ProductDetailComponent}
];


export const routing = RouterModule.forRoot(routes);

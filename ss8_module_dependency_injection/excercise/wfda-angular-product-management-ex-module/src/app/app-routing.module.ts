import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from './product/product.component';
import {CategoryComponent} from './category/category.component';
import {ProductModule} from './product/product.module';
import {CategoryModule} from './category/category.module';


const routes: Routes = [
  {
    path: 'product', component : ProductComponent, loadChildren: () => ProductModule
  },
  {
    path: 'category', component : CategoryComponent, loadChildren: () => CategoryModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

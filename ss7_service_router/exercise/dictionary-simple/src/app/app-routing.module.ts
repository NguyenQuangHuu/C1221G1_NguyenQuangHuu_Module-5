import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryPageComponent} from './dictionary-page/dictionary-page.component';
import {DictionaryDetailComponent} from './dictionary-detail/dictionary-detail.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'dictionary'},
  {path: 'dictionary', component: DictionaryPageComponent},
  {path: 'dictionary/:word', component: DictionaryDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

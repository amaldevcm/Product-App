import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCardComponent } from './Components/ProductCard/productCard.component';

const routes: Routes = [
  { path: ' ', redirectTo: 'profile' },
  { path: 'profile', component: ProductCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

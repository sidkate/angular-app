import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalStorageGuard } from './guards/local-storage.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: 'user-profile', component: UserProfileComponent, canActivate: [LocalStorageGuard]},
  { path: 'products', component: ProductListComponent },
  { path: 'products/details/:productId', component: ProductDetailsComponent},
  //  {path: 'products/:categoryId', component: ProductsComponent},
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

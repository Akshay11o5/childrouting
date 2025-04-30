import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { UsersComponent } from './shared/components/users/users.component';
import { UserformComponent } from './shared/components/userform/userform.component';
import { SingleuserComponent } from './shared/components/singleuser/singleuser.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { ProductformComponent } from './shared/components/productform/productform.component';
import { SingleproductComponent } from './shared/components/singleproduct/singleproduct.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: 'adduser',
        component: UserformComponent,
      },

      {
        path: ':userId',
        component: SingleuserComponent,
      },

      {
        path: ':userId/edit',
        component: UserformComponent,
      },
    ],
  },

  {
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: 'addproduct',
        component: ProductformComponent,
      },

      {
        path: ':PId',
        component: SingleproductComponent,
      },
      {
        path: ':PId/edit',
        component: ProductformComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

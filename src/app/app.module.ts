import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeComponent } from './shared/components/home/home.component';
import { UsersComponent } from './shared/components/users/users.component';
import { SingleuserComponent } from './shared/components/singleuser/singleuser.component';
import { UserformComponent } from './shared/components/userform/userform.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { RemoverComponent } from './shared/components/remover/remover.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ProductsComponent } from './shared/components/products/products.component';
import { SingleproductComponent } from './shared/components/singleproduct/singleproduct.component';
import { ProductformComponent } from './shared/components/productform/productform.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    SingleuserComponent,
    UserformComponent,
    NavbarComponent,
    RemoverComponent,
    ProductsComponent,
    SingleproductComponent,
    ProductformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

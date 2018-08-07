import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { APP_ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { DishesComponent } from './components/dishes/dishes.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ReputationsComponent } from './components/reputations/reputations.component';
import { UsersComponent } from './components/users/users.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CategoriesComponent,
    DishesComponent,
    OrdersComponent,
    ReputationsComponent,
    UsersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

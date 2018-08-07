import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { DishesComponent } from './components/dishes/dishes.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ReputationsComponent } from './components/reputations/reputations.component';
import { UsersComponent } from './components/users/users.component';


const APP_ROUTES:Routes = [ 
  { path:'', component: HomeComponent },
  { path:'categories', component: CategoriesComponent },
  { path:'dishes', component: DishesComponent },
  { path:'orders', component: OrdersComponent },
  { path:'reputation', component: ReputationsComponent },
  { path:'users', component: UsersComponent },
  { path:'**', pathMatch:'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
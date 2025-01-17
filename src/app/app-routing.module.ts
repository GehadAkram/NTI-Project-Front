import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PoliciesComponent } from './policies/policies.component';
import { LoginLogicComponent } from './login/login-logic/login-logic.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CatalogeComponent } from './cataloge/cataloge.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderHisoryComponent } from './order-hisory/order-hisory.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'policies', component: PoliciesComponent},
  {path: 'login', component: LoginComponent, children: [
    {path: '', component: LoginLogicComponent},
    {path: 'forgot-password', component: ForgotPasswordComponent}
  ]},
  {path: 'signup', component: SignUpComponent},
  {path: 'wishlist', component: WishlistComponent},
  {path: 'cataloge', component: CatalogeComponent},
  {path: 'product/:id', component: ProductDetailsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'orderHistory', component: OrderHisoryComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

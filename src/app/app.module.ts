import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { AboutComponent } from './home/about/about.component';
import { BestSellersComponent } from './home/best-sellers/best-sellers.component';
import { ShopCaregoryComponent } from './home/shop-caregory/shop-caregory.component';
import { LoginComponent } from './login/login.component';
import { PoliciesComponent } from './policies/policies.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { LoginLogicComponent } from './login/login-logic/login-logic.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { CatalogeComponent } from './cataloge/cataloge.component';
import { FiltersComponent } from './cataloge/filters/filters.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderHisoryComponent } from './order-hisory/order-hisory.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    CarouselComponent,
    AboutComponent,
    BestSellersComponent,
    ShopCaregoryComponent,
    LoginComponent,
    PoliciesComponent,
    ForgotPasswordComponent,
    LoginLogicComponent,
    SignUpComponent,
    WishlistComponent,
    CartComponent,
    CatalogeComponent,
    FiltersComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    ProfileComponent,
    OrderHisoryComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

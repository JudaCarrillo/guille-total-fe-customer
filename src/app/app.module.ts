import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SigninComponent } from './modules/auth/signin/pages/signin/signin/signin.component';
import { SignupComponent } from './modules/auth/signup/pages/signup/signup.component';
import { NavbarComponent } from './core/layout/navbar/navbar.component';
import { HomeComponent } from './modules/guilletotal/home/pages/home/home.component';
import { AboutComponent } from './modules/guilletotal/about/pages/about/about.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { DropShadowComponent } from './core/layout/drop-shadow/drop-shadow.component';
import { SubscriptionComponent } from './modules/Payment/subscription/subscription.component';
import { PaymentGatewayComponent } from './modules/Payment/payment-gateway/payment-gateway.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    DropShadowComponent,
    SubscriptionComponent,
    PaymentGatewayComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SigninComponent,
    SignupComponent,
],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

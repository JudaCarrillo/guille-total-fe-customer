import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PredictionsComponent } from './modules/guilletotal/predictions/pages/predictions/predictions.component';
import { PercentageBarComponent } from './modules/guilletotal/predictions/components/percentage-bar/percentage-bar.component';
import { PastGameBarComponent } from './modules/guilletotal/predictions/components/past-game-bar/past-game-bar.component';
import { DetailPredictionComponent } from './modules/guilletotal/predictions/pages/detail-prediction/detail-prediction.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AnalysisComponent } from './modules/guilletotal/predictions/components/analysis/analysis.component';
import { UpcomingMatchesngComponent } from './modules/guilletotal/predictions/components/upcoming-matchesng/upcoming-matchesng.component';

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
    PredictionsComponent,
    PercentageBarComponent,
    PastGameBarComponent,
    DetailPredictionComponent,
    AnalysisComponent,
    UpcomingMatchesngComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    SigninComponent,
    SignupComponent,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      closeButton: true,
    }),
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}

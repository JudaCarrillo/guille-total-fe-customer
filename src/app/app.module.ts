import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SigninComponent } from './modules/auth/signin/pages/signin/signin/signin.component';
import { SignOnComponent } from './modules/auth/sign-on/sign-on.component';
import { SignUpComponent } from './modules/auth/sign-on/pages/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    SignOnComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

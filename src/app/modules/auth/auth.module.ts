import { NgModule } from "@angular/core";
import { SignupComponent } from "./signup/pages/signup/signup.component";
import { SigninComponent } from "./signin/pages/signin/signin.component";
import { CommonModule } from "@angular/common";
import { Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: 'signin',
  }
]

@NgModule({
  declarations: [
    // SigninComponent,
    // SignupComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  // exports: [SigninComponent, SignupComponent]
})
export class AuthModule { }


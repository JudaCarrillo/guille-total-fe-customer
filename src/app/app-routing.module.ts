import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './modules/auth/signin/pages/signin/signin/signin.component';
import { SignupComponent } from './modules/auth/signup/pages/signup/signup.component';
import { HomeComponent } from './modules/guilletotal/home/pages/home/home.component';
import { AboutComponent } from './modules/guilletotal/about/pages/about/about.component';
const routes: Routes = [
  { path: '', component: SigninComponent
   },
  { path: 'signup', component: SignupComponent
   },{
    path: 'home', component: HomeComponent
   },{
    path: 'about', component: AboutComponent
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

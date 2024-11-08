import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/guilletotal/home/pages/home/home.component';
import { AboutComponent } from './modules/guilletotal/about/pages/about/about.component';
import { PredictionsComponent } from './modules/guilletotal/predictions/pages/predictions/predictions.component';
import { DetailPredictionComponent } from './modules/guilletotal/predictions/pages/detail-prediction/detail-prediction.component';
import { PredictionPastComponent } from './modules/guilletotal/predictions/pages/prediction-past/prediction-past.component';
const routes: Routes = [
  { path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'predictions',
    component: PredictionsComponent,
  },
  {
    path: 'game/:id',
    component: DetailPredictionComponent,
  },
  {
    path: 'prediction-past/:id',
    component: PredictionPastComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

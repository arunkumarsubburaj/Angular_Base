import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BillingComponent } from './billing/billing.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  }, {
    path: "billing",
    component: BillingComponent
  }, {
    path: "**",
    component: HomeComponent
  }
];

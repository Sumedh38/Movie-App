import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { PlansComponent } from './plans/plans.component';
import { UpipayComponent } from './upipay/upipay.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: {
      title: 'Login',
    },
  },
  {
    path: 'plans',
    component: PlansComponent,
    data: {
      title: 'Plans',
    },
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      title: 'Dashboard',
    },
  },
  {
    path: 'payment',
    component: PaymentComponent,
    data: {
      title: 'Payment',
    },
  },
  {
    path: 'Upipay',
    component: UpipayComponent,
    data: {
      title: 'UPI Payment',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

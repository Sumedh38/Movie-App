import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PlansComponent } from './plans/plans.component';


const routes: Routes = [
  {
    path:"",
    component:LoginComponent,
    data:{
      title: "Login"
    }
  },
  {
    path:"plans",
    component:PlansComponent,
    data:{
      title:"Plans"
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

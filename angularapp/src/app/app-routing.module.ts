import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  { path:'', redirectTo: 'login', pathMatch:'full'},
  { path:'login', component: LoginComponent},
  { path:'home', component: HomeComponent}, //localhost://4200
  { path:'aboutus', component: AboutusComponent}, //localhost://4200 /aboutus
  { path:'product', component: ProductComponent}, //localhost://4200/product
  { path:'contactus', component: ContactusComponent},
  { path:'education', component: EducationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

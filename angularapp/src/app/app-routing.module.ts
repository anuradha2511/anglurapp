import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { ProductComponent } from './product/product.component';
import { TabletComponent } from './product/tablet/tablet.component';
import { TvComponent } from './product/tv/tv.component';
import { WashingmachineComponent } from './product/washingmachine/washingmachine.component';


const routes: Routes = [
  { path:'', redirectTo: 'login', pathMatch:'full'},
  { path:'login', component: LoginComponent},
  { path:'home', component: HomeComponent}, //localhost://4200
  { path:'aboutus', component: AboutusComponent}, //localhost://4200 /aboutus
  { path:'product', component: ProductComponent, children: [ // localhost:4200/product/laptop/tv
    // { path: '', component: ProductComponent},
    { path: 'laptop', component: LaptopComponent},
    { path: 'tablet', component: TabletComponent},
    { path: 'tv', component: TvComponent},
    { path: 'washingmachine', component: WashingmachineComponent}
  ]}, 
  { path:'contactus', component: ContactusComponent},
  { path:'education', component: EducationComponent},
  { path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

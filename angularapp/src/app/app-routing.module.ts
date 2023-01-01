import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AuthGuard } from './auth.guard';
import { ContactusComponent } from './contactus/contactus.component';
import { DemopostComponent } from './demopost/demopost.component';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { ProductComponent } from './product/product.component';
import { TabletComponent } from './product/tablet/tablet.component';
import { TvComponent } from './product/tv/tv.component';
import { WashingmachineComponent } from './product/washingmachine/washingmachine.component';
import { UnsavedchangesGuard } from './unsavedchanges.guard';


const routes: Routes = [
  { path:'', redirectTo: 'login', pathMatch:'full'},
  { path:'login', component: LoginComponent},
  { path:'home', component: HomeComponent}, //localhost://4200
  { path:'aboutus', component: AboutusComponent}, //localhost://4200 /aboutus
  
  { path:'contactus', component: ContactusComponent},
  { path:'education', component: EducationComponent},
  { path:'demopost', component:DemopostComponent},
  { path:'postdetails/:id', component: PostdetailsComponent},
  { path: 'adduser', component: AdduserComponent, canDeactivate: [UnsavedchangesGuard]},
  // lazy loading called on demand 
  //./product-foldername ,products.module ,#ProductsModule-class name
  { path: 'product', canActivate: [AuthGuard], loadChildren: './product/products.module#ProductsModule'},
  { path: 'orders', loadChildren: './orders/orders.module#OrdersModule'},
  { path:'**', component:PagenotfoundComponent} //wildcard page not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){
    console.log('Routing module called');
    
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './WarningAlert/WarningAlert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemodirectivesComponent } from './demodirectives/demodirectives.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { StructuraldirectivesComponent } from './structuraldirectives/structuraldirectives.component';
import { NgswitchassignComponent } from './ngswitchassign/ngswitchassign.component';
import { AttriComponent } from './attri/attri.component';
import { DemoComponent } from './demo/demo.component';
import { HooksComponent } from './hooks/hooks.component';
import { HooksAssignComponent } from './hooks-assign/hooks-assign.component';
import { DirassignComponent } from './dirassign/dirassign.component';
import { AddRemoveComponent } from './add-remove/add-remove.component';
import { PracticeComponent } from './practice/practice.component';
import { SimpletemplateformComponent } from './simpletemplateform/simpletemplateform.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplateFormAssignComponent } from './template-form-assign/template-form-assign.component';
import { TempAssign2Component } from './temp-assign2/temp-assign2.component';
import { ReactiveFormAssignComponent } from './reactive-form-assign/reactive-form-assign.component';
import { Servicecomp1Component } from './servicecomp1/servicecomp1.component';
import { Servicecomp2Component } from './servicecomp2/servicecomp2.component';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveProjectComponent } from './reactive-project/reactive-project.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { Emp1Component } from './emp1/emp1.component';
import { Emp2Component } from './emp2/emp2.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { CountPipe } from './count.pipe';
import { PipeassignComponent } from './pipeassign/pipeassign.component';
import { CustcountPipe } from './custcount.pipe';
import { FilterpipeComponent } from './filterpipe/filterpipe.component';
import { FilterPipe } from './filter.pipe';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { CustomPipe } from './custom.pipe';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EducationComponent } from './education/education.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { DemopostComponent } from './demopost/demopost.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { ProductsModule } from './product/products.module';
// import { ElectricalsComponent } from './electricals/electricals.component';
import { ElectricalModule } from './electricals/electrical.module';
import { AdduserComponent } from './adduser/adduser.component';
import { RapidapiComponent } from './rapidapi/rapidapi.component';
import { CrudAssignComponent } from './crud-assign/crud-assign.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    DemodirectivesComponent,
    NgswitchComponent,
    StructuraldirectivesComponent,
    NgswitchassignComponent,
    AttriComponent,
    DemoComponent,
    HooksComponent,
    HooksAssignComponent,
    DirassignComponent,
    AddRemoveComponent,
    PracticeComponent,
    SimpletemplateformComponent,
    ChildComponent,
    ParentComponent,
    ReactiveformComponent,
    TemplateFormAssignComponent,
    TempAssign2Component,
    ReactiveFormAssignComponent,
    Servicecomp1Component,
    Servicecomp2Component,
    ReactiveProjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    Emp1Component,
    Emp2Component,
    PipedemoComponent,
    CountPipe,
    PipeassignComponent,
    CustcountPipe,
    FilterpipeComponent,
    FilterPipe,
    CustompipeComponent,
    CustomPipe,
    AboutusComponent,
    ContactusComponent,
    HomeComponent,
    LoginComponent,
    EducationComponent,
    PagenotfoundComponent,
    DemopostComponent,
    PostdetailsComponent,
    AdduserComponent,
    RapidapiComponent,
    CrudAssignComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    // ElectricalsComponent,
  
  ],
  imports: [
    
    BrowserModule,
    ElectricalModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log('App module called');
    
  }
}

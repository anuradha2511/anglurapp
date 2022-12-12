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
import { CustdirDirective } from './custdir.directive';
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
    CustdirDirective,
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
    TemplateFormAssignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowergenerationComponent } from './powergeneration/powergeneration.component';
import { EnergymeterComponent } from './energymeter/energymeter.component';
import { SwitchesComponent } from './switches/switches.component';
import { ElectricalsparesComponent } from './electricalspares/electricalspares.component';
import { RouterModule, Routes } from '@angular/router';
import { ElectricalsComponent } from './electricals.component';
import { UtilityModule } from '../models/utility.module';

const electRoutes: Routes = [
  { path:'electricals', component: ElectricalsComponent, children: [
 { path:'powergeneration', component: PowergenerationComponent},
 { path:'energymeter', component: EnergymeterComponent},
 { path:'electricalspares', component: ElectricalsparesComponent},
 { path:'switches', component: SwitchesComponent}
  ]},
]


@NgModule({
  declarations: [ 
    ElectricalsComponent,
    PowergenerationComponent,
    EnergymeterComponent,
    ElectricalsparesComponent,
    SwitchesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(electRoutes),
    UtilityModule
  ],
  exports: [
    RouterModule,
    UtilityModule
  ]
})
export class ElectricalModule { }

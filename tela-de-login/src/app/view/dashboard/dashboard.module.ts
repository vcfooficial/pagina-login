import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }

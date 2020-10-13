import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientCalendarPageRoutingModule } from './patient-calendar-routing.module';

import { PatientCalendarPage } from './patient-calendar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientCalendarPageRoutingModule
  ],
  declarations: [PatientCalendarPage]
})
export class PatientCalendarPageModule {}

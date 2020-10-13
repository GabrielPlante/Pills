import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientCalendarPage } from './patient-calendar.page';

const routes: Routes = [
  {
    path: '',
    component: PatientCalendarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientCalendarPageRoutingModule {}

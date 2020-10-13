import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoignantCalendarPageRoutingModule } from './soignant-calendar-routing.module';

import { SoignantCalendarPage } from './soignant-calendar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoignantCalendarPageRoutingModule
  ],
  declarations: [SoignantCalendarPage]
})
export class SoignantCalendarPageModule {}

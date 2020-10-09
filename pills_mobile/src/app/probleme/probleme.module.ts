import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProblemePageRoutingModule } from './probleme-routing.module';

import { ProblemePage } from './probleme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProblemePageRoutingModule
  ],
  declarations: [ProblemePage],
})
export class ProblemePageModule {}

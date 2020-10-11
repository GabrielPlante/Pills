import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoignantPageRoutingModule } from './soignant-routing.module';

import { SoignantPage } from './soignant.page';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SoignantPageRoutingModule,
        MatExpansionModule
    ],
  declarations: [SoignantPage]
})
export class SoignantPageModule {}

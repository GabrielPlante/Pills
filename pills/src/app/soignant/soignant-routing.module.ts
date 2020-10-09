import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoignantPage } from './soignant.page';

const routes: Routes = [
  {
    path: '',
    component: SoignantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoignantPageRoutingModule {}

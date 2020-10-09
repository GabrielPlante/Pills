import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProblemePage } from './probleme.page';

const routes: Routes = [
  {
    path: '',
    component: ProblemePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProblemePageRoutingModule {}

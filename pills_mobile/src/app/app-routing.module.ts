import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'patient',
    loadChildren: () => import('./patient/patient.module').then( m => m.PatientPageModule)
  },
  {
    path: 'soignant',
    loadChildren: () => import('./soignant/soignant.module').then( m => m.SoignantPageModule)
  },
  {
    path: 'probleme',
    loadChildren: () => import('./probleme/probleme.module').then( m => m.ProblemePageModule)
  },
  {
    path: 'patient-calendar',
    loadChildren: () => import('./patient-calendar/patient-calendar.module').then( m => m.PatientCalendarPageModule)
  },
  {
    path: 'soignant-calendar',
    loadChildren: () => import('./soignant-calendar/soignant-calendar.module').then( m => m.SoignantCalendarPageModule)
  },
  {
    path: 'prescription',
    loadChildren: () => import('./prescription/prescription.module').then( m => m.PrescriptionPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {SOIGNANTS_MOCKED} from '../../mocks/soignants.mocks';
import {PATIENTS_MOCKED} from '../../mocks/patients.mocks';
import {MEDICAMENTS_MOCKED} from '../../mocks/medicaments.mocks';
import {ALERTES_MOCKED} from '../../mocks/alertes.mocks';
import {RENDEZVOUS_MOCKED} from '../../mocks/rendezVous.mocks';
import {Component} from '@angular/core';
import {Alerte} from '../../models/alerte';

@Component({
  selector: 'app-soignant',
  templateUrl: './soignant.page.html',
  styleUrls: ['./soignant.page.scss'],
})
export class SoignantPage{
  panelOpenState = false;
  mySoignant = SOIGNANTS_MOCKED[0];
  patients = PATIENTS_MOCKED;
  medicaments = MEDICAMENTS_MOCKED;
  alerts = ALERTES_MOCKED;
  rendezVous = RENDEZVOUS_MOCKED;

  constructor() { }

  correctAlert( alertToCorrect: Alerte){
    alertToCorrect.correction = true;
    alertToCorrect.dateOfCorrection = new Date();
  }

}

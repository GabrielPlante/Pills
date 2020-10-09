import { Component, OnInit } from '@angular/core';
import {SOIGNANTS_MOCKED} from '../../mocks/soignants.mocks';
import {PATIENTS_MOCKED} from '../../mocks/patients.mocks';
import {MEDICAMENTS_MOCKED} from '../../mocks/medicaments.mocks';

@Component({
  selector: 'app-soignant',
  templateUrl: './soignant.page.html',
  styleUrls: ['./soignant.page.scss'],
})
export class SoignantPage implements OnInit {
  mySoignant = SOIGNANTS_MOCKED[0];
  patients = PATIENTS_MOCKED;
  medicaments = MEDICAMENTS_MOCKED;
  constructor() { }

  ngOnInit() {
  }

}

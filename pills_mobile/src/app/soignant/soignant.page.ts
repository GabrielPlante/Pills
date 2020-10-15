import {SOIGNANTS_MOCKED} from '../../mocks/soignants.mocks';
import {PATIENTS_MOCKED} from '../../mocks/patients.mocks';
import {MEDICAMENTS_MOCKED} from '../../mocks/medicaments.mocks';
import {ALERTES_MOCKED} from '../../mocks/alertes.mocks';
import {RENDEZVOUS_MOCKED} from '../../mocks/rendezVous.mocks';
import {Component} from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import {Alerte} from '../../models/alerte';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import {ActivatedRoute, Router} from '@angular/router';

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
  currentDate = new Date();
  prescription: string;

  paysage = false;
  constructor(private callNumber: CallNumber, private screenOrientation: ScreenOrientation,
              private route: ActivatedRoute, private router: Router) {
    if (this.screenOrientation.type === this.screenOrientation.ORIENTATIONS.LANDSCAPE_PRIMARY
        || this.screenOrientation.type === this.screenOrientation.ORIENTATIONS.LANDSCAPE
        || this.screenOrientation.type === this.screenOrientation.ORIENTATIONS.LANDSCAPE_SECONDARY){
      this.paysage = true;
    }
    this.screenOrientation.onChange().subscribe(
        () => {
          if (this.screenOrientation.type === this.screenOrientation.ORIENTATIONS.LANDSCAPE_PRIMARY
              || this.screenOrientation.type === this.screenOrientation.ORIENTATIONS.LANDSCAPE
              || this.screenOrientation.type === this.screenOrientation.ORIENTATIONS.LANDSCAPE_SECONDARY){
            this.paysage = true;
          }
          else {
            this.paysage = false;
          }
        }
    );
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.prescription = this.router.getCurrentNavigation().extras.state.conclusion;
      }
    });

  }

  correctAlert( alertToCorrect: Alerte){
    alertToCorrect.correction = true;
    alertToCorrect.dateOfCorrection = new Date();
  }

  getCall(){
    this.callNumber.callNumber('0750403953', true)
        .then(res => console.log('Launched dialer!', res))
        .catch(err => console.log('Error launching dialer', err));
  }



}

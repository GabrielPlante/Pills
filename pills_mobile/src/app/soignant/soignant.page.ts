import {SOIGNANTS_MOCKED} from '../../mocks/soignants.mocks';
import {PATIENTS_MOCKED} from '../../mocks/patients.mocks';
import {MEDICAMENTS_MOCKED} from '../../mocks/medicaments.mocks';
import {ALERTES_MOCKED} from '../../mocks/alertes.mocks';
import {RENDEZVOUS_MOCKED} from '../../mocks/rendezVous.mocks';
import {ChangeDetectorRef, Component} from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import {Alerte} from '../../models/alerte';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {SpeechRecognition} from '@ionic-native/speech-recognition/ngx';

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
  matches: string[];
  toPrint: string;
  prescription: string;
  isRecord: false;

  paysage = false;
  constructor(private callNumber: CallNumber, private screenOrientation: ScreenOrientation,
              private route: ActivatedRoute, private router: Router, private alertController: AlertController,
              private speechRecognition: SpeechRecognition, private cd: ChangeDetectorRef) {
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

  getCall(id: number){
    if (id === 1) {
      this.callNumber.callNumber('0750403953', true)
          .then(res => this.callFailed())
          .catch(err => console.log('Error launching dialer', err));

    } else {
      this.sendAndClose();
    }
  }

  async callFailed(){
    const alert = await this.alertController.create({
      header: 'Votre patient n\'a pas répondu ',
      message: 'Engistrer un message afin de lui répondre rapidement ! ' + this.toPrint ,
      buttons: [
        {
          text: this.isRecord ? 'Valider' : 'Enregistrer',
          handler: data => {
            this.isRecord ?
                console.log('finish') : this.Record();
          }
        }
      ]
    });
    await alert.present;
  }

  Record() {
    this.speechRecognition.hasPermission()
        .then((hasPermission: boolean) => {
          if (!hasPermission) {
            this.speechRecognition.requestPermission();
          }
        });

    this.speechRecognition.startListening().subscribe(
        matches => {
          this.matches = matches;
          this.toPrint = matches[0];
          this.cd.detectChanges();
        });
  }

  async sendAndClose() {
    const alert = await this.alertController.create({
      header: 'Erreur',
      message: 'Impossible de joindre votre patient, veuillez lui laisser un message',
      buttons: [
        {
          text: 'Enregistrer',
          handler: data => {
            this.Record();
          }
        }
      ]
    });

    await alert.present();
  }





}

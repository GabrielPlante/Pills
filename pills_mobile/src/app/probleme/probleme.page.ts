import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { AlertController } from '@ionic/angular';
import {Alerte} from '../../models/alerte';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-probleme',
  templateUrl: './probleme.page.html',
  styleUrls: ['./probleme.page.scss'],
})
export class ProblemePage {
  matches: string[];
  toPrint: string;
  isRecording = false;
  proposal = false;
  proposalString: string;
  myAlert: Alerte;

  constructor( private alertController: AlertController, private speechRecognition: SpeechRecognition, private cd: ChangeDetectorRef,
               private localNotifications: LocalNotifications ) {}

  setProposal(myProposal: string){
    this.proposal = true;
    this.proposalString = myProposal;
  }

  setVocalRecognition() {
    this.proposal = false;
    this.speechRecognition.hasPermission()
        .then((hasPermission: boolean) => {
          if (!hasPermission) {
            this.speechRecognition.requestPermission();
          }
        });

    const options = {
      language: 'fr'
    };
    this.speechRecognition.startListening().subscribe(
        matches => {
      this.matches = matches;
      this.toPrint = matches[0];
      this.cd.detectChanges();
    });
    this.isRecording = true;
  }

  async sendAndClose() {
    const alert = await this.alertController.create({
      header: 'Envoyé !',
      message: 'votre message a bien été envoyé à votre traitant',
      buttons: ['Ok']
    });

    this.localNotifications.schedule({
      title: 'Alerte de ' + 'Robert Pattinson ',
      text: this.proposal ? this.proposalString : this.toPrint,
      trigger: {at: new Date(new Date().getTime() + 1600)},
      led: 'FF0000',
      smallIcon: 'res://ic_stat_notify.png',
      icon: 'res://icon.png',
      sound: null
    });

    await alert.present();
  }
}

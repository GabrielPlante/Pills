import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-probleme',
  templateUrl: './probleme.page.html',
  styleUrls: ['./probleme.page.scss'],
})
export class ProblemePage {
  matches: string[];
  toPrint: string;
  isRecording = false;

  constructor(private alertController: AlertController, private speechRecognition: SpeechRecognition, private cd: ChangeDetectorRef) {}

  setVocalRecognition() {
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

    await alert.present();
  }
}

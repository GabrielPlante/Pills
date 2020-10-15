import { Component } from '@angular/core';
import {BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner/ngx';
import {MEDICAMENTS_MOCKED} from '../../mocks/medicaments.mocks';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.page.html',
  styleUrls: ['./prescription.page.scss'],
})
export class PrescriptionPage {
  scanData: {};
  medicamentName: string;
  medicamentImagePath: string;
  frequency: string;
  repetition: number;
  options: BarcodeScannerOptions;
  conclusion: string;
  constructor( private barcodeScanner: BarcodeScanner, private router: Router){}

  scan(){
    this.options = {
      prompt : 'Scan your barcode '
    };
    this.barcodeScanner.scan(this.options).then((barcodeData) => {
        this.scanData = barcodeData;
        console.log(barcodeData);
        this.medicamentName = MEDICAMENTS_MOCKED[0].name;
        this.medicamentImagePath = 'assets/images/morphine.jpg';
    }, (err) => {
      console.log('Error occured : ' + err);
    });
  }

  validPrescription(){
    this.conclusion = ' Le médicament ' + this.medicamentName
    + ' a été prescrit à hauteur de ' + this.repetition.toString() + ' ' + this.frequency;
    const navigationExtras: NavigationExtras = {
      state: {
        conclusion: this.conclusion
      }
    };
    this.router.navigate(['soignant'], navigationExtras);
  }

  arrayOne(n: number): number[] {
    return [...Array(n).keys()];
  }

}

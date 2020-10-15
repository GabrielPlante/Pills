import { Component, OnInit } from '@angular/core';
import {PATIENTS_MOCKED} from '../../mocks/patients.mocks';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.page.html',
  styleUrls: ['./patient.page.scss'],
})
export class PatientPage implements OnInit {
  myPatient = PATIENTS_MOCKED[0];
  weekdays = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  heureActuelle = 14;
  currentDate = new Date();
  today = this.weekdays[this.currentDate.getDay()];
  prises = [
    {
      jour: 'Aujourd\'hui',
      liste: [
        {
          heure: 10,
          estPrise: false,
          listeMed: [
            {
              quantite: 1,
              nom: 'Hydroxybutanoïque'
            },
            {
              quantite: 2,
              nom: 'Diacétylmorphine'
            }
          ]
        },
        {
          heure: 17,
          estPrise: false,
          listeMed: [
            {
              quantite: 1,
              nom: 'Hydroxybutanoïque'
            },
            {
              quantite: 1,
              nom: 'Diacétylmorphine'
            }
          ]
        }
      ]
    },
    {
      jour: 'Demain',
      liste: [
        {
          heure: 10,
          estPrise: false,
          listeMed: [
            {
              quantite: 1,
              nom: 'Hydroxybutanoïque'
            },
            {
              quantite: 2,
              nom: 'Diacétylmorphine'
            }
          ]
        },
        {
          heure: 13,
          estPrise: false,
          listeMed: [
            {
              quantite: 4,
              nom: 'Diéthyllysergamide'
            }
          ]
        },
        {
          heure: 17,
          estPrise: false,
          listeMed: [
            {
              quantite: 1,
              nom: 'Hydroxybutanoïque'
            },
            {
              quantite: 1,
              nom: 'Diacétylmorphine'
            }
          ]
        }
      ]
    },
    {
      jour: 'Dans 2 jours',
      liste: [
        {
          heure: 10,
          estPrise: false,
          listeMed: [
            {
              quantite: 1,
              nom: 'Hydroxybutanoïque'
            },
            {
              quantite: 2,
              nom: 'Diacétylmorphine'
            }
          ]
        },
        {
          heure: 17,
          estPrise: false,
          listeMed: [
            {
              quantite: 1,
              nom: 'Hydroxybutanoïque'
            },
            {
              quantite: 1,
              nom: 'Diacétylmorphine'
            }
          ]
        }
      ]
    },
    {
      jour: 'Dans 3 jours',
      liste: [
        {
          heure: 10,
          estPrise: false,
          listeMed: [
            {
              quantite: 1,
              nom: 'Hydroxybutanoïque'
            },
            {
              quantite: 2,
              nom: 'Diacétylmorphine'
            }
          ]
        },
        {
          heure: 17,
          estPrise: false,
          listeMed: [
            {
              quantite: 1,
              nom: 'Hydroxybutanoïque'
            },
            {
              quantite: 1,
              nom: 'Diacétylmorphine'
            }
          ]
        }
      ]
    }
  ];
  paysage = false;
  constructor(private screenOrientation: ScreenOrientation) {
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
  }


  ngOnInit() {
  }

}
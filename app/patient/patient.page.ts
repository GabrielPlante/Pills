import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.page.html',
  styleUrls: ['./patient.page.scss'],
})
export class PatientPage implements OnInit {
  heureActuelle = 14;
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
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

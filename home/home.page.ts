import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  prises = [
    {
      jour: 'Aujourd\'hui',
      estPrise: false,
      liste: [
        {
          heure: '10h',
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
          heure: '17h',
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
      estPrise: false,
      liste: [
        {
          heure: '10h',
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
          heure: '13h',
          listeMed: [
            {
              quantite: 4,
              nom: 'Diéthyllysergamide'
            }
          ]
        },
        {
          heure: '17h',
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

  constructor() {}

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-calendar',
  templateUrl: './patient-calendar.page.html',
  styleUrls: ['./patient-calendar.page.scss'],
})
export class PatientCalendarPage implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}

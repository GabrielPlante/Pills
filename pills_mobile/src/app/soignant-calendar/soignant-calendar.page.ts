import { Component, OnInit } from '@angular/core';
import {RENDEZVOUS_MOCKED} from '../../mocks/rendezVous.mocks';

@Component({
  selector: 'app-soignant-calendar',
  templateUrl: './soignant-calendar.page.html',
  styleUrls: ['./soignant-calendar.page.scss'],
})
export class SoignantCalendarPage implements OnInit {
  rendezVous = RENDEZVOUS_MOCKED;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {RENDEZVOUS_MOCKED} from '../../mocks/rendezVous.mocks';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-soignant-calendar',
  templateUrl: './soignant-calendar.page.html',
  styleUrls: ['./soignant-calendar.page.scss'],
})
export class SoignantCalendarPage implements OnInit {
  rendezVous = RENDEZVOUS_MOCKED;
  paysage = false;
  constructor(private screenOrientation: ScreenOrientation) {
    if (this.screenOrientation.type === this.screenOrientation.ORIENTATIONS.LANDSCAPE){
      this.paysage = true;
    }
  }

  ngOnInit() {
  }

}

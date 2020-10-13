import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SoignantCalendarPage } from './soignant-calendar.page';

describe('SoignantCalendarPage', () => {
  let component: SoignantCalendarPage;
  let fixture: ComponentFixture<SoignantCalendarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoignantCalendarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SoignantCalendarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

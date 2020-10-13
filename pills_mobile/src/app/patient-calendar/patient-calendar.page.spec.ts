import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatientCalendarPage } from './patient-calendar.page';

describe('PatientCalendarPage', () => {
  let component: PatientCalendarPage;
  let fixture: ComponentFixture<PatientCalendarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientCalendarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientCalendarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SoignantPage } from './soignant.page';

describe('SoignantPage', () => {
  let component: SoignantPage;
  let fixture: ComponentFixture<SoignantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoignantPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SoignantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

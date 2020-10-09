import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProblemePage } from './probleme.page';

describe('ProblemePage', () => {
  let component: ProblemePage;
  let fixture: ComponentFixture<ProblemePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProblemePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

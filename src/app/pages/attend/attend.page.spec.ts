import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AttendPage } from './attend.page';

describe('AttendPage', () => {
  let component: AttendPage;
  let fixture: ComponentFixture<AttendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AttendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

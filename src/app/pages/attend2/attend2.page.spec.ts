import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Attend2Page } from './attend2.page';

describe('Attend2Page', () => {
  let component: Attend2Page;
  let fixture: ComponentFixture<Attend2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Attend2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Attend2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

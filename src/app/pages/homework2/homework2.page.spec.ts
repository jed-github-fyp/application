import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Homework2Page } from './homework2.page';

describe('Homework2Page', () => {
  let component: Homework2Page;
  let fixture: ComponentFixture<Homework2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homework2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Homework2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

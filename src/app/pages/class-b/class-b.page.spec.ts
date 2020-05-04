import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClassBPage } from './class-b.page';

describe('ClassBPage', () => {
  let component: ClassBPage;
  let fixture: ComponentFixture<ClassBPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassBPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClassBPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

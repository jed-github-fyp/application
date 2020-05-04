import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClassAPage } from './class-a.page';

describe('ClassAPage', () => {
  let component: ClassAPage;
  let fixture: ComponentFixture<ClassAPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassAPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClassAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralManageComponent } from './general-manage.component';

describe('GeneralManageComponent', () => {
  let component: GeneralManageComponent;
  let fixture: ComponentFixture<GeneralManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalManageComponent } from './national-manage.component';

describe('NationalManageComponent', () => {
  let component: NationalManageComponent;
  let fixture: ComponentFixture<NationalManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

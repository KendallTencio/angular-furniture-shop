import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralManageToolsComponent } from './general-manage-tools.component';

describe('GeneralManageToolsComponent', () => {
  let component: GeneralManageToolsComponent;
  let fixture: ComponentFixture<GeneralManageToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralManageToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralManageToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

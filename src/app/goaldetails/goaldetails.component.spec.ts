import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoaldetailsComponent } from './goaldetails.component';

describe('GoaldetailsComponent', () => {
  let component: GoaldetailsComponent;
  let fixture: ComponentFixture<GoaldetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoaldetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoaldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

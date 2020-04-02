import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotedetailsComponent } from './quotedetails.component';

describe('QuotedetailsComponent', () => {
  let component: QuotedetailsComponent;
  let fixture: ComponentFixture<QuotedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

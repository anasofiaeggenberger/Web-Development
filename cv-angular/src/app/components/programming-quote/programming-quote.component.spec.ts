import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingQuoteComponent } from './programming-quote.component';

describe('ProgrammingQuoteComponent', () => {
  let component: ProgrammingQuoteComponent;
  let fixture: ComponentFixture<ProgrammingQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammingQuoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrammingQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

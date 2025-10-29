import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvBotonComponent } from './cv-boton.component';

describe('CvBotonComponent', () => {
  let component: CvBotonComponent;
  let fixture: ComponentFixture<CvBotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvBotonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvBotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportConsultaComponent } from './sport-consulta.component';

describe('SportConsultaComponent', () => {
  let component: SportConsultaComponent;
  let fixture: ComponentFixture<SportConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

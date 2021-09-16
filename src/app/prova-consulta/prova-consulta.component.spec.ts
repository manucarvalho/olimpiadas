import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvaConsultaComponent } from './prova-consulta.component';

describe('ProvaConsultaComponent', () => {
  let component: ProvaConsultaComponent;
  let fixture: ComponentFixture<ProvaConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvaConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvaConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtletaConsultaComponent } from './atleta-consulta.component';

describe('AtletaConsultaComponent', () => {
  let component: AtletaConsultaComponent;
  let fixture: ComponentFixture<AtletaConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtletaConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtletaConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

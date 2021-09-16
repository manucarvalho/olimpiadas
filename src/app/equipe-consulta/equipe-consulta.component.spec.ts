import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeConsultaComponent } from './equipe-consulta.component';

describe('EquipeConsultaComponent', () => {
  let component: EquipeConsultaComponent;
  let fixture: ComponentFixture<EquipeConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipeConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipeConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisConsultaComponent } from './pais-consulta.component';

describe('PaisConsultaComponent', () => {
  let component: PaisConsultaComponent;
  let fixture: ComponentFixture<PaisConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

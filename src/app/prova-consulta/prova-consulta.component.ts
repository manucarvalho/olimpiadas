import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Prova } from '../models/prova';
import { ProvaService } from '../services/prova.service';

@Component({
  selector: 'app-prova-consulta',
  templateUrl: './prova-consulta.component.html',
  styleUrls: ['./prova-consulta.component.css']
})
export class ProvaConsultaComponent implements OnInit {

  provas: Prova[] = [];
  prova = {} as Prova;

  formProva = this.formBuilder.group({
    id: [''],
    nome: [''],
    genero: [''],
    tipo: [''],
    premiacao: [''],
    sport: this.formBuilder.group({
      id: [''],
      nome: ['']
    }),
  })

  constructor(private formBuilder: FormBuilder,
    private provaService: ProvaService) { }

  ngOnInit(): void {
    this.getProvas();
  }

  getProvas() {
    this.provaService.getProvas().subscribe((provas: Prova[]) => {
      this.provas = provas;
    });
  }

  deleteProva(form: FormGroup){
    this.provaService.deleteProva(form.value).subscribe(() => {
      this.getProvas();
      alert('Prova deletada da lista.');
    });
  }

  updateProva(form: FormGroup) {
    this.provaService.updateProva(form.value).subscribe(() => {
      alert('Prova atualizada.');
    });
  }

  preencherForm(prova: Prova){
    this.formProva.controls['id'].setValue(prova.id);
    this.formProva.controls['nome'].setValue(prova.nome);
    this.formProva.controls['genero'].setValue(prova.genero);
    this.formProva.controls['tipo'].setValue(prova.tipo);
    this.formProva.controls['premiacao'].setValue(prova.premiacao);
    this.formProva.controls['sport'].patchValue({
      id: prova.sport.id,
      nome: prova.sport.nome,
    });
  }
}

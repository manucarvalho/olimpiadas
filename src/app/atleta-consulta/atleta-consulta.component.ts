import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Atleta } from '../models/atleta';
import { AtletaService } from '../services/atleta.service';

@Component({
  selector: 'app-atleta-consulta',
  templateUrl: './atleta-consulta.component.html',
  styleUrls: ['./atleta-consulta.component.css']
})
export class AtletaConsultaComponent implements OnInit {

  atletas: Atleta[] = [];
  atleta = {} as Atleta;

  formAtleta = this.formBuilder.group({
    id: [''],
    nome: [''],
    genero: [''],
    pais: this.formBuilder.group({
      id: [''],
      nome: ['']
    }),
  })

  constructor(private formBuilder: FormBuilder,
    private atletaService: AtletaService) { }

  ngOnInit(): void {
    this.getAtletas();
  }

  getAtletas() {
    this.atletaService.getAtletas().subscribe((atletas: Atleta[]) => {
      this.atletas = atletas;
    });
  }

  deleteAtleta(atleta: Atleta){
    this.atletaService.deleteAtleta(atleta).subscribe(() => {
      this.getAtletas();
      alert('Atleta deletado da lista.');
    });
  }

  updateAtleta(form: FormGroup) {
    this.atletaService.updateAtleta(form.value).subscribe(() => {
      alert('Atleta atualizado.');
    });
  }

  onAtualizar(atleta: Atleta){
    this.formAtleta.controls['id'].setValue(atleta.id);
    this.formAtleta.controls['nome'].setValue(atleta.nome);
    this.formAtleta.controls['genero'].setValue(atleta.genero);
    this.formAtleta.controls['pais'].patchValue({
      id: atleta.pais.id,
      nome: atleta.pais.nome,
    });
  }
}

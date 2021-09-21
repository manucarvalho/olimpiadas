import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Pais } from '../models/pais';
import { PaisService } from '../services/pais.service';

@Component({
  selector: 'app-pais-consulta',
  templateUrl: './pais-consulta.component.html',
  styleUrls: ['./pais-consulta.component.css']
})
export class PaisConsultaComponent implements OnInit {

  paises: Pais[] = [];
  pais = {} as Pais;

  formPais = this.formBuilder.group({
    id: [''],
    nome: ['']
  })
 

  constructor(
    private formBuilder: FormBuilder,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
    this.getPaises();
  }

  getPaises() {
    this.paisService.getPaises().subscribe((paises: Pais[]) => {
      this.paises = paises;
    });
  }

  deletePais(form: FormGroup){
    this.paisService.deletePais(form.value).subscribe(() => {
      this.getPaises();
      alert('Pais deletado da lista.');
    });
  }  

  updatePais(form: FormGroup) {
    this.paisService.updatePais(form.value).subscribe(() => {
      alert('Pais atualizado.');
    });
  }

  preencherForm(pais: Pais){
    this.formPais.controls['id'].setValue(pais.id);
    this.formPais.controls['nome'].setValue(pais.nome);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Equipe } from '../models/equipe';
import { EquipeService } from '../services/equipe.service';

@Component({
  selector: 'app-equipe-consulta',
  templateUrl: './equipe-consulta.component.html',
  styleUrls: ['./equipe-consulta.component.css']
})
export class EquipeConsultaComponent implements OnInit {

  equipes: Equipe[] = [];
  equipe = {} as Equipe;

  formEquipe = this.formBuilder.group({
    id: [''],
    nome: [''],
    quantAtletas: [''],
    //atletas:  this.formBuilder.array([this.createAtleta()])
    //atletas: ['']
    atletas: this.formBuilder.array([
      this.formBuilder.group({
        id: [''],
        nome: [''],
        genero: [''],
        pais: ['']
      })
    ])

    
  })

  constructor(private formBuilder: FormBuilder,
    private equipeService: EquipeService) { }

  ngOnInit(): void {
    this.getEquipes()
  }

  getEquipes() {
    this.equipeService.getEquipes().subscribe((equipes: Equipe[]) => {
      this.equipes = equipes;
    });
  }

  deleteEquipe(form: FormGroup){
    this.equipeService.deleteEquipe(form.value).subscribe(() => {
      this.getEquipes();
      alert('Equipe deletada da lista.');
    });
  }

  updateEquipe(form: FormGroup) {
    this.equipeService.updateEquipe(form.value).subscribe(() => {
      alert('Equipe atualizada.');
    });
  }

  preencherForm(equipe: Equipe){
    this.formEquipe.controls['id'].setValue(equipe.id);
    this.formEquipe.controls['nome'].setValue(equipe.nome);
    this.formEquipe.controls['quantAtletas'].setValue(equipe.quantAtletas);
    //this.formEquipe.controls['atletas'].setValue(equipe.atletas);
    let atletasFormArray = this.formEquipe.get('atletas') as FormArray;
    for (let i=0; i<atletasFormArray.controls.length; i++){
      this.formEquipe.controls['atletas'].patchValue({
        id: equipe.atletas[i].id,
        nome: equipe.atletas[i].nome,
        genero: equipe.atletas[i].genero,
        pais: equipe.atletas[i].pais,
      });     
    }
    //atletasFormArray.push(this.createAtleta());    
    //this.formEquipe.controls['atletas'].patchValue(atletasFormArray); 
  }

  /*createAtleta(): FormGroup{
    return this.formBuilder.group({
      id: [''],
      nome: [''],
      genero: [''],
      pais: ['']
    })
  } */
 
}

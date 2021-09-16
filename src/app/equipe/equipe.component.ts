import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Atleta } from '../models/atleta';
import { EquipeService } from '../services/equipe.service';
import { SelectService } from '../services/select.service';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {

  atletas!: Atleta[];

  formEquipe = this.formBuilder.group({
    nome: [null, Validators.required],
    quantAtletas: [null, Validators.required],
    atletas:[null, Validators.required]
  })

  constructor(private formBuilder: FormBuilder,
    private equipeService: EquipeService,
    private selectService: SelectService) { }

  ngOnInit(): void {
    this.selectService.getAtletas()
      .subscribe(dados => this.atletas = dados);
  }

  saveEquipe(form: FormGroup){
    if(!this.formEquipe.valid){
      alert("Formulário inválido");
    } else{
      this.equipeService.saveEquipe(form.value).subscribe(() => {
        alert('Equipe salva.');
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sport } from '../models/sport';
import { ProvaService } from '../services/prova.service';
import { SelectService } from '../services/select.service';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit {

  sports !: Sport[];

  formProva = this.formBuilder.group({
    nome: [null, Validators.required],
    genero: [null, Validators.required],
    tipo: [null, Validators.required],
    premiacao: [null, Validators.required],
    sport: [null, Validators.required]
  })

  constructor(private formBuilder: FormBuilder,
    private selectService: SelectService,
    private provaService: ProvaService
  ) { }

  ngOnInit(): void {

    this.selectService.getSports()
      .subscribe(dados => this.sports = dados);
  }

  saveProva(form: FormGroup){
    if(!this.formProva.valid){
      alert("Formulário inválido");
    } else {
      this.provaService.saveProva(form.value).subscribe(() => {
        alert('Prova salva.');
      });
    }
    
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pais } from '../models/pais';
import { AtletaService } from '../services/atleta.service';
import { SelectService } from '../services/select.service';

@Component({
  selector: 'app-atleta',
  templateUrl: './atleta.component.html',
  styleUrls: ['./atleta.component.css']
})
export class AtletaComponent implements OnInit {

  paises!: Pais[];

  formAtleta = this.formBuilder.group({
    nome: [null, Validators.required],
    genero: [null, Validators.required],
    pais: [null, Validators.required]
  })

  constructor(private formBuilder: FormBuilder,
    private selectService: SelectService,
    private atletaService: AtletaService
  ) { }

  ngOnInit(): void {    

    this.selectService.getPaises()
      .subscribe(dados => this.paises = dados);
  }

  saveAtleta(form: FormGroup){
    if(!this.formAtleta.valid){
      alert("Formulário inválido");
    } else {
      this.atletaService.saveAtleta(form.value).subscribe(() => {
        alert('Atleta salvo.');
      });
    }    
  }

}

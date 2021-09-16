import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisService } from '../services/pais.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  formPais = this.formBuilder.group({
    nome: [null, Validators.required]
  })

  constructor(
    private formBuilder: FormBuilder,
    private paisService: PaisService
    ) { }

  ngOnInit(){
  
  }

  savePais(form: FormGroup){
    if(!this.formPais.valid){
      alert("Formulário inválido");
    } else {
      this.paisService.savePais(form.value).subscribe(() => {
        alert('Pais salvo.');
      });
    }    
  }
  
}

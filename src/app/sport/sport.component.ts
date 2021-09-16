import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SportService } from '../services/sport.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {

  formSport = this.formBuilder.group({
    nome: [null, Validators.required]
  })

  constructor(private formBuilder: FormBuilder,
    private sportService: SportService
  ) { }

  ngOnInit(): void {
  }

  saveSport(form: FormGroup){
    if(!this.formSport.valid){
      alert("Formulário inválido");
    } else{
      this.sportService.saveSport(form.value).subscribe(() => {
        alert('Sport salvo.');
      });
    }    
  }

}

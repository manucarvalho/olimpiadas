import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Sport } from '../models/sport';
import { SportService } from '../services/sport.service';

@Component({
  selector: 'app-sport-consulta',
  templateUrl: './sport-consulta.component.html',
  styleUrls: ['./sport-consulta.component.css']
})
export class SportConsultaComponent implements OnInit {
  
  sports: Sport[] = [];
  sport = {} as Sport;

  formSport = this.formBuilder.group({
    id: [''],
    nome: ['']
  })

  constructor(private formBuilder: FormBuilder,
    private sportService: SportService) { }

  ngOnInit(): void {
    this.getSports();
  }

  getSports() {
    this.sportService.getSports().subscribe((sports: Sport[]) => {
      this.sports = sports;
    });
  }

  deleteSport(sport: Sport){
    this.sportService.deleteSport(sport).subscribe(() => {
      this.getSports();
      alert('Sport deletado da lista.');
    });
  }

  updateSport(form: FormGroup) {
    this.sportService.updateSport(form.value).subscribe(() => {
      alert('Sport atualizado.');
    });
  }

  onAtualizar(sport: Sport){
    this.formSport.controls['id'].setValue(sport.id);
    this.formSport.controls['nome'].setValue(sport.nome);
  }
}

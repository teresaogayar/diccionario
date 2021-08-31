import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ingles } from '../ingles';
import { InglesService } from '../ingles.service';

@Component({
  selector: 'app-ingles',
  templateUrl: './ingles.component.html',
  styleUrls: ['./ingles.component.scss']
})
export class InglesComponent implements OnInit {

  public palabraen: Ingles[] = [];

  constructor(public inglesService: InglesService,
              public router: Router) { }

  ngOnInit(): void {

    this.inglesService.getWords().subscribe((resp: Ingles[])=>{
      console.log(resp);
      this.palabraen = resp;
    })
  }

  MensajeBorrarWord(word: string){
    this.palabraen = this.palabraen.filter(pal => pal.palabra!=word);
  }

}

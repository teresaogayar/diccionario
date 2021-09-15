import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  show = false

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.router.events.subscribe( event =>{
      //el if saldra cuando se inice la navegacion
      if ( event instanceof NavigationStart){
        this.show = true
      }else if ( event instanceof NavigationEnd){
        this.show = false
      }
    })
  }


}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUDAngular';
  constructor(private router:Router){}

  irListado(){

    this.router.navigate(['Listado']);
  }

  irAlta(){

    this.router.navigate(['Alta']);
  }

  irModificar(){

    this.router.navigate(['Modificar']);
  }
}

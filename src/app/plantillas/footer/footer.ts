// import {Component} From

import { Component } from '@angular/core';

@Component({
  selector: 'costos-footer',
  templateUrl: './footer.html'
})
export class PlFooter {

  piePagina: string = 'Todos los derechos reservados';
  currentDate: Date = new Date();
}

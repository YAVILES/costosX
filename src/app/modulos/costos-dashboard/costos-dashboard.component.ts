import { Component } from '@angular/core';

@Component({
  selector: 'costos-dashboard',
  templateUrl: './costos-dashboard.component.html',
  styleUrls: ['./costos-dashboard.component.css']
})
export class CostosDashboardComponent {

  title = 'Dashboard';
  
  cards = [
    { title: 'Card 1', cols: 2, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 2 },
    { title: 'Card 4', cols: 1, rows: 1 }
  ];
}

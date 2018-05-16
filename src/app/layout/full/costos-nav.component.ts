import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { UsuarioService } from "../../general/usuario.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'costos-nav',
  templateUrl: './costos-nav.component.html',
  styleUrls: ['./costos-nav.component.css']
})
export class CostosNavComponent {
  private title: string = 'Costos';
  private message: string = 'Cargando..';
  private user: string = 'Cargando..';
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private route: ActivatedRoute, private serv: UsuarioService) { }

  ngOnInit() {
    if (this.serv.isLoggedIn) {
      this.user = localStorage.getItem('user');
      console.log(this.user);
    }
  }

  logout() {
    localStorage.clear();
    this.serv.setLoggedIn(false);
    this.router.navigate(['']);
  }
}

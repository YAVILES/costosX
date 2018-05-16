import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { LoginModelo } from "./login.modelo";
import { UsuarioService } from "../../general/usuario.service";
import { GLOBAL } from "../../general/GLOBAL";

@Component({
    selector: 'ib-login',
    templateUrl: './login.html'
})

export class Login {

    modelLogin: LoginModelo;
    preview: boolean;
    title: string;

    constructor(private router: Router, private serv: UsuarioService) {
        this.modelLogin = new LoginModelo();
        this.title = 'Acceso Al Sistema CostosX.';
        this.preview = false;
    }

    public autentificar(event): void {
        event.preventDefault();
        this.serv.autentificar(GLOBAL.aplication, this.modelLogin.usuario, this.modelLogin.clave).subscribe(data => {
            if (data.error == true) {
                this.serv.setLoggedIn(false);
            } else {
                this.router.navigate(['dashboard']);
                this.serv.setLoggedIn(true);
                localStorage.setItem('user', data.nombre);
            }
        }, error => console.log(error));

    }

    /*
     onRegistrar() {
         this.router.navigate(['registrar'], { relativeTo: this.route.parent });
     }
     */
}
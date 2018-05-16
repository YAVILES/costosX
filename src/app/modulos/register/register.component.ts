import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../general/usuario';
import { Router } from '@angular/router';
import { UsuarioService } from '../../general/usuario.service';
import { GLOBAL } from '../../general/GLOBAL';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  usuarioModel: Usuario;
  preview: boolean = true;
  private title: string = 'Registrar Usuario';

  constructor(private router: Router, private serv: UsuarioService) {
    this.usuarioModel = new Usuario();
  }

  ngOnInit() {
  }


  registrarUsuario(event) {
    event.preventDefault();

    const errors = [];

    if (this.usuarioModel.password != this.usuarioModel.password2) {
      errors.push('Las contraseñas no son iguales!..');
    }

    if (errors.length > 0) {
      this.serv.actualizar(GLOBAL.aplication, this.usuarioModel).subscribe(data => {
        if (data.error == true) {
        } else {
          console.log(data);
          this.router.navigate(['dashboard']);
        }
      }, error => console.log(error));
    } else {
      console.log(errors);
    }

  }
}

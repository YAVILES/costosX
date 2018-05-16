export class Usuario {

    metodo: string;
    codigo: string;
    cedula: string;
    nombre: string;
    apellido: string;
    login: string;
    password: string;
    password2: string;
    password_old: string;
    correo: string;
    activo: boolean;

    constructor(activo?:boolean) {
        this.limpiar(activo);
    }

    public limpiar(act?: boolean) {
        this.password = "";
        this.password2 = "";
        this.metodo = 'agregar';
        this.codigo = '';
        this.cedula = '';
        this.nombre = '';
        this.apellido = '';
        this.login = '';
        this.password_old = '';
        this.correo = '';
        this.activo = act || false;
    }
}


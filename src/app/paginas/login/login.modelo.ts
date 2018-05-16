export class LoginModelo {

    usuario: string;
    clave: string;

    constructor() {
        this.limpiar();
    }

    public limpiar() {
        this.usuario = "";
        this.clave = "";
    }
}
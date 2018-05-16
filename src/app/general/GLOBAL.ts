import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";

export const GLOBAL = {
    url_api_slim: 'http://localhost/api_costosX',
    aplication: 'costosX',
    handleError: (error: HttpErrorResponse) => {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('Ocurrió un error:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error('Backend devolvió el código', error.status +
                ' EL cuerpo era:', error.error);
        }
        // return an observable with a user-facing error message
        return throwError(
            'Algo malo sucedio; Por favor, inténtelo de nuevo más tarde.');
    }
}

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DirectosComponent } from "./directos/directos.component";
import { DatosComponent } from "./datos/datos.component";
const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'directos'
            },
            {
                path: 'directos', component: DirectosComponent,
                data: {
                    title: 'Conceptos Directos'
                }
            },
            {
                path: 'datos', component: DatosComponent,
                data: {
                    title: 'Inicio'
                }
            }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConceptosRoutingModule { }


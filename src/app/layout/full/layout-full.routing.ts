import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../../general/auth.guard";

import { CostosDashboardComponent } from "../../modulos/costos-dashboard/costos-dashboard.component";
import { RegisterComponent } from "../../modulos/register/register.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard', component: CostosDashboardComponent,
                data: {
                    title: 'Inicio'
                }
            },
            {
                path: 'conceptos',
                loadChildren: '../../modulos/conceptos/conceptos.module#ConceptosModule'
            },
            {
                path: 'registrar', component: RegisterComponent,
                data: {
                    title: 'Registrarse'
                }
            }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaginasFullRoutingModule { }


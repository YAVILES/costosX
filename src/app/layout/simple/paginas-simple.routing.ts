import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Login } from "../../paginas/login/login";

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'login', component: Login,
                data: {
                    title: 'Login'
                }
            }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaginasSimpleRoutingModule { }


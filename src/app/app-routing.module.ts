import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { PlInicio } from "./layout/simple/inicio";
import { CostosNavComponent } from "./layout/full/costos-nav.component";
import { AuthGuard } from "./general/auth.guard";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: '', component: CostosNavComponent,
        canActivate: [AuthGuard],
        data: { title: 'Full Diseño' },
        loadChildren: './layout/full/layout-full.module#LayoutFullModule'
    },
    {
        path: '',
        component: PlInicio,
        data: { title: 'Simple Diseño' },
        loadChildren: './layout/simple/layout-simple.module#LayoutSimpleModule'
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})

export class AppRoutingModule {

}


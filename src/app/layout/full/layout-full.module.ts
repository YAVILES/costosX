import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import {MatFormFieldModule, MatStepperModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatInputModule } from '@angular/material';
import { CostosDashboardComponent } from "../../modulos/costos-dashboard/costos-dashboard.component";
import { PaginasFullRoutingModule } from "./layout-full.routing";
import { RegisterComponent } from "../../modulos/register/register.component";
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        PaginasFullRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatStepperModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule
    ],
    declarations: [
        CostosDashboardComponent, RegisterComponent
    ], exports: [
        CostosDashboardComponent
    ]
})
export class LayoutFullModule { }


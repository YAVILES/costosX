import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { PlFooter } from "./footer/footer";
import { PlHeader } from "./header/header";
import {
    MatCardModule
} from '@angular/material';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        MatCardModule
    ],
    declarations: [
        PlFooter,
        PlHeader
    ],
    exports: [
        PlFooter,
        PlHeader
    ]
})
export class PlantillaModule { }

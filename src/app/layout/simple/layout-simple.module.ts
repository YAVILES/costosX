import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { Login } from "../../paginas/login/login";
import { MatCardModule, MatGridListModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { PaginasSimpleRoutingModule } from "./paginas-simple.routing";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PaginasSimpleRoutingModule,
        MatCardModule,
        MatGridListModule
    ],
    declarations: [
        Login
    ]
})
export class LayoutSimpleModule { }


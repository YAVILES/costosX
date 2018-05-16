import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConceptosRoutingModule } from "./conceptos-routing";
import { DirectosComponent } from './directos/directos.component';
import { DatosComponent } from './datos/datos.component';

@NgModule({
  imports: [
    CommonModule,
    ConceptosRoutingModule
  ],
  declarations: [DirectosComponent, DatosComponent]
})
export class ConceptosModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { PlInicio } from "./layout/simple/inicio";
import { CostosNavComponent } from "./layout/full/costos-nav.component";
import { PlantillaModule } from "./plantillas/plantilla.module";
import { Routes, RouterModule } from '@angular/router';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
  MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatCheckboxModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from "./general/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    CostosNavComponent,
    PlInicio
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    PlantillaModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatCheckboxModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

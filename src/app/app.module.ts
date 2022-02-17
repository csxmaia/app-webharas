import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AuthGuard} from "./shared/guards/auth-guard";
import { HomeComponent } from './pages/home/home.component';
import { HorseCardComponent } from './components/horse-card/horse-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CavaloComponent } from './pages/cavalo/cavalo.component';
import { PainelAdministrativoComponent } from './pages/painel-administrativo/painel-administrativo.component';
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './pages/login/login.component';
import {FormsModule} from "@angular/forms";
import { SignupComponent } from './pages/signup/signup.component';
import { CavalosCadastradosComponent } from './pages/painel-administrativo/components/cavalos-cadastrados/cavalos-cadastrados.component';
import { CadastrarCavaloComponent } from './pages/painel-administrativo/components/cadastrar-cavalo/cadastrar-cavalo.component';
import {httpInterceptorProviders} from "./shared/interceptors/httpInterceptorProvider";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HorseCardComponent,
    NavbarComponent,
    CavaloComponent,
    PainelAdministrativoComponent,
    LoginComponent,
    SignupComponent,
    CavalosCadastradosComponent,
    CadastrarCavaloComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        MatIconModule
    ],
  providers: [
    AuthGuard,
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

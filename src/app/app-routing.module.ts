import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {CavaloComponent} from "./pages/cavalo/cavalo.component";
import {PainelAdministrativoComponent} from "./pages/painel-administrativo/painel-administrativo.component";
import {LoginComponent} from "./pages/login/login.component";
import {SignupComponent} from "./pages/signup/signup.component";
import {AuthGuard} from "./shared/guards/auth-guard";

const routes: Routes = [
  { path: 'registro', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cavalo/:id', component: CavaloComponent },
  { path: 'painel-administrativo', component: PainelAdministrativoComponent, canActivate: [AuthGuard] },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

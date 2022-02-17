import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth-service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  nome: string = '';
  username: string = '';
  password: string = '';
  email: string = '';
  cpf: string = '';
  telefone: string = '';
  whatsapp: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  handleSignup() {
    let user = {
      nome: this.nome,
      username: this.username,
      password: this.password,
      email: this.email,
      cpf: this.cpf,
      telefone: this.telefone,
      whatsapp: this.whatsapp
    };
    this.authService.signUp(user).subscribe((response: any) => {

    })
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel-administrativo',
  templateUrl: './painel-administrativo.component.html',
  styleUrls: ['./painel-administrativo.component.scss']
})
export class PainelAdministrativoComponent implements OnInit {

  componentWindow: string = 'listar';

  constructor() { }

  ngOnInit(): void {
  }

  handleNavigation(window: string) {
    this.componentWindow = window
  }
}

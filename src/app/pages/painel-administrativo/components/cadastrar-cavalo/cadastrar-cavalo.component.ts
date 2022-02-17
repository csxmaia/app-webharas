import { Component, OnInit } from '@angular/core';
import {GeneroService} from "../../../../services/genero.service";
import {HabilidadeService} from "../../../../services/habilidade.service";
import {CidadeService} from "../../../../services/cidade.service";
import {RacaService} from "../../../../services/raca.service";
import {PelagemService} from "../../../../services/pelagem.service";
import {CavaloService} from "../../../../services/cavalo.service";

@Component({
  selector: 'app-cadastrar-cavalo',
  templateUrl: './cadastrar-cavalo.component.html',
  styleUrls: ['./cadastrar-cavalo.component.scss']
})
export class CadastrarCavaloComponent implements OnInit {
  compareFn = this._compareFn.bind(this);

  nome: string = '';
  preco: string = '';
  genero?: string = undefined;
  habilidade?: string = undefined;
  dataNascimento: string = '';
  descricao: string = '';
  cidade?: string = undefined;
  raca?: string = undefined;
  pelagem?: string = undefined;
  imagens: any[] = [''];

  generoList: any[] = [];
  habilidadeList: any[] = [];
  cidadeList: any[] = [];
  racaList: any[] = [];
  pelagemList: any[] = [];

  constructor(
    private generoService: GeneroService,
    private habilidadeService: HabilidadeService,
    private cidadeService: CidadeService,
    private racaService: RacaService,
    private pelagemService: PelagemService,
    private cavaloService: CavaloService,
  ) { }

  ngOnInit(): void {
    this.loadPageData()
  }

  async loadPageData() {
    this.generoService.getAll().subscribe((response: any) => {
      this.generoList = response;
    })
    this.habilidadeService.getAll().subscribe((response: any) => {
      this.habilidadeList = response;
    })
    this.cidadeService.getAll().subscribe((response: any) => {
      this.cidadeList = response;
    })
    this.racaService.getAll().subscribe((response: any) => {
      this.racaList = response;
    })
    this.pelagemService.getAll().subscribe((response: any) => {
      this.pelagemList = response;
    })
  }

  _compareFn(a: any, b: any) {
    if(a !== undefined && b !== undefined) {
      return a.id === b.id;
    }
    return false;
  }

  handleSubmit() {
    let imagens = []
    for(let i = 0; i < this.imagens.length; i++) {
      imagens.push({
        url: this.imagens[i]
      })
    }

    let cavalo = {
      nome: this.nome,
      preco: this.preco,
      genero: this.genero,
      habilidade: this.habilidade,
      dataNascimento: this.dataNascimento,
      descricao: this.descricao,
      cidade: this.cidade,
      raca: this.raca,
      pelagem: this.pelagem,
      imagens: imagens
    }

    this.cavaloService.save(cavalo).subscribe((response: any) => {
      if(response.id !== undefined && response.id !== null) {
        this.nome = ''
        this.preco = ''
        this.genero = undefined
        this.habilidade = undefined
        this.dataNascimento = ''
        this.descricao = ''
        this.cidade = undefined
        this.raca = undefined
        this.pelagem = undefined
        this.imagens = ['']
      }
    })
  }

  handleChangeImagem(index: any, event: any) {
    this.imagens[index] = event.target.value;
  }

  addImage() {
    this.imagens.push('')
  }
}

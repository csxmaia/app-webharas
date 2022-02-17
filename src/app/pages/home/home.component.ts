import { Component, OnInit } from '@angular/core';
import {CavaloService} from "../../services/cavalo.service";
import {CidadeService} from "../../services/cidade.service";
import {GeneroService} from "../../services/genero.service";
import {RacaService} from "../../services/raca.service";
import {PelagemService} from "../../services/pelagem.service";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cavalos: any[] = []
  cidades: any[] = []
  generos: any[] = []
  racas: any[] = []
  pelagens: any[] = []

  filterOptions: any = []

  constructor(
    private cavaloService: CavaloService,
    private cidadeService: CidadeService,
    private generoService: GeneroService,
    private racaService: RacaService,
    private pelagemService: PelagemService,
  ) { }

  ngOnInit(): void {
    this.cavaloService.getAll().subscribe((response: any) => {
      this.cavalos = response;
    })
    this.cidadeService.getAll().subscribe((response: any) => {
      this.cidades = response;
    })
    this.generoService.getAll().subscribe((response: any) => {
      this.generos = response;
    })
    this.racaService.getAll().subscribe((response: any) => {
      this.racas = response;
    })
    this.pelagemService.getAll().subscribe((response: any) => {
      this.pelagens = response;
    })
  }

  handleFiltrarCavalos() {
    let httpParams = new HttpParams({fromObject: this.filterOptions})
    this.cavaloService.getAll(httpParams).subscribe((response: any) => {
      this.cavalos = response;
    })
  }

  handleSelectChanges(select: string, event: any) {
    if(event.value == "undefined") {
      let {[select]: undefined, ...rest} = this.filterOptions
      this.filterOptions = rest
    } else {
      this.filterOptions = {
        ...this.filterOptions,
        [select]: event.value
      }
    }
  }
}
  // cavalos: any[] = [
  //   {
  //     id: 1,
  //     name:"Nome do cavalo",
  //     price:"R$ 13.000",
  //     picture:"assets/images/cavalo.png",
  //     location:"Paranavaí - PR"
  //   },
  //   {
  //     id: 2,
  //     name:"Nome do cavalo2",
  //     price:"R$ 14.000",
  //     picture:"assets/images/cavalo.png",
  //     location:"Maringá - PR"
  //   },
  //   {
  //     id: 3,
  //     name:"Nome do cavalo2",
  //     price:"R$ 14.000",
  //     picture:"assets/images/cavalo.png",
  //     location:"Maringá - PR"
  //   },
  //   {
  //     id: 4,
  //     name:"Nome do cavalo2",
  //     price:"R$ 14.000",
  //     picture:"assets/images/cavalo.png",
  //     location:"Maringá - PR"
  //   },
  //   {
  //     id: 5,
  //     name:"Nome do cavalo2",
  //     price:"R$ 14.000",
  //     picture:"assets/images/cavalo.png",
  //     location:"Maringá - PR"
  //   },
  //   {
  //     id: 6,
  //     name:"Nome do cavalo2",
  //     price:"R$ 14.000",
  //     picture:"assets/images/cavalo.png",
  //     location:"Maringá - PR"
  //   },
  //   {
  //     id: 7,
  //     name:"Nome do cavalo2",
  //     price:"R$ 14.000",
  //     picture:"assets/images/cavalo.png",
  //     location:"Maringá - PR"
  //   },
  //
  // ]

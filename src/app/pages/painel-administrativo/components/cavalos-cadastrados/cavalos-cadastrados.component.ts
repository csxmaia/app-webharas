import { Component, OnInit } from '@angular/core';
import {CavaloService} from "../../../../services/cavalo.service";

@Component({
  selector: 'app-cavalos-cadastrados',
  templateUrl: './cavalos-cadastrados.component.html',
  styleUrls: ['./cavalos-cadastrados.component.scss']
})
export class CavalosCadastradosComponent implements OnInit {

  cavalos: any = []
  loading: boolean = true;

  constructor(private cavaloService: CavaloService) { }

  ngOnInit(): void {
    this.cavaloService.getByUser().subscribe((response: any) => {
      this.cavalos = response
      this.loading = false
    })
  }

}

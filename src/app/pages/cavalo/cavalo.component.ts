import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CavaloService} from "../../services/cavalo.service";

@Component({
  selector: 'app-cavalo',
  templateUrl: './cavalo.component.html',
  styleUrls: ['./cavalo.component.scss']
})
export class CavaloComponent implements OnInit {

  cavalo: any = {}
  cavaloId: string = '';

  constructor(private route: ActivatedRoute, private cavaloService: CavaloService) { }

  ngOnInit(): void {
    this.cavaloId = this.route.snapshot.paramMap.get('id')!;
    if(this.cavaloId !== '') {
      this.cavaloService.getById(parseInt(this.cavaloId)).subscribe((response: any) => {
        this.cavalo = response
        console.log(response)
      })
    }
  }

  handleContato(number: number) {
    window.open(`https://api.WhatsApp.com/send?phone=${number}`, '_blank');
  }
}

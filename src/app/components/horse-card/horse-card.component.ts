import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-horse-card',
  templateUrl: './horse-card.component.html',
  styleUrls: ['./horse-card.component.scss']
})
export class HorseCardComponent{
  @Input() id?: number;
  @Input() picture: string = '';
  @Input() name: string = '';
  @Input() price: string = '';
  @Input() city: any = '';

  constructor(private router: Router) {}

  handleClickCard() {
    this.router.navigate([`/cavalo/${this.id}`])
  }
}

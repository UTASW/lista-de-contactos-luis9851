import { Component, OnInit } from '@angular/core';
import {MiservicioService} from '../../services/miservicio.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  constructor(public miservice:MiservicioService) { }

  ngOnInit() {
    this.miservice.arrPersonas;
  }

}

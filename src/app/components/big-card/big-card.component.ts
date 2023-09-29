import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input()
  photoCover: string = "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png";
  @Input()
  cardTitle: string = "";
  @Input()
  cardDescription: string = "";


  constructor() { }

  ngOnInit(): void {
  }

}

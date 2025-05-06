import { Component, Input, OnInit } from '@angular/core';
import { Ifairs } from 'src/app/shared/models/ifairs';

@Component({
  selector: 'app-fair-cards',
  templateUrl: './fair-cards.component.html',
  styleUrls: ['./fair-cards.component.scss'],
})
export class FairCardsComponent implements OnInit {
  @Input() fairObj!: Ifairs;

  constructor() {}

  ngOnInit(): void {}
}

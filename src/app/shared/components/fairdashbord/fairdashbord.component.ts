import { Component, OnInit } from '@angular/core';
import { Ifairs } from '../../models/ifairs';
import { FairsService } from '../../service/fairs.service';

@Component({
  selector: 'app-fairdashbord',
  templateUrl: './fairdashbord.component.html',
  styleUrls: ['./fairdashbord.component.scss'],
})
export class FairdashbordComponent implements OnInit {
  fairsarr!: Array<Ifairs>;

  constructor(private _fairservices: FairsService) {}

  ngOnInit(): void {
    this._fairservices.fetchAllfairsdata().subscribe((res: Array<Ifairs>) => {
      this.fairsarr = res;
    });
  }
}

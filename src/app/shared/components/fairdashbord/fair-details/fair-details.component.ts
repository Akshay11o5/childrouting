import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ifairs } from 'src/app/shared/models/ifairs';
import { FairsService } from 'src/app/shared/service/fairs.service';

@Component({
  selector: 'app-fair-details',
  templateUrl: './fair-details.component.html',
  styleUrls: ['./fair-details.component.scss'],
})
export class FairDetailsComponent implements OnInit {
  fairid!: string;
  fairobj!: Ifairs;
  constructor(
    private _activatedroute: ActivatedRoute,
    private _fairservice: FairsService
  ) {}

  ngOnInit(): void {
    this._activatedroute.params.subscribe((res) => {
      this.fairid = res['fairId'];

      if (this.fairid) {
        this._fairservice.fetchobjectfid(this.fairid).subscribe((res) => {
          this.fairobj = res;
        });
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-remover',
  templateUrl: './remover.component.html',
  styleUrls: ['./remover.component.scss'],
})
export class RemoverComponent implements OnInit {
  constructor(private _matref: MatDialogRef<RemoverComponent>) {}

  ngOnInit(): void {}

  onconfirm(flag: boolean) {
    this._matref.close(flag);
  }
}

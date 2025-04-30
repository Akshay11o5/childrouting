import { Component, Inject, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { config } from 'rxjs';

@Component({
  selector: 'app-remover',
  templateUrl: './remover.component.html',
  styleUrls: ['./remover.component.scss'],
})
export class RemoverComponent implements OnInit {
  matdata!: string;
  constructor(
    private _matref: MatDialogRef<RemoverComponent>,
    @Inject(MAT_DIALOG_DATA) config: string
  ) {
    this.matdata = config;
  }

  ngOnInit(): void {}

  onconfirm(flag: boolean) {
    this._matref.close(flag);
  }
}

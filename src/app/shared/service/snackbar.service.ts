import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class MatsnakbarService {
  constructor(private _matsnackbar: MatSnackBar) {}

  opensnackbar(msg: string) {
    this._matsnackbar.open(msg, 'close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}

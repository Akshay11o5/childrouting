import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { MatsnakbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productArr: Array<Iproduct> = [
    {
      pName: 'samsung M31',
      PId: '123',
      pStatus: 'inprogress',
      canReturn: 1,
    },
    {
      pName: 'Iphone',
      PId: '124',
      pStatus: 'delivered',
      canReturn: 0,
    },
    {
      pName: 'one plus',
      PId: '125',
      pStatus: 'dispatch',
      canReturn: 1,
    },
    {
      pName: 'vivo',
      PId: '126',
      pStatus: 'inprogress',
      canReturn: 0,
    },
  ];

  constructor(private _snackbar: MatsnakbarService) {}

  fetchAlldata() {
    return this.productArr;
  }

  newObjectfind(prodId: string) {
    return this.productArr.find((f) => {
      return f.PId == prodId;
    })!;
  }

  removeprodeut(prod: Iproduct) {
    let findindex = this.productArr.findIndex((p) => p.PId == prod.PId);

    this.productArr.splice(findindex, 1);

    this._snackbar.opensnackbar(`${prod.pName} is removed successfully!!!`);
  }

  addnewprod(prod: Iproduct) {
    this.productArr.push(prod);

    this._snackbar.opensnackbar(`${prod.pName} is added successfully!!!`);
  }

  addupdatedObj(prod: Iproduct) {
    let findindex = this.productArr.findIndex((p) => p.PId == prod.PId);

    this.productArr[findindex] = prod;

    this._snackbar.opensnackbar(`${prod.pName} is updated successfully!!!`);
  }
}

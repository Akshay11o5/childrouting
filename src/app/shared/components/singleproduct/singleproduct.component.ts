import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RemoverComponent } from '../remover/remover.component';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.scss'],
})
export class SingleproductComponent implements OnInit {
  productArr!: Iproduct;
  PId!: string;
  pobject!: Iproduct;

  constructor(
    private _productservice: ProductService,
    private _route: Router,
    private _activateroute: ActivatedRoute,
    private _matdilog: MatDialog
  ) {}

  ngOnInit(): void {
    this._activateroute.params.subscribe((res) => {
      this.PId = res['PId'];
      console.log(this.PId);

      if (this.PId) {
        this.pobject = this._productservice.newObjectfind(this.PId);
      }

      // console.log(this.pobject);
    });
  }

  removeproduct() {
    let res = this._matdilog.open(RemoverComponent);

    res.afterClosed().subscribe((res) => {
      if (res) {
        this._productservice.removeprodeut(this.pobject);
        this._route.navigate(['products']);
      }
    });
  }
}

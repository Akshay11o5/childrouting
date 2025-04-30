import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UuidService } from '../../service/uuid.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Iproduct } from '../../models/iproduct';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatsnakbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.scss'],
})
export class ProductformComponent implements OnInit {
  Isineditmode: boolean = false;
  prodForm!: FormGroup;

  prodid!: string;

  pobject!: Iproduct;

  constructor(
    private _prodservice: ProductService,
    private _route: Router,
    private _activatroute: ActivatedRoute,
    private _uuid: UuidService
  ) {}

  ngOnInit(): void {
    this.createform();

    this._activatroute.params.subscribe((res) => {
      this.prodid = res['PId'];

      if (this.prodid) {
        this.Isineditmode = true;

        this.pobject = this._prodservice.newObjectfind(this.prodid);

        this.prodForm.patchValue(this.pobject);
      }
    });
  }

  createform() {
    this.prodForm = new FormGroup({
      pName: new FormControl('', [Validators.required]),
      pStatus: new FormControl('', [Validators.required]),
      canReturn: new FormControl('', [Validators.required]),
    });
  }

  onsubmit() {
    if (this.prodForm.valid) {
      if (this.Isineditmode) {
        let updateObj = {
          ...this.prodForm.value,
          PId: this.prodid,
        };
        this._prodservice.addupdatedObj(updateObj);
      } else {
        let AddnewObj = {
          ...this.prodForm.value,
          PId: this._uuid.generateUuid(),
        };

        this._prodservice.addnewprod(AddnewObj);
      }
    }

    this._route.navigate(['products']);
  }
}

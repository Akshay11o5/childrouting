import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productArr!: Array<Iproduct>;

  constructor(private _productservice: ProductService) {}

  ngOnInit(): void {
    this.productArr = this._productservice.fetchAlldata();
  }
}

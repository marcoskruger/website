import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-gallery-product',
  templateUrl: './gallery-product.component.html',
  styleUrls: ['./gallery-product.component.css']
})
export class GalleryProductComponent implements OnInit {

  constructor() { }
  producties: Array<Product> = new Array<Product>();

  constructor(private db: AngularFireDatabase) {
    const productList = db.list('product').valueChanges();

    productList.subscribe(data => {
        data.forEach((product: Product) => {
          if (product.inactive === false || product.inactive === undefined) {
              this.producties.push(product);
          }
        });
    });
  }

  ngOnInit() {
  }

}

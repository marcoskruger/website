import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Product } from './../models/product';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-gallery-product',
  templateUrl: './gallery-product.component.html',
  styleUrls: ['./gallery-product.component.css']
})
export class GalleryProductComponent implements OnInit {

  public producties: Array<Product> = new Array<Product>();
  public loading = false;

  constructor(private db: AngularFireDatabase) {
    const productList = db.list('product').valueChanges();
    this.loading = true;

    productList.subscribe(data => {
        data.forEach((product: Product) => {
          if (product.inactive === false || product.inactive === undefined) {
              this.producties.push(product);
              this.loading  = false;
          }
        });
    });
  }

  isActive(product: Product) {
    return product === this.producties[0];
  }

  teste() {
    alert('1');
  }
  ngOnInit() {
  }

}

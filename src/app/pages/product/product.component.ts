import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
    id!: number;
    product!: Product;

    constructor(private storeService: StoreService, private route: ActivatedRoute, private cartService: CartService) {}

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.id = +params['id'];
        });

        this.storeService.getProduct(this.id)
        .subscribe((_product) => {
            this.product = _product;
        });
    }

    onAddToCart(product: Product): void {
        this.cartService.addToCart({
            product: product.image,
            name: product.title,
            price: product.price,
            quantity: 1,
            id: product.id
        })
    }
}

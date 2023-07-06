import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { StoreService } from 'src/app/services/store.service';

const ROWS_HEIGHT: {[id: number]: number} = {
    1: 400,
    3: 335,
    4: 350
};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
    cols = 3;
    rowHeight = ROWS_HEIGHT[this.cols];
    category!: string;
    products!: Product[]
    sort = 'desc';
    count = 5;
    productsSubscription!: Subscription;

    constructor (private cartService: CartService, private storeService: StoreService) {}

    ngOnInit(): void {
        this.getProducts();
    }

    getProducts(): void {
        this.productsSubscription = this.storeService.getAllProducts(this.count, this.sort, this.category)
        .subscribe((_products) => {
            this.products = _products;
            console.log(this.count, this.sort, this.category);
        });
    }

    onColumnsCountChange(columnNum: number): void {
        this.cols = columnNum;
        this.rowHeight = ROWS_HEIGHT[this.cols];
    }

    onItemsCountChange(newCount: number): void {
        this.count = newCount;
        this.getProducts();
    }

    onSortChange(newSort: string): void {
        this.sort = newSort;
        this.getProducts();
    }

    onShowCategory(newCategory: string): void {
        this.category = newCategory;
        this.getProducts();
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

    ngOnDestroy(): void {
        if (this.productsSubscription) {
            this.productsSubscription.unsubscribe();
        }
    }
}

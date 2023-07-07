import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Cart = { items: [] };

  dataSource: CartItem[] = [];

  displayedColumns: string[] = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ];

  constructor(private cartService: CartService, private http: HttpClient) {}

    ngOnInit(): void {
        this.cartService.cart.subscribe((_cart: Cart) => {
            this.cart = _cart;
            this.dataSource = _cart.items;
        })
    }

    getTotal(items: CartItem[]): number {
        return this.cartService.getTotal(items);
    }

    onClearCart(): void {
        this.cartService.clearCart();
    }

    onRemoveFromCart(item: CartItem): void {
        this.cartService.removeFromCart(item);
    }

    onAddQuantity(item: CartItem): void {
        this.cartService.addToCart(item);
    }

    onRemoveQuantity(item: CartItem): void {
        this.cartService.removeQuantity(item);
    }

    onCheckout(): void {
        this.http.post('http://localhost:4242/checkout', {
            items: this.cart.items
        }).subscribe(async (res: any) => {
            let stripe = await loadStripe('your public token');
            stripe?.redirectToCheckout({
                sessionId: res.id
            });
        });
    }
}

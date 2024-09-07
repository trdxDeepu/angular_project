// src/app/cart.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TProduct } from 'src/types/Types';


@Injectable({
  providedIn: 'root',
})

export class CartService {
  private cartItems: TProduct[] = [];
  private cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable();

  constructor() {}

  // Add item to cart
  addToCart(product: TProduct): void {
    this.cartItems.push(product);
    this.updateCartCount();
  }

  // Remove item from cart by product ID
  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
    this.updateCartCount();
  }

  // Check if item is in cart
  isInCart(product: TProduct): boolean {
    return this.cartItems.some(item => item.id === product.id);
  }

  // Update cart count
  private updateCartCount(): void {
    this.cartCountSubject.next(this.cartItems.length);
  }
}

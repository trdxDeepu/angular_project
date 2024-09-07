import { CartService } from './../cart.service';
import { TProduct } from 'src/types/Types';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {

  isButtonDisabled: boolean = false;

  @Input() product!: TProduct;
  @Output() deleteProduct: EventEmitter<TProduct> = new EventEmitter();
  @Output() addItem: EventEmitter<TProduct> = new EventEmitter();

  constructor(private CartService: CartService) {}

  deleteItem(product: TProduct) {
    this.deleteProduct.emit(product);
  }

  onAddToCart() {
    if (!this.CartService.isInCart(this.product)) {
      this.addItem.emit(this.product);
    }
    // Update button state after adding item
    this.isButtonDisabled = this.CartService.isInCart(this.product);
  }
}

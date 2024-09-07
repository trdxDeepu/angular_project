import { Component } from '@angular/core';
import { PRODUCTDETAILS } from 'src/data';
import { TProduct, TProductsDetails } from 'src/types/Types';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent {
  products: TProductsDetails = PRODUCTDETAILS;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    // Initial setup if needed
  }

  toDeleteProduct(product: TProduct) {
    this.products = this.products.filter(item => item.id !== product.id);
    this.cartService.removeFromCart(product.id); // Remove from cart as well
  }

  onAddItemToCart(product: TProduct) {
    if (!this.cartService.isInCart(product)) {
      this.cartService.addToCart(product);
    }
  }


 
}

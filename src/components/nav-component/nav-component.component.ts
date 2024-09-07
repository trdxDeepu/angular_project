
import { NAVLINKS } from '../../data';
import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.css'],

})
export class NavComponentComponent {
  navItem = NAVLINKS;
  cartCount: number = 0;


  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });
  }
}

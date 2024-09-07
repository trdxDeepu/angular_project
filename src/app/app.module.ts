import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CartService } from 'src/components/cart.service';
import { NavComponentComponent } from 'src/components/nav-component/nav-component.component';
import { ProductDetailsComponent } from 'src/components/product-details/product-details.component';
import { ProductCardComponent } from 'src/components/product-card/product-card.component';
import { ContactComponentComponent } from 'src/components/contact-component/contact-component.component';
import { AboutComponentComponent } from 'src/components/about-component/about-component.component';
import { BlogComponentComponent } from 'src/components/blog-component/blog-component.component';
import { HomeComponentComponent } from 'src/components/home-component/home-component.component';
import { CarrerComponentComponent } from 'src/components/carrer-component/carrer-component.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    ProductDetailsComponent,
    ProductCardComponent,
    ContactComponentComponent,
    AboutComponentComponent,
    BlogComponentComponent,
    HomeComponentComponent,
    CarrerComponentComponent
  ],
  imports: [BrowserModule, AppRoutingModule,FormsModule,ReactiveFormsModule],
  providers: [CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}

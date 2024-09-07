// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponentComponent } from 'src/components/about-component/about-component.component';
import { LoginComponent } from 'src/components/auth/login/login.component';
import { SignupComponent } from 'src/components/auth/signup/signup.component';
import { BlogComponentComponent } from 'src/components/blog-component/blog-component.component';
import { CarrerComponentComponent } from 'src/components/carrer-component/carrer-component.component';

import { ContactComponentComponent } from 'src/components/contact-component/contact-component.component';
import { HomeComponentComponent } from 'src/components/home-component/home-component.component';


const routes: Routes = [
  { path: '', component: HomeComponentComponent }, 
  { path: 'about', component: AboutComponentComponent },  
  { path: 'blog', component: BlogComponentComponent }, 
  { path: 'tdf-form', component: ContactComponentComponent }, 
  { path: 'reactive-form', component: CarrerComponentComponent }, 
  { path: 'login', component:  LoginComponent }, 
  { path: 'sign-up', component: SignupComponent }, 
  { path: '**', redirectTo: '', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

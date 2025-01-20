import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkActive,RouterLink,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) {}

  // الدالة للتحقق إذا كان المسار هو '/admin'
  isAdminRoute(): boolean {
    // return this.router.url.includes('admin','cart-Admin');
    return this.router.url.includes('admin') || this.router.url.includes('cart-Admin')|| this.router.url.includes('salse-Admin');
   
  }

  // iscartAdminRoute(): boolean {
  //   return this.router.url.includes('/cart-Admin');
  // }

  

}

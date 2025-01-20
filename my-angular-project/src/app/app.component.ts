import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/component/header/header.component';
import { CartComponent } from './carts/component/cart/cart.component';
import { AllproductComponent } from './products/allproduct/allproduct.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { CartAdminComponent } from './Admin/component/carts/cart-admin/cart-admin.component';
import { SalseComponent } from './Admin/component/salse/salse.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,CartComponent,AllproductComponent,ProductDetailsComponent,AdminComponent,CartAdminComponent,SalseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-project';
}

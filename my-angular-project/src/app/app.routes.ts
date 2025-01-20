import { Routes } from '@angular/router';
import { AllproductComponent } from './products/allproduct/allproduct.component';
import { CartComponent } from './carts/component/cart/cart.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { CartAdminComponent } from './Admin/component/carts/cart-admin/cart-admin.component';
import { SalseComponent } from './Admin/component/salse/salse.component';

export const routes: Routes = [
    {path: '', redirectTo: 'product', pathMatch: 'full'},
    {path:'product',component:AllproductComponent},
    {path:'cart',component:CartComponent},
    {path:'details/:id',component:ProductDetailsComponent},
    {path: 'admin',component:AdminComponent},
    {path: 'cart-Admin',component:CartAdminComponent},
    {path: 'salse-Admin',component:SalseComponent}

];

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllproductComponent } from './allproduct/allproduct.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    AllproductComponent,
  

  ],
  exports: [
  
  ]
})
export class ProductsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './component/select/select/select.component';
import { HeaderComponent } from './component/header/header.component';



@NgModule({
  declarations: [
    SelectComponent,
    HeaderComponent

    
  ],
  imports: [
    CommonModule,
    SelectComponent
  ],
  exports: [
    CommonModule,
    
  ]
})

export class SharedModule { }

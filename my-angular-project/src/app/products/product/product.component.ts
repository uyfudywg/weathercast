import { CommonModule } from '@angular/common';
import { Component ,EventEmitter,Input, OnInit, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ CommonModule,FormsModule,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  @Input() data: any = {};
  @Output()item = new EventEmitter()
  addButton:boolean=false
  amount:number=0
  constructor() { }
  ngOnInit(): void {
    
  }
  add(){
    this.item.emit({item:this.data,quantity:this.amount})
  }

  

 
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../../../carts/service/cart.service';

@Component({
  selector: 'app-salse',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './salse.component.html',
  styleUrl: './salse.component.css'
})
export class SalseComponent {
  cartprodect:any[]=[]
  total:number = 0;
  constructor(private service:CartService) { }
  ngOnInit(): void {
    this.getcartproduct()
  }
  
  getcartproduct(){
    if("cart" in localStorage){
      this.cartprodect=JSON.parse(localStorage.getItem("cart")!)
    }
    console.log(this.cartprodect)
    console.log('cart')
    this.getCartTotal() 
  }

  getCartTotal() {
    this.total = 0
    for(let x in this.cartprodect) {
      this.total += this.cartprodect[x].item.price * this.cartprodect[x].quantity;
    }
  }

}

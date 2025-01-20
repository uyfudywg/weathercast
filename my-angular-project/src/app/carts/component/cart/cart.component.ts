import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartprodect:any[]=[]
  total:number = 0;
  success:boolean = false
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

  addAmount(index:number) {
    this.cartprodect[index].quantity++
    this.getCartTotal()
    localStorage.setItem("cart" , JSON.stringify(this.cartprodect))
  }
  minsAmount(index:number) {
    this.cartprodect[index].quantity--
    this.getCartTotal()
    localStorage.setItem("cart" , JSON.stringify(this.cartprodect))
  }

  getCartTotal() {
    this.total = 0
    for(let x in this.cartprodect) {
      this.total += this.cartprodect[x].item.price * this.cartprodect[x].quantity;
    }
  }
  detectChange() {
    this.getCartTotal()
    localStorage.setItem("cart" , JSON.stringify(this.cartprodect))
  }

  deleteProduct(index:number) {
    this.cartprodect.splice(index , 1)
    this.getCartTotal()
    localStorage.setItem("cart" , JSON.stringify(this.cartprodect))
  }

  clearCart() {
    this.cartprodect = []
    this.getCartTotal()
    localStorage.setItem("cart" , JSON.stringify(this.cartprodect))
  }

  addCart() {
    let products = this.cartprodect.map(item => {
     return {productId:item.item.id , quantity:item.quantity}
    })
 
     let Model = {
       userId:5,
       date: new Date(),
       products:products
     }
     this.service.createNewCart(Model).subscribe(res => {
       console.log(res)
       this.success = true
     })
     console.log(Model)
    }

}

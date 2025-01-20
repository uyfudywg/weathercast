import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CartService } from '../../../../carts/service/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-admin',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './cart-admin.component.html',
  styleUrl: './cart-admin.component.css'
})
export class CartAdminComponent {
  carts: any[] = [];
  total: number = 0;
  products: any[] = [];

  constructor(private service: CartService, private build: FormBuilder) { }

  form!: FormGroup;
  details: any;

  ngOnInit(): void {
    this.getAllCarts();
    this.form = this.build.group({
      start: [''],
      end: ['']
    });
  }

  getAllCarts() {
    this.service.getAllCarts().subscribe((res: any) => {
      this.carts = res;
    });
  }

  applyFilter() {
    let date = this.form.value
    this.service.getAllCarts(date).subscribe((res:any) => {
      this.carts = res
     console.log(this.carts)
     console.log(this.form.value)
    })
  }

  deleteCart(id:number) {
    this.service.deleteCart(id).subscribe(res => {
      this.getAllCarts()
      alert("Cart deleted Success")
    })
  }

  view(index:number) {
    this.products = []
    this.details = this.carts[index];
    for(let x in this.details.products) {
      this.service.getAllCarts(this.details.products[x].productId).subscribe(res => {
        this.products.push({item: res , quantity:this.details.products[x].quantity})
      })
    }
    console.log(this.details)
    console.log(this.products)
    console.log("wwoowo")
  } 

}

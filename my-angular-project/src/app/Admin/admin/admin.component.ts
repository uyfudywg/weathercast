import { Component } from '@angular/core';
import { ProductService } from '../../products/service/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  products:any[]=[]
  category:any[]=[]
  cartprodect:any[]=[]
  constructor(private service:ProductService) { }

  ngOnInit(): void {
    this.getproducts()
    this.getcategory()
  }
  getproducts(){
    this.service.getdata().subscribe(res =>{
      console.log(res)
      this.products=res
    })
  };

  getcategory(){
   this.service.getcategory().subscribe((data)=>{
     console.log(data);
     console.log('weww')
     this.category=data;
    })
  };

  filterCategory(event:any){
    let category=event.target.value;
    if(category=='All'){
      this.service.getdata().subscribe((data)=>{
        console.log(data);
        this.products=data;
  
       });
    }else{
      this.service.getdata().subscribe((data)=>{
        console.log(data);
        this.products=data.filter((product:any)=>{
          return product.category==category;
        });
  
       });
    }

 }

 addtocart(event:any){
  console.log(event)
  if("cart" in localStorage){
    this.cartprodect=JSON.parse(localStorage.getItem("cart")!)
    let exist = this.cartprodect.find(item => item.item.id == event.item.id)
    if(exist){
      alert("product is already in cart")
    }else{
      this.cartprodect.push(event)
    localStorage.setItem("cart",JSON.stringify(this.cartprodect))
    }
  }else{
    this.cartprodect.push(event)
    localStorage.setItem("cart",JSON.stringify(this.cartprodect))

  }
  
  
 }
  
}

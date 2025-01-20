import { Component,OnInit} from '@angular/core';
import { ProductService } from '../service/product.service';
import { CommonModule } from '@angular/common';
import { SelectComponent } from '../../shared/component/select/select/select.component';
import { ProductComponent } from '../product/product.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-allproduct',
  standalone: true,
  imports: [CommonModule,SelectComponent,ProductComponent,RouterLink],
  templateUrl: './allproduct.component.html',
  styleUrl: './allproduct.component.css'
})
export class AllproductComponent implements OnInit {
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

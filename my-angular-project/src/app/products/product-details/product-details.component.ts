import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  id:any
  data:any = {}
  constructor(private route:ActivatedRoute,private service:ProductService) { 
    this.id = this.route.snapshot.paramMap.get('id')
    console.log(this.id)
  }

  ngOnInit(): void {
    this.getproduct()
  }
  getproduct(){
    this.service.getproductById(this.id).subscribe((data)=>{
      console.log(data);
      this.data=data;
    })
  }

}

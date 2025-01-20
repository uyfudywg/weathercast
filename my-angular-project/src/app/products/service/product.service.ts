import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _HttpClien:HttpClient) { }
  getdata():Observable<any>{
    return this._HttpClien.get('https://fakestoreapi.com/products')
  };
  getcategory():Observable<any>{
    return this._HttpClien.get('https://fakestoreapi.com/products/categories')
  }
  getproductBycategory(id:string):Observable<any>{
    return this._HttpClien.get(`https://fakestoreapi.com/products/category/${id}`)
  }
  getproductById(id:any):Observable<any>{
    return this._HttpClien.get(`https://fakestoreapi.com/products/${id}`)
  }

}

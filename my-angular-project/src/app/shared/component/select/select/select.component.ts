// import { Component, input, } from '@angular/core';


// @Component({
//   selector: 'app-select',
//   standalone: true,
//   imports: [],
//   templateUrl: './select.component.html',
//   styleUrl: './select.component.css'
// })
// export class SelectComponent {
 
//  @input() data:any[]=[];
//  @input() title:string='';
 
  
//   constructor() { }

//   ngOnInit(): void {
//   }
//   detectchange(event:any){
    

//   }

// }
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input,Output } from '@angular/core'; // استخدام @Input بشكل صحيح

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'] // التصحيح هنا
})
export class SelectComponent {
  @Input() data: any[] = []; // يجب استخدام @Input بشكل صحيح
  @Input() title: string = ''; // كذلك هنا
  @Output() selectvale = new EventEmitter();
 
  constructor() { }

  ngOnInit(): void {
    // يمكنك إضافة بعض المنطق هنا إذا كنت بحاجة
  }

  detectchange(event: any) {
   this.selectvale.emit(event);
  }
}

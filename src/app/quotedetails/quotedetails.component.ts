import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import{Quote} from'../quote'


@Component({
  selector: 'app-quotedetails',
  templateUrl: './quotedetails.component.html',
  styleUrls: ['./quotedetails.component.css']
})
export class QuotedetailsComponent implements OnInit {
  @Input() quote:Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  // up(index){
  //   this.quotes[index].upv +=1;
  //   // console.log(1);
  // }
  // down(index){
  //   this.quotes[index].downv +=1;
  // }  
  constructor() { }
  
  ngOnInit(): void {
  }

}

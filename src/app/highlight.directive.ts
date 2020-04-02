import { Directive,ElementRef ,HostListener} from '@angular/core';
import { Quote } from '@angular/compiler';
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private elem:ElementRef){}
  
  
  quote: Quote
  

  @HostListener('mouseenter') onMouseEnter() {
    
    this.highlight('yellow');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.elem.nativeElement.style.backgroundColor = color;
  }

}
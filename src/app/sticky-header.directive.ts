import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appStickyHeader]'
})
export class StickyHeaderDirective {
  @Input('appStickyHeader') highlightColor:string;
  constructor(private el: ElementRef) {
//    el.nativeElement.style.backgroundColor = "blue"
   }

   @HostListener('mouseenter') onMouseEnter() {
      this.highlight(this.highlightColor || 'red')
   }

   @HostListener('mouseleave') onMouseLeave() {
      this.highlight('#673ab7');
   }

   private highlight(color:string){
     this.el.nativeElement.style.backgroundColor = color;
   }

}

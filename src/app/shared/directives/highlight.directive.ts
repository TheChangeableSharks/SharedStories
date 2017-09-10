import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective{

  constructor(private el:ElementRef) { }

  private color ='rgba(50, 119, 246, 0.1)';

  @HostListener('mouseenter') onmouseenter() {
    this.highlight(this.color);
  }

  @HostListener('mouseleave') onmouseleave() {
    this.highlight(null);
  }

  private highlight(color:string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}

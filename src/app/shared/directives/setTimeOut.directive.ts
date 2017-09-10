import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appSetTimeOut]'
})
export class SetTimeOutDirective {
  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }
  @Input() set appSetTimeOut(delay: number) {
    this.viewContainer.clear();
    setTimeout(() => {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }, delay);
  }
}

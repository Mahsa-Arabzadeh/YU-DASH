import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNum]',
})
export class NumDirective {
  constructor(private element: ElementRef<HTMLInputElement>) {}

  @HostListener('input', ['$event']) onChange() {
    let value = this.element.nativeElement;
    const elValue = this.element.nativeElement.value;
    const filterNumber = elValue.replace(/[^0-9]/g, '');

    if (filterNumber !== elValue) {
      value.value = filterNumber;
    }
  }
}

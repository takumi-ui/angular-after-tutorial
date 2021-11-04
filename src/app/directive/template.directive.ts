import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTemplate]'
})
export class TemplateDirective implements OnInit {

  @Input() public greet: string = '';

  @Input() public name: string = '';
 
  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    const elem = this.elementRef.nativeElement;
    elem.innerHTML = this.greet + ' ' + this.name + '.';
  }

}

import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  HostListener,
  Input
 } from '@angular/core';

@Directive({
  selector: '[appFirst]'
})
export class FirstDirective implements OnInit {
  private content: ElementRef;
  private renderer: Renderer2;
  @Input('appFirst') color: string;

  constructor(content: ElementRef, renderer: Renderer2) {
    this.content = content;
    this.renderer = renderer;
  }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.

    // this.content.nativeElement.style.background = 'green';
    this.renderer.setStyle(this.content.nativeElement, 'transition', 'all 0.5s');
  }

  @HostListener('mouseenter') mouseEnter(event: Event) {
    this.renderer.setStyle(this.content.nativeElement, 'background-color', this.color);
  }

  @HostListener('mouseleave') mouseLeave(event: Event) {
    this.renderer.removeStyle(this.content.nativeElement, 'background-color');
  }
}

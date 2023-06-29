import {AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2} from "@angular/core";

@Directive({
  selector:'[highLight]'
})
export class HighLightDirective implements AfterViewInit{

  @Input() color = '#ffff';
  constructor(private el:ElementRef, private renderer:Renderer2) {
  }
  ngAfterViewInit(): void {
    this.setBackgroundColor(this.color)
  }

  setBackgroundColor(color:string){
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.setBackgroundColor('#f8f9fa')
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.setBackgroundColor(this.color)
  }

  @HostListener('click')
  onClick(){
    this.color = 'lightgreen';
  }

}

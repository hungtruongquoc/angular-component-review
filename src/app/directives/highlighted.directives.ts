import {Directive, HostBinding, HostListener, Input} from "@angular/core";

@Directive({
  selector: "[highlighted]"
})
export class HighlightedDirectives {
  @Input('highlighted') isHighlighted: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.isHighlighted
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.isHighlighted = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHighlighted = false;
  }
}

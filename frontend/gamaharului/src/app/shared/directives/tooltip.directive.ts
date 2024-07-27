import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  Input,
  OnDestroy,
} from '@angular/core';

declare let bootstrap: any;

@Directive({
  selector: '[appTooltip]',
  standalone: true,
})
export class TooltipDirective implements AfterViewInit, OnDestroy {
  /** */
  @Input('appTooltip') title: string = '';

  /** */
  @Input() placement: 'top' | 'bottom' | 'left' | 'right' = 'bottom';

  /** */
  private tooltipInstance: any;

  /** */
  private el = inject(ElementRef);

  /** */
  ngAfterViewInit(): void {
    this.tooltipInstance = new bootstrap.Tooltip(this.el.nativeElement, {
      title: this.title,
      placement: this.placement,
    });
  }

  /** */
  ngOnDestroy(): void {
    if (this.tooltipInstance) {
      this.tooltipInstance.dispose();
    }
  }
}

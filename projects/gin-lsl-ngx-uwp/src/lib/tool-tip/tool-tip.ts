import { Overlay, OverlayRef, FlexibleConnectedPositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Directive, ElementRef, Input, OnDestroy, ViewContainerRef } from '@angular/core';
import { GuToolTipComponent } from './tool-tip.component';

@Directive({
  selector: '[GuToolTip]',
  exportAs: 'GuToolTip',
  host: {
    'class': 'Gu GuToolTip',
  }
})
export class GuToolTipDirective implements OnDestroy {

  @Input() GuContent: string;

  private _overlayRef: OverlayRef;
  private _toolTipComponent: GuToolTipComponent | null;
  private _portal: ComponentPortal<GuToolTipComponent>;

  private _cacheListeners = new Map<string, (event?) => void>();

  constructor(
    private _viewContainerRef: ViewContainerRef,
    private _overlay: Overlay,
    private _elementRef: ElementRef,
  ) {

    const element: HTMLElement = _elementRef.nativeElement;

    this._cacheListeners.set('mouseenter', (event: MouseEvent) => this.show(event));
    this._cacheListeners.set('mouseleave', () => this.hide());

    this._cacheListeners.forEach((_listener, _eventName) => element.addEventListener(_eventName, _listener));
  }

  ngOnDestroy() {

    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._toolTipComponent = null;
    }

    const element: HTMLElement = this._elementRef.nativeElement;
    this._cacheListeners.forEach((_listener, _eventName) => element.removeEventListener(_eventName, _listener));
  }

  show(event?: MouseEvent) {

    const overlayRef = this._createOverlay(event);

    if (overlayRef && overlayRef.hasAttached()) {
      overlayRef.detach();
    }
    this._toolTipComponent = null;

    this._portal = this._portal || new ComponentPortal(GuToolTipComponent, this._viewContainerRef);
    this._toolTipComponent = overlayRef.attach(this._portal).instance;
    this._toolTipComponent['content'] = this.GuContent;
    this._toolTipComponent.show();
  }

  hide() {

    if (this._toolTipComponent) {
      this._toolTipComponent.hide();
    }
  }

  toogle() {

    this._isToolTipVisible() ? this.hide() : this.show();
  }

  _isToolTipVisible(): boolean {

    return !!this._toolTipComponent && this._toolTipComponent.isVisible();
  }

  private _createOverlay(event?: MouseEvent): OverlayRef {

    const offsetX = event ? event.offsetX : -8;
    if (this._overlayRef) {
      const position = this._overlayRef.getConfig().positionStrategy as FlexibleConnectedPositionStrategy;
      position.withPositions([
        {
          originX: 'start', originY: 'top',
          overlayX: 'start', overlayY: 'bottom',
          offsetX: offsetX, offsetY: -4,
        },
        {
          originX: 'start', originY: 'bottom',
          overlayX: 'start', overlayY: 'top',
          offsetX: offsetX, offsetY: 4,
        }
      ]);
      return this._overlayRef;
    }

    const strategy = this._overlay.position()
      .flexibleConnectedTo(this._elementRef)
      // .withFlexibleDimensions(false)
      // .withLockedPosition(false)
      .withViewportMargin(0)
      .withPositions([
        {
          originX: 'start', originY: 'top',
          overlayX: 'start', overlayY: 'bottom',
          offsetX: offsetX, offsetY: -4,
        },
        {
          originX: 'start', originY: 'bottom',
          overlayX: 'start', overlayY: 'top',
          offsetX: offsetX, offsetY: 4,
        }
      ]);

    this._overlayRef = this._overlay.create({
      positionStrategy: strategy,
    });

    return this._overlayRef;
  }
}

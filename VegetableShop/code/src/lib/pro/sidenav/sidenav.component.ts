import {
    Component,
    ElementRef,
    HostListener,
    Inject,
    Input,
    OnDestroy,
    OnInit,
    PLATFORM_ID,
    Renderer2,
    ViewChild,
    ViewEncapsulation,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Output,
    EventEmitter,
} from '@angular/core';
import {isPlatformBrowser, DOCUMENT} from '@angular/common';
import {window} from './../../free/utils/facade/browser';
import {BooleanInput, coerceBooleanProperty} from '@angular/cdk/coercion';

@Component({
    selector: 'mdb-sidenav, mdb-side-nav',
    templateUrl: 'sidenav.component.html',
    styleUrls: ['./sidenav-module.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent implements OnDestroy, OnInit {
    public windowsWidth: number;
    public isShown: boolean;
    public slimSidenav = false;
    public isBrowser: any = false;

    private _sidenavTransform = 'translateX(-100%)';
    private _isInitialized = false;

    @Input() public class: string;

    @Input()
    get fixed(): boolean {
        return this._fixed;
    }

    set fixed(value: BooleanInput) {
        this._fixed = coerceBooleanProperty(value);
    }

    private _fixed = true;

    @Input() sidenavBreakpoint: any;

    @Input()
    get side() {
        return this._side;
    }

    set side(position: string) {
        this._side = position;

        if (!this._isInitialized) {
            return;
        }

        if (position === 'left') {
            this._sidenavTransform = 'translateX(-100%)';
            this.renderer.removeClass(this.sideNav.nativeElement, 'side-nav-right');
        } else {
            this._sidenavTransform = 'translateX(100%)';
            this.renderer.addClass(this.sideNav.nativeElement, 'side-nav-right');
        }
    }

    @Output() shown: EventEmitter<any> = new EventEmitter();
    @Output() hidden: EventEmitter<any> = new EventEmitter();

    private _side = 'left';
    @ViewChild('sidenav', {static: true}) public sideNav: ElementRef;
    @ViewChild('overlay', {static: true}) public overlay: any;

    constructor(
        @Inject(PLATFORM_ID) platformId: string,
        public el: ElementRef,
        public renderer: Renderer2,
        private _cdRef: ChangeDetectorRef,
        @Inject(DOCUMENT) private document: any
    ) {
        this.isBrowser = isPlatformBrowser(platformId);
    }

    ngOnInit() {
        this.renderer.addClass(this.sideNav.nativeElement, 'no-transition');

        if (this.sidenavBreakpoint && this.sidenavBreakpoint >= window.innerWidth) {
            this.hide();
        }

        if (this._side === 'left') {
            this._sidenavTransform = 'translateX(-100%)';
            this.renderer.removeClass(this.sideNav.nativeElement, 'side-nav-right');
        } else {
            this._sidenavTransform = 'translateX(100%)';
            this.renderer.addClass(this.sideNav.nativeElement, 'side-nav-right');
        }

        if (this.isBrowser) {
            const sidenav = this.el.nativeElement;
            const sidenavChildren = sidenav.children[0].children;
            const sidenavMask = this.el.nativeElement.querySelector('.sidenav-bg');

            let sidenavChildrenHeight = 0;

            if (sidenavMask) {
                for (let i = 0; i < sidenavChildren.length; i++) {
                    if (sidenavChildren[i].classList.contains('sidenav-bg')) {
                        continue;
                    } else {
                        for (let j = 0; j < sidenavChildren[i].children.length; j++) {
                            sidenavChildrenHeight += sidenavChildren[i].children[j].scrollHeight;
                        }
                    }
                }
                this.renderer.setStyle(sidenavMask, 'min-height', sidenavChildrenHeight + 16 + 'px');
            }

            this.windowsWidth = window.innerWidth;

            if (this.sidenavBreakpoint) {
                if (this.fixed) {
                    this.renderer.addClass(this.document.body, 'fixed-sn');

                    if (this.windowsWidth < +this.sidenavBreakpoint + 1) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', this._sidenavTransform);
                        this.renderer.setStyle(this.el.nativeElement, 'transform', this._sidenavTransform);
                        this.setShown(false);
                    } else {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                        this.setShown(true);
                    }
                } else {
                    this.renderer.addClass(this.document.body, 'hidden-sn');
                    this.renderer.setStyle(this.sideNav.nativeElement, 'transform', this._sidenavTransform);
                    this.renderer.setStyle(this.el.nativeElement, 'transform', this._sidenavTransform);
                    this.setShown(false);
                }
            } else {
                if (this.fixed) {
                    this.renderer.addClass(this.document.body, 'fixed-sn');

                    if (this.windowsWidth < 1441) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', this._sidenavTransform);
                        this.renderer.setStyle(this.el.nativeElement, 'transform', this._sidenavTransform);
                        this.setShown(false);
                    } else {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                        this.setShown(true);
                    }
                } else {
                    this.renderer.addClass(this.document.body, 'hidden-sn');
                    this.renderer.setStyle(this.sideNav.nativeElement, 'transform', this._sidenavTransform);
                    this.renderer.setStyle(this.el.nativeElement, 'transform', this._sidenavTransform);
                    this.setShown(false);
                }
            }
        }

        setTimeout(() => {
            this.renderer.removeClass(this.sideNav.nativeElement, 'no-transition');
        }, 0);
    }

    @HostListener('window:resize')
    windowsResize() {
        if (this.isBrowser) {
            const currentWidth = this.windowsWidth;
            this.windowsWidth = window.innerWidth;
            if (this.sidenavBreakpoint) {
                if (this.fixed && this.windowsWidth !== currentWidth) {
                    if (this.windowsWidth < +this.sidenavBreakpoint + 1) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', this._sidenavTransform);
                        this.renderer.setStyle(this.el.nativeElement, 'transform', this._sidenavTransform);
                        this.setShown(false);
                    }

                    if (this.windowsWidth > +this.sidenavBreakpoint && this.isShown) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                        this.hideOverlay();
                        this.setShown(true);
                    } else if (this.windowsWidth > +this.sidenavBreakpoint) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                        this.hideOverlay();
                        this.setShown(true);
                    }
                } else {
                    if (this.windowsWidth > +this.sidenavBreakpoint && this.windowsWidth !== currentWidth) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', this._sidenavTransform);
                        this.renderer.setStyle(this.el.nativeElement, 'transform', this._sidenavTransform);
                        this.hideOverlay();
                        this.setShown(false);
                    }
                }
            } else {
                if (this.fixed && this.windowsWidth !== currentWidth) {
                    if (this.windowsWidth < 1441) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', this._sidenavTransform);
                        this.renderer.setStyle(this.el.nativeElement, 'transform', this._sidenavTransform);
                        this.setShown(false);
                    }

                    if (this.windowsWidth > 1440 && this.isShown) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                        this.hideOverlay();
                        this.setShown(true);
                    } else if (this.windowsWidth > 1440) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                        this.hideOverlay();
                        this.setShown(true);
                    }
                } else {
                    if (this.windowsWidth > 1440 && this.windowsWidth !== currentWidth) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', this._sidenavTransform);
                        this.renderer.setStyle(this.el.nativeElement, 'transform', this._sidenavTransform);
                        this.hideOverlay();
                        this.setShown(false);
                    }
                }
            }
        }
    }

    show() {
        if (this.isBrowser) {
            if (this.sidenavBreakpoint) {
                if (this.fixed) {
                    if (this.windowsWidth < +this.sidenavBreakpoint + 1) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                        this.setShown(true);
                        this.showOverlay();
                    } else {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                        this.setShown(true);
                    }
                } else {
                    this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                    this.setShown(true);
                    this.showOverlay();
                }
            } else {
                if (this.fixed) {
                    if (this.windowsWidth < 1441) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                        this.setShown(true);
                        this.showOverlay();
                    } else {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                        this.setShown(true);
                    }
                } else {
                    this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                    this.setShown(true);
                    this.showOverlay();
                }
            }
            this._cdRef.markForCheck();
        }
    }

    hide() {
        if (this.isBrowser) {
            if (this.sidenavBreakpoint) {
                if (this.fixed) {
                    if (this.windowsWidth < +this.sidenavBreakpoint + 1) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', this._sidenavTransform);
                        this.renderer.setStyle(this.el.nativeElement, 'transform', this._sidenavTransform);
                        this.setShown(false);
                        this.hideOverlay();
                    } else {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', this._sidenavTransform);
                        this.renderer.setStyle(this.el.nativeElement, 'transform', this._sidenavTransform);
                        this.setShown(false);
                    }
                } else {
                    this.renderer.setStyle(this.sideNav.nativeElement, 'transform', this._sidenavTransform);
                    this.renderer.setStyle(this.el.nativeElement, 'transform', this._sidenavTransform);
                    this.setShown(false);
                    this.hideOverlay();
                }
            } else {
                if (this.fixed) {
                    if (this.windowsWidth < 1441) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', this._sidenavTransform);
                        this.renderer.setStyle(this.el.nativeElement, 'transform', this._sidenavTransform);
                        this.setShown(false);
                        this.hideOverlay();
                    } else {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', this._sidenavTransform);
                        this.renderer.setStyle(this.el.nativeElement, 'transform', this._sidenavTransform);
                        this.setShown(false);
                    }
                } else {
                    this.renderer.setStyle(this.sideNav.nativeElement, 'transform', this._sidenavTransform);
                    this.renderer.setStyle(this.el.nativeElement, 'transform', this._sidenavTransform);
                    this.setShown(false);
                    this.hideOverlay();
                }
            }
            this._cdRef.markForCheck();
        }
    }

    toggle() {
        if (this.isShown) {
            this.hide();
        } else {
            this.show();
        }
    }

    public toggleSlim() {
        const sidenavOverlay = this.el.nativeElement.querySelector('.sidenav-bg');
        const linksHeading = this.el.nativeElement.querySelectorAll('mdb-accordion-item-head');
        this.slimSidenav = !this.slimSidenav;

        linksHeading.forEach((el: any) => {
            if (this.slimSidenav) {
                this.renderer.addClass(el, 'overflow-hidden');
            } else {
                this.renderer.removeClass(el, 'overflow-hidden');
            }
        });

        this.renderer.addClass(this.sideNav.nativeElement, 'overflow-hidden');

        if (this.slimSidenav) {
            this.renderer.addClass(this.sideNav.nativeElement, 'slim');
            this.renderer.addClass(sidenavOverlay, 'slim');
        } else {
            this.renderer.removeClass(this.sideNav.nativeElement, 'slim');
            this.renderer.removeClass(sidenavOverlay, 'slim');
        }

        this._cdRef.markForCheck();
    }

    showOverlay() {
        this.renderer.setStyle(this.overlay.nativeElement, 'display', 'block');
        setTimeout(() => {
            this.renderer.setStyle(this.overlay.nativeElement, 'opacity', '1');
        }, 10);
    }

    hideOverlay() {
        this.renderer.setStyle(this.overlay.nativeElement, 'opacity', '0');
        setTimeout(() => {
            this.renderer.setStyle(this.overlay.nativeElement, 'display', 'none');
        }, 200);
    }

    setShown(value: boolean) {
        setTimeout(() => {
            this.isShown = value;

            if (value) {
                this.shown.emit();
            } else {
                this.hidden.emit();
            }
        }, 510);
    }

    ngOnDestroy() {
        if (this.document.body.classList.contains('hidden-sn')) {
            this.renderer.removeClass(this.document.body, 'hidden-sn');
        } else if (this.document.body.classList.contains('fixed-sn')) {
            this.renderer.removeClass(this.document.body, 'fixed-sn');
        }
    }
}

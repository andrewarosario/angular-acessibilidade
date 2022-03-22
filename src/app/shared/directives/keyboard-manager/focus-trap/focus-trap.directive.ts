import { AfterViewInit, Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[appFocusTrap]'
})
export class FocusTrapDirective implements AfterViewInit {
    constructor(private elementRef: ElementRef<any>) { }

    private firstFocusableElement: HTMLElement = null;
    private lastFocusableElement: HTMLElement = null;

    ngAfterViewInit(): void {
        const focusableElements = this.elementRef
            .nativeElement
            .querySelectorAll(`
            [tabindex]:not([tabindex="-1"]),
            a[href]:not([disabled]),
            button:not([disabled]),
            textarea:not([disabled]),
            input:not([disabled]),
            select:not([disabled])`
            ) as Array<HTMLElement>;

        this.firstFocusableElement = focusableElements[0];
        this.lastFocusableElement = focusableElements[focusableElements.length - 1];
        this.firstFocusableElement.focus();
    }
}
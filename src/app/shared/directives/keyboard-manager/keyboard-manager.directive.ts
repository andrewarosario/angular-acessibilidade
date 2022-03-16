import { ContentChildren, Directive, HostListener, QueryList } from "@angular/core";
import { KeyboardManagedItemDirective } from "./keyboard-managed-item.directive";

@Directive({
    selector: '[appKeyboardManager]'
})
export class KeyboardManagerDirective {

    @ContentChildren(KeyboardManagedItemDirective) 
    public items: QueryList<KeyboardManagedItemDirective>;

    @HostListener('keyup', ['$event'])
    public manageKeys(event: KeyboardEvent): void {
        switch(event.key) {
            case 'ArrowUp':
                console.log('up');
                break;
            case 'ArrowDown':
                console.log('down');
                break;
            case 'ArrowLeft':
                console.log('Left');
                break;
            case 'ArrowRight':
                console.log('Right');
                break;                
        }
    }
}
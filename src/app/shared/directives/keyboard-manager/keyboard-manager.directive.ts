import { Directive, HostListener } from "@angular/core";

@Directive({
    selector: '[appKeyboardManager]'
})
export class KeyboardManagerDirective {

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
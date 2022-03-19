import { ApplicationRef, ComponentRef, Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class BodyInjectorService {
    constructor(private appRef: ApplicationRef) { }

    public stackBeforeAppRoot(componentRef: ComponentRef<any>): void {
        const domElement = this.createDomElement();
        const appRoot = document.body.querySelector('app-root');
        document.body.insertBefore(domElement, appRoot);
    }

    private createDomElement(): HTMLElement {
        return null;
    }
}
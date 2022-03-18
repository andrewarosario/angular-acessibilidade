import { Injectable, TemplateRef } from "@angular/core";

export interface ModalConfig {
    templateRef: TemplateRef<any>,
    title: string
}

@Injectable()
export class ModalService {
    public open(config: ModalConfig): ModalRef {
        console.log('open called');
        return new ModalRef();
    }
}

export class ModalRef {
    public close() {
        console.log('close called');
        
    }
}
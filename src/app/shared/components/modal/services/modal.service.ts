import { Injectable } from "@angular/core";
import { ModalConfig } from "../interfaces/modal-config";

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
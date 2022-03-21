import { AfterViewInit, Component, HostBinding } from "@angular/core";
import { ModalConfig } from "./interfaces/modal-config";

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements AfterViewInit {
    @HostBinding('class.show')
    public show = false;
    
    public config: ModalConfig;

    ngAfterViewInit(): void {
        setTimeout(() => this.show = true);
    }
}
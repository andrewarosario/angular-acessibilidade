import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FocusBackModule } from "../../directives/keyboard-manager/focus-back/focus-back.module";
import { FocusTrapModule } from "../../directives/keyboard-manager/focus-trap/focus-trap.module";
import { ModalComponent } from "./modal.component";
import { ModalService } from "./services/modal.service";

@NgModule({
    declarations: [ModalComponent],
    imports: [CommonModule, FocusTrapModule, FocusBackModule],
    exports: [ModalComponent],
    providers: [ModalService]
})
export class ModalModule { }
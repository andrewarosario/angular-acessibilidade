import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FocusBackDirective } from "./focus-back.directive";

@NgModule({
    imports: [CommonModule],
    declarations: [FocusBackDirective],
    exports: [FocusBackDirective]
})
export class FocusBackModule { }
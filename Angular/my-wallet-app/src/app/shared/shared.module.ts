import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropDownComponent } from './dropdown/dropdown.component';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text/input-text.component';

@NgModule({
    declarations: [
        DropDownComponent,
        InputTextComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],exports: [
        DropDownComponent,
        InputTextComponent
    ]
})
export class SharedModule {}
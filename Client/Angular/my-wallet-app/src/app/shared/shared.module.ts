import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropDownComponent } from './dropdown/dropdown.component';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text/input-text.component';
import { InputNumberComponent } from './input-number/input.number.component';
import { NumericFormatPipe } from './pipes/numeric/numeric-format.pipe';
import { InputDateComponent } from './input-date/input-date.component';

@NgModule({
    declarations: [
        DropDownComponent,
        InputTextComponent,
        InputNumberComponent,
        InputDateComponent,
        NumericFormatPipe
    ],
    imports: [
        CommonModule,
        FormsModule
    ],exports: [
        DropDownComponent,
        InputTextComponent,
        InputNumberComponent,
        InputDateComponent,
        NumericFormatPipe
    ]
})
export class SharedModule {}
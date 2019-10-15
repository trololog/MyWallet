import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropDownComponent } from './dropdown/dropdown.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        DropDownComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],exports: [
        DropDownComponent
    ]
})
export class SharedModule {}
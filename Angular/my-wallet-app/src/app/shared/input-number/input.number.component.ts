import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputTextComponent } from '../input-text/input-text.component';

@Component({
    selector:'app-input-number',
    templateUrl: './input-number.component.html',
    styleUrls: ['./input-number.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputNumberComponent),
            multi: true
        }
    ]
})
export class InputNumberComponent extends InputTextComponent implements OnInit, ControlValueAccessor {
   
    ngOnInit() {
        super.ngOnInit();
    }

    onKeyDown(event:any) {
        if(!((event.key >= 0 && event.key <= 9) || event.key === "." || event.key === "Backspace")) {
            event.preventDefault();
        }
    }

    writeValue(value:any) {
        super.writeValue(value);
    }

    registerOnChange(fn:any) {
        super.registerOnChange(fn);
    }

    registerOnTouched(fn:any) {
        super.registerOnChange(fn);
    }

    setDisabledState(isDisabled: boolean) {
        super.setDisabledState(isDisabled);
    }
}
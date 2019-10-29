import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
export class InputNumberComponent implements OnInit, ControlValueAccessor {
    @Input() customPlaceHolder: string;

    _val: string = "";
    isDisabled: boolean;
   
    ngOnInit() {
        this._val = "";
    }

    onInput(value: string) {
        this._val = value || "";
        this.onChange(this._val);
        this.onTouch();
    }

    onChange: any = (_:any) => {};

    onTouch: any = () => {};

    onKeyDown(event:any) {
        if(!((event.key >= 0 && event.key <= 9) 
        || event.key === "." 
        || event.key === "Backspace" 
        || event.key === "Tab")) {
            event.preventDefault();
        }
    }

    writeValue(value:any) {
        if (value) {
            this._val = value || "";
        } else {
            this._val = "";
        }
    }

    registerOnChange(fn:any) {
        this.onChange = fn;
    }

    registerOnTouched(fn:any) {
        this.onTouch = fn;
    }

    setDisabledState(isDisabled: boolean) {
        this.isDisabled = isDisabled;
    }
}
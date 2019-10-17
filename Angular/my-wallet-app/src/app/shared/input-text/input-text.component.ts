import { Component, Input, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-input-text',
    templateUrl: './input-text.component.html',
    styleUrls: ['./input-text.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputTextComponent),
            multi: true
        }
    ]
})
export class InputTextComponent implements OnInit, ControlValueAccessor {
    @Input() customPlaceHolder: string;

    _val: string = "";
    isDisabled: boolean;

    ngOnInit() {
        this._val = "";
    }

    onInput(value: string) {
        console.log(1);
        this._val = value;
        this.onChange(this._val);
        this.onTouch();
    }

    onChange: any = (_:any) => {};

    onTouch: any = () => {};

    writeValue(value: any) {
        console.log(2);
        if (value) {
            this._val = value || '';
        } else {
            this._val = '';
        }
        console.log(this._val);
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
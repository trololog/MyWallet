import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent {
    @Input() customPlaceHolder: string;

    value: string = "";
    isDisabled: boolean;

    /*onInput(value: string) {
        this.value = value;
        this.onChange(this.value);
        this.onTouch();
    }

    @Input() 
    collectionItems: DropdownItem[] = [];

    onChange: any = (value) => {
        console.log(value);
        console.log(value);
    };

    onTouch: any = () => {};

    writeValue(value: any) {
        if (value) {
            this.value = value;
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
    }*/
}
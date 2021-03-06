import { Component, Input, forwardRef, Output, EventEmitter  } from '@angular/core';
import { DropdownItem } from './dropdownItem.model';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DropDownComponent),
            multi: true
        }
    ]
})
export class DropDownComponent implements ControlValueAccessor {
    @Input()
    name: string;
    isDisabled: boolean;

    @Input('value')
    _value: string;

    @Input()
    collectionItems: DropdownItem[] = [];

    @Output() valueChange: EventEmitter<string> = new EventEmitter();

    onChange: any = () => {};
    onTouched: any = () => {};

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
        this.onChange(value);
        this.onTouched();
    }

    registerOnChange(fn) {
        this.onChange = fn;
    }

    registerOnTouched(fn) {
        this.onTouched = fn;
    }

    writeValue(value) {
        if(value)
            this.value = value;
    }

    selectItem(item) {
        this.onChange(item);
        this.value = item;
        this.valueChange.emit(item);
    }

    setDisabledState(isDisabled: boolean) {
        this.isDisabled = isDisabled;
    }
}
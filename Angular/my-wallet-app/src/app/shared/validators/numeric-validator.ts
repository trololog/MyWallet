import { AbstractControl } from '@angular/forms';

export function numericValidator(control: AbstractControl): {[key:string] : any } | null
{
    let numberReg = new RegExp("/^\d+$/");
    console.log(control.value);
    const valid = numberReg.test(control.value);

    return valid ? null: {invalidNumber: { valid:false,value:control.value } };
}
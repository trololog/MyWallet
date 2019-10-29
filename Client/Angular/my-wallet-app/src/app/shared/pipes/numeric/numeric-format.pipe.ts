import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'NumericFormat'})
export class NumericFormatPipe implements PipeTransform
{
    thousandSeparator:string=',';
    decimalSeparator:string='.';

    transform(value: number, prefix: string): string {
        if(value) {
            return value.toString();
        }
        
        return value.toString();
    }

    format_number(number:string, prefix: string) {
        let number_array= number.split('');
        let decimalpointsCount: number = 0;
        let hasDecimalpoint: boolean = false;
        number_array.forEach(e=>{
            if(e===".") {
                decimalpointsCount++;
            }
        })

        
        
    }
}
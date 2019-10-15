import { Component, Input } from '@angular/core';
import { DropdownItem } from './dropDownItem.model';

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss']
})
export class DropDownComponent {
    @Input() 
    collectionItems: DropdownItem[] = [];
}
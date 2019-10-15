import { DropdownItem } from '../shared/dropdown/dropDownItem.model';

export interface TransactionType extends DropdownItem {
    code: string,
    value: string
}
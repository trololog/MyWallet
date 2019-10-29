import { Component, OnInit } from '@angular/core';
import { TransactionService } from './transaction.service';
import { TransactionType } from './model/transaction-type.model';
import { TransactionCategory }  from './model/transaction-category.model';
import { Balance } from './model/balance.model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Transaction } from './model/transaction.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
  providers: [TransactionService]
})
export class TransactionComponent implements OnInit {

  transactionForm: FormGroup;

  constructor(private transactionService: TransactionService) { }
  transactionTypes: TransactionType[];
  transactionCategories: TransactionCategory[];
  filteredCategories: TransactionCategory[];
  balance: Balance = new Balance();
  placeHolder: string = "Transaction Concept";
  placeHolder1: string = "Transaction amount";
  placeHolder2: string = "DD/MM/YYYY";

  ngOnInit() {
    this.transactionTypes = this.transactionService.getTransactionTypes();
    this.transactionCategories = this.transactionService.getTransactionCategories();

    this.transactionForm = new FormGroup({
      'type': new FormControl('1'),
      'category': new FormControl('1'),
      'concept': new FormControl('', [Validators.required]),
      'amount': new FormControl('',  [Validators.required]),
      'date': new FormControl('', [Validators.required])
    });
  }

  getControlValue(control: string) {
    return this.transactionForm.controls[control].value;
  }

  resetForm() {
    this.transactionForm.reset();
  }

  onTypeChange(event: string) {
    this.filteredCategories = [...this.transactionCategories
    .filter(t=> t.typeId === event)];
    console.log(this.filteredCategories);
  }

  onAddTransaction() {
    const dateElements = this.getControlValue("date").split("/");
    const transaction: Transaction = {
      amount: this.getAmountValue(parseFloat(this.getControlValue("amount")), this.getControlValue("type")),
      concept: this.getControlValue("concept"),
      type: this.getControlValue("type"),
      categoryDescription: this.getTransactionCategory(this.getControlValue("category")),
      date: new Date(`${ dateElements[2] }-${ dateElements[1] }-${ dateElements[0] }`)
    };

    console.log(transaction);

    this.balance.addTransaction(transaction);
    
    this.resetForm();
  }

  getAmountValue(value: number, type: string) {
    if(type === "2") {
      return value*-1;
    } else {
      return value;
    }
  }

  getTransactionCategory(category: any) {
    return this.filteredCategories
    .find(t=> t.code === category)
      .value;
  }
  
  setAmountClass(item:string) {
    const valueNumber = parseFloat(item);
    return "transaction-list-item number " + (valueNumber >= 0 ? "positive-amount" : "negative-amount");
  }

  displaySymbol(amount: number) {
    if(amount > 0 ) {
      return "+";
    } else {
      return "";
    }
  }
}

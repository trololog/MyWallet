import { Component, OnInit } from '@angular/core';
import { TransactionService } from './transaction.service';
import { TransactionType } from './transaction-type.model';
import { Balance } from './Balance.model';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

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
  balance: Balance = new Balance();

  ngOnInit() {
    this.transactionTypes = this.transactionService.getTransactionTypes();

    this.transactionForm = new FormGroup({
      'type': new FormControl('1'),
      'concept': new FormControl(''),
      'amount': new FormControl('')
    });

    this.transactionForm.valueChanges.subscribe(console.log);
  }

}

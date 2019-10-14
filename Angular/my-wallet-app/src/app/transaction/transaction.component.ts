import { Component, OnInit } from '@angular/core';
import { TransactionService } from './transaction.service';
import { TransactionType } from './transaction-type.model';
import { Balance } from './Balance.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
  providers: [TransactionService]
})
export class TransactionComponent implements OnInit {

  constructor(private transactionService: TransactionService) { }
  transactionTypes: TransactionType[];
  balance: Balance = new Balance();

  ngOnInit() {
    this.transactionTypes = this.transactionService.getTransactionTypes();
  }

}

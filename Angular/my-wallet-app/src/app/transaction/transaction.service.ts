import { Injectable } from '@angular/core';
import { TransactionType } from './transaction-type.model';

export class TransactionService {
    private transactionType: TransactionType[] = [];

    getTransactionTypes() {
        this.transactionType.push(
            {
                id: 1,
                name: "Income",
            },
            {
                id:2,
                name: "Outcome"
            });

        console.log(this.transactionType);

        return this.transactionType;
    }
}